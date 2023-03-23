import { signOut } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { auth } from "./fb";
import "./Home.css";
import Search from "./Search";
import grid from "./assets/grid.png";
import chat from "./assets/chat.png";
import downarrow from "./assets/arrow.png";

const Home = ({ search, setSearch }) => {
  const { currentUser } = useContext(AuthContext);
  // const [search, setSearch] = useState({ name: "" });
  return (
    <div className="home">
      <div className="top-nav">
        <div>
          <span className="main-logo">Mingle</span>
        </div>

        <div className="top-links">
          <div className="bio-link">
            <div className="user">
              <div>
                <span className="user-img">
                  <img
                    src={currentUser.photoURL}
                    alt="Avatar"
                    className="avatar"
                  />
                </span>
              </div>

              <div>
                <h3>{currentUser.displayName}</h3>
              </div>
            </div>

            <div className="dropdown">
              <div>
                <button className="dropdown-btn">
                  <img src={downarrow} alt="" />
                </button>
              </div>

              <div className="dropdown-links">
                <Link to={"/setup"}>setup</Link>
                <Link onClick={() => signOut(auth)}>logout</Link>
              </div>
            </div>
          </div>
          <div className="links">
            <Link to={"/browse"}>
              <img src={grid} alt="" />
            </Link>
            <Link to={"/chats"}>
              <img src={chat} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="content">
        {/* <div className="side-nav">
          <div className="profile-section">
            <span className="user-img">
              <img src={currentUser.photoURL} alt="Avatar" className="avatar" />
            </span>
            <span className="user-details">
              <h2>{currentUser.displayName}</h2>
              <p>male</p> <p>24</p>
            </span>
          </div>

          <div className="nav-links">
            <Link to={"/browse"}>Browse</Link>
            <Link to={"/chats"}>Connections</Link>
            <Link to={"/setup"}>Set Up</Link>
          </div>
          <div className="logout-link">
            <Link onClick={() => signOut(auth)}>Log Out</Link>
          </div>
        </div> */}

        <Outlet />
      </div>
    </div>
  );
};

export default Home;
