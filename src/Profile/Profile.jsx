import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../fb";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { regular } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { AuthContext } from "../Contexts/AuthContext";
// import OpenChat from "./OpenChat";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const userRef = collection(db, "users");
  const [Details, setDetails] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const q = query(userRef, where("uid", "==", id));
      try {
        const data = await getDocs(q);

        data.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          setUser(doc.data());
        });
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

  // useEffect(() => {
  //   const getDetails = () => {
  //     const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
  //       setDetails(doc.data());
  //     });

  //     return () => {
  //       unsub();
  //     };
  //   };
  //   user.uid && getDetails();
  // }, [user.uid]);
  // console.log(Object.entries(Details));

  const [activeIndex, setactiveIndex] = useState(1);
  const handleClick = (index) => setactiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  //open chat code

  const { currentUser } = useContext(AuthContext);
  const Open = async () => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}
  };
  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="top-bar">
          <div className="timeline">
            <div className="user-name">
              <h1>{user.displayName}</h1>
            </div>
          </div>
          <div className="profile-avatar">
            <img src={user.photoURL} alt="" />
          </div>
          <div className="link-container">
            <div className="profile-links">
              <div className="tabs">
                <button
                  className={`tab ${checkActive(1, "active")}`}
                  onClick={() => handleClick(1)}
                >
                  About
                </button>
                <button
                  className={`tab ${checkActive(2, "active")}`}
                  onClick={() => handleClick(2)}
                >
                  Gallery
                </button>

                <button
                  className={`tab ${checkActive(3, "active")}`}
                  onClick={() => handleClick(3)}
                >
                  Interests
                </button>
              </div>
            </div>
            <div className="chat-btn-container">
              <Link to="/chats">
                <button className="chat-btn" onClick={Open}>
                  <FontAwesomeIcon
                    icon={faComment}
                    beat
                    size="xl"
                    style={{ color: "#ff6e6c" }}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="profile-contents">
          <div className={`profile-content ${checkActive(1, "active")}`}>
            <div className="about-tab">
              <div className="about-card">
                <h2>About</h2>
                <div>
                  <p>Age: {user.age}</p>{" "}
                </div>
                <div>
                  <p>location: {user.location}</p>{" "}
                </div>
                <div>
                  <p>Proffession: {user.proffession}</p>{" "}
                </div>
              </div>
              <div className="bio-card">
                <h2>Bio</h2>
                <div>
                  <p>{user.bio}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`profile-content ${checkActive(2, "active")}`}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              voluptate aut, eius, reiciendis commodi possimus alias, vero
              perspiciatis exercitationem numquam quas accusamus quam quod
              totam? Eveniet laudantium a sunt architecto?
            </p>
          </div>
          <div className={`profile-content ${checkActive(3, "active")}`}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              possimus eligendi enim veniam illum reiciendis expedita, fugiat
              nihil maxime omnis! Natus, neque. Quas magni animi aut!
              Dignissimos labore quae quia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
