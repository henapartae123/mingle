import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { db } from "./fb";
import "./SetUp.css";
import camera from "./assets/add-a-photo.png";
import pen from "./assets/edit.png";

const SetUp = () => {
  const { currentUser } = useContext(AuthContext);
  const userRef = collection(db, "users");
  const [user, setUser] = useState([]);
  const [Details, setDetails] = useState([]);
  const [formData, setFormData] = useState({
    proffession: "",
    location: "",
    bio: "",
    personality: "",
    family: "",
    lovelang: "",
    zodiac: "",
    communication: "",
    workout: "",
    pets: "",
    drinking: "",
    smoking: "",
    diet: "",
    socials: "",
    sleep: "",
  });

  useEffect(() => {
    const getUser = async () => {
      const q = query(userRef, where("uid", "==", currentUser.uid));
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
  //     const unsub = onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
  //       setDetails(doc.data());
  //     });

  //     return () => {
  //       unsub();
  //     };
  //   };
  //   currentUser.uid && getDetails();
  // }, [currentUser.uid]);

  // console.log(Object.entries(Details));
  var modal = document.getElementById("bio");
  const openModal = () => {
    modal.style.display = "block";
  };

  const closeModal = () => {
    modal.style.display = "none";
  };

  return (
    <div className="setup">
      <div className="container">
        <div className="left-side">
          <div className="bio-box">
            <div className="avatar-side">
              <div>
                <span>
                  <img
                    src={user.photoURL}
                    alt="Avatar"
                    className="bio-avatar"
                  />
                </span>
              </div>

              <div className="basic-info">
                <div className="name">{user.displayName}</div>
                <div>{user.age}</div>
                <div>{user.location}</div>
                <div>{user.proffession}</div>
              </div>
            </div>

            <div className="bio">
              <div className="bio-container">
                <div className="semi-title">
                  <h3>Bio</h3>
                </div>

                <div className="bio-text">{user.bio}</div>
              </div>

              <div id="bio" className="bio-edit">
                <div className="edit-modal-content">
                  <span className="close" onClick={closeModal}>
                    &times;
                  </span>

                  <div className="edit-window">
                    <div className="edit-form-container">
                      <fieldset>
                        <input
                          type="text"
                          placeholder="Proffession"
                          value={formData.proffession}
                          onChange={
                            (e) =>
                              setFormData({
                                ...formData,
                                proffession: e.target.value,
                              }) //setting the formData to the value input of the textfield
                          }
                        />
                        <input
                          type="text"
                          placeholder="Location"
                          value={formData.location}
                          onChange={
                            (e) =>
                              setFormData({
                                ...formData,
                                location: e.target.value,
                              }) //setting the formData to the value input of the textfield
                          }
                        />
                        <input
                          type="text"
                          placeholder="Bio"
                          value={formData.bio}
                          onChange={
                            (e) =>
                              setFormData({ ...formData, bio: e.target.value }) //setting the formData to the value input of the textfield
                          }
                        />

                        <select name="" id="" value={formData.personality}>
                          <option value=""></option>
                          <option value=""></option>
                          <option value=""></option>
                        </select>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bio-btn">
              <button className="edit-pen">
                <img src={pen} alt="" />
              </button>
            </div>
          </div>

          {/* gallery section */}
          <div className="gallery">
            <div className="semi-title">
              <h3>Gallery</h3>
            </div>
            <div className="img-gallery">3</div>
          </div>
        </div>
        <div className="right-side">
          {/* <div className="basic">
            <div className="semi-title">
              <h3>Basic info</h3>
            </div>
            <div>
              <ul>
                <li>{user.sex}</li>
                <li>{user.age}</li>
                <li>{user.location}</li>
                <li></li>
              </ul>
            </div>
          </div> */}
          <div className="lifestyle">
            <div className="semi-title">
              <h3>Lifestyle</h3>
            </div>
            <div>
              <ul>
                <li>{user.workout}</li>
                <li>{user.pets}</li>
                <li>{user.drinking}</li>
                <li>{user.smoking}</li>
                <li>{user.diet}</li>
                <li>{user.socials}</li>
                <li>{user.sleep}</li>
              </ul>
            </div>
          </div>
          <div className="personality">
            <div className="semi-title">
              <h3>Personality</h3>
            </div>
            <div>
              <ul>
                <li>{user.personality}</li>
                <li>{user.family}</li>
                <li>{user.lovelang}</li>
                <li>{user.zodiac}</li>
                <li>{user.communication}</li>
              </ul>
            </div>
          </div>

          <div className="edit-container">
            <button id="btn" className="edit-btn" onClick={openModal}>
              <img src={pen} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetUp;
