import {
  arrayUnion,
  doc,
  onSnapshot,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { ChatContext } from "../Contexts/ChatContext";
import "./Chats.css";
import { db, storage } from "../fb";
import Messages from "../Messages/Messages";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Chats = () => {
  const [err, setErr] = useState(false);
  //for input
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  //for sidebar chats
  const [chats, setChats] = useState([]);
  const [search, setSearch] = useState("");
  const [searchedchats, setSearchedChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { data, dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  useEffect(() => {
    try {
      setSearchedChats(
        Object.entries(chats).filter((chat) =>
          chat[1].userInfo.displayName
            .toLowerCase()
            .includes(search.toLowerCase())
        )
      );
    } catch (err) {
      setErr(true);
      console.log(err);
    }
  }, [search, chats]);
  // console.log(Object.entries(searchedchats));
  // console.log(Object.entries(chats));

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          // setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };
  return (
    <div className="main-page">
      <div className="chat-container">
        <div className="chat-header">
          <div>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              style={{ border: "1px solid" }}
            />
          </div>
        </div>
        <div className="chat-content">
          <div className="chats-list">
            {searchedchats
              ?.sort((a, b) => b[1].date - a[1].date)
              .map((chat) => (
                <div
                  className="userChat"
                  key={chat[0]}
                  onClick={() => handleSelect(chat[1].userInfo)}
                >
                  <img
                    className="chat-avatar"
                    src={chat[1].userInfo.photoURL}
                    alt=""
                  />
                  <div className="userChatInfo">
                    <span>{chat[1].userInfo.displayName}</span>
                    <p>{chat[1].lastMessage?.text.slice(0, 10)}</p>
                  </div>
                </div>
              ))}

            {err && <span>No chats yet</span>}
          </div>

          <div className="chat-page">
            <div className="chat-window">
              <span className="top">{data.user?.displayName}</span>
              <div>
                <Messages />
              </div>
            </div>
            <div className="chat-field">
              <div className="chat-input">
                <input
                  className="text-input"
                  type="text"
                  placeholder="Type Something and hit send..."
                  onChange={(e) => setText(e.target.value)}
                  value={text}
                />
                {/* <img src={Attach} alt="" /> */}
                <input
                  className="file-input"
                  type="file"
                  style={{ display: "none" }}
                  id="file"
                  onChange={(e) => setImg(e.target.files[0])}
                />
                <label htmlFor="file">
                  <FontAwesomeIcon
                    size="sm"
                    style={{ color: "black", cursor: "pointer" }}
                    icon={faPaperclip}
                  />
                </label>
              </div>
              <div className="chat-button">
                <button className="send-button" onClick={handleSend}>
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    size="xl"
                    style={{ color: "#ff6e6c" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
