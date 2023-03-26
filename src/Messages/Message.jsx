import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { ChatContext } from "../Contexts/ChatContext";
import "./Message.css";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  const dateformat1 = message.date.toDate().toLocaleDateString();
  const dateformat2 = message.date.toDate().toLocaleTimeString();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>{dateformat2}</span>
      </div>
      <div className="messageContent">
        <div>
          <p>{message.text}</p>
        </div>
        <div>{message.img && <img src={message.img} alt="" />}</div>
      </div>
    </div>
  );
};

export default Message;
