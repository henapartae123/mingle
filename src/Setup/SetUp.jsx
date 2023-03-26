import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { db } from "../fb";
import "./SetUp.css";
import pen from "../assets/edit.png";

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
  const openModal1 = () => {
    modal.style.display = "block";
  };

  const closeModal1 = () => {
    modal.style.display = "none";
  };

  var modal2 = document.getElementById("persona");
  const openModal2 = () => {
    modal2.style.display = "block";
  };

  const closeModal2 = () => {
    modal2.style.display = "none";
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
                  <div>
                    <span className="close" onClick={closeModal1}>
                      &times;
                    </span>
                  </div>

                  <div className="edit-window">
                    <div className="edit-form-container">
                      <fieldset>
                        <label htmlFor="">Profession</label>
                        <input
                          type="text"
                          placeholder=""
                          value={formData.proffession}
                          onChange={
                            (e) =>
                              setFormData({
                                ...formData,
                                proffession: e.target.value,
                              }) //setting the formData to the value input of the textfield
                          }
                        />

                        <label htmlFor="">Location</label>
                        <input
                          type="text"
                          placeholder=""
                          value={formData.location}
                          onChange={
                            (e) =>
                              setFormData({
                                ...formData,
                                location: e.target.value,
                              }) //setting the formData to the value input of the textfield
                          }
                        />
                        <label htmlFor="">Bio</label>
                        <textarea
                          type="text"
                          placeholder=""
                          value={formData.bio}
                          onChange={
                            (e) =>
                              setFormData({ ...formData, bio: e.target.value }) //setting the formData to the value input of the textfield
                          }
                        />
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
              <div id="persona" className="persona-edit">
                <div className="edit-modal-content">
                  <span className="close" onClick={closeModal2}>
                    &times;
                  </span>

                  <div className="edit-window">
                    <div className="edit-form-container">
                      <fieldset>
                        <div className="left">
                          <label htmlFor="personality">Family Plans</label>
                          <select
                            type="text"
                            name="famplans"
                            defaultValue={""}
                            value={formData.family}
                            onChange={
                              (e) =>
                                setFormData({
                                  ...formData,
                                  family: e.target.value,
                                }) //setting the formData to the value input of the textfield
                            }
                          >
                            <option value="" hidden disabled></option>
                            <option value="wantchildren">
                              I want children
                            </option>
                            <option value="dontwantchildren">
                              I don't want children
                            </option>
                            <option value="wantmore">
                              I have children and want more
                            </option>
                            <option value="dontwantmore">
                              I have children and don't want more
                            </option>
                            <option value="notsure">Not sure yet</option>
                          </select>

                          <label htmlFor="workout">Workout Plans</label>
                          <select
                            type="text"
                            name="workout"
                            defaultValue={""}
                            value={formData.workout}
                            onChange={
                              (e) =>
                                setFormData({
                                  ...formData,
                                  workout: e.target.value,
                                }) //setting the formData to the value input of the textfield
                            }
                          >
                            <option value="" hidden disabled></option>
                            <option value="everyday">Every day</option>
                            <option value="often">Often</option>
                            <option value="sometimes">Sometimes</option>
                            <option value="never">Never</option>
                          </select>

                          <label htmlFor="pets">Pets</label>
                          <select
                            type="text"
                            name="pets"
                            defaultValue={""}
                            value={formData.pets}
                            onChange={
                              (e) =>
                                setFormData({
                                  ...formData,
                                  pets: e.target.value,
                                }) //setting the formData to the value input of the textfield
                            }
                          >
                            <option value="" hidden disabled></option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="other">Other</option>
                            <option value="dontwant">Don't want</option>
                          </select>

                          <label htmlFor="drinking">Drinking habits</label>
                          <select
                            type="text"
                            name="drinking"
                            defaultValue={""}
                            value={formData.drinking}
                            onChange={
                              (e) =>
                                setFormData({
                                  ...formData,
                                  drinking: e.target.value,
                                }) //setting the formData to the value input of the textfield
                            }
                          >
                            <option value="" hidden disabled></option>
                            <option value="socialy">Socialy</option>
                            <option value="mostnights">Most Nights</option>
                            <option value="onspecial">
                              On Special occasions
                            </option>
                            <option value="dontwant">Don't want</option>
                          </select>
                        </div>

                        <div className="right">
                          <label htmlFor="smoking">Smoking habits</label>
                          <select
                            type="text"
                            name="smokingng"
                            defaultValue={""}
                            value={formData.smoking}
                            onChange={
                              (e) =>
                                setFormData({
                                  ...formData,
                                  smoking: e.target.value,
                                }) //setting the formData to the value input of the textfield
                            }
                          >
                            <option value="" hidden disabled></option>
                            <option value="socialsmoker">Social Smoker</option>
                            <option value="whendrinking">
                              Smoke when drinking
                            </option>
                            <option value="nonsmoker">Non Smoker</option>
                            <option value="smoker">Smoker</option>
                            <option value="trynaquit">Trying to quit</option>
                          </select>

                          <label htmlFor="diet">Dietary Preference</label>
                          <select
                            type="text"
                            name="diet"
                            defaultValue={""}
                            value={formData.diet}
                            onChange={
                              (e) =>
                                setFormData({
                                  ...formData,
                                  diet: e.target.value,
                                }) //setting the formData to the value input of the textfield
                            }
                          >
                            <option value="" hidden disabled></option>
                            <option value="vegan">Vegan</option>
                            <option value="vegetarian">Vegetarian</option>
                            <option value="omnivore">Omnivore</option>
                            <option value="carnivore">Carnivore</option>
                            <option value="pescatarian">Pescatarian</option>
                            <option value="kosher">Kosher</option>
                            <option value="halal">Halal</option>
                            <option value="other">Other</option>
                          </select>

                          <label htmlFor="socials">Social Activity</label>
                          <select
                            type="text"
                            name="socials"
                            defaultValue={""}
                            value={formData.socials}
                            onChange={
                              (e) =>
                                setFormData({
                                  ...formData,
                                  socials: e.target.value,
                                }) //setting the formData to the value input of the textfield
                            }
                          >
                            <option value="" hidden disabled></option>
                            <option value="active">Socially Active</option>
                            <option value="offgrid">Off the grid</option>
                            <option value="influencer">
                              Influencer Status
                            </option>
                            <option value="passive">Passive Scroller</option>
                          </select>

                          <label htmlFor="sleep">Sleeping habits</label>
                          <select
                            type="text"
                            name="sleep"
                            defaultValue={""}
                            value={formData.sleep}
                            onChange={
                              (e) =>
                                setFormData({
                                  ...formData,
                                  sleep: e.target.value,
                                }) //setting the formData to the value input of the textfield
                            }
                          >
                            <option value="" hidden disabled></option>
                            <option value="earlybird">Early bird</option>
                            <option value="nightowl">Night owl</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bio-btn">
              <button className="edit-pen">
                <img src={pen} alt="" onClick={openModal1} />
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
                <li>
                  {user.workout && (
                    <div>
                      Workout: <div className="dets">{user.workout}</div>
                    </div>
                  )}
                </li>
                <li>
                  {user.pets && (
                    <div>
                      Pets: <div className="dets">{user.pets}</div>
                    </div>
                  )}
                </li>
                <li>
                  {user.drinking && (
                    <div>
                      Drink: <div className="dets">{user.drinking}</div>
                    </div>
                  )}
                </li>
                <li>
                  {user.smoking && (
                    <div>
                      Smoke: <div className="dets">{user.smoking}</div>
                    </div>
                  )}
                </li>
                <li>
                  {user.diet && (
                    <div>
                      Diet: <div className="dets">{user.diet}</div>
                    </div>
                  )}
                </li>
                <li>
                  {user.socials && (
                    <div>
                      Social Activity:{" "}
                      <div className="dets">{user.socials}</div>
                    </div>
                  )}
                </li>
                <li>
                  {user.sleep && (
                    <div>
                      {" "}
                      Sleep: <div className="dets">{user.sleep}</div>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="personality">
            <div className="semi-title">
              <h3>Personality</h3>
            </div>
            <div>
              <ul>
                <li>
                  {user.personality && (
                    <div>
                      Personality type:
                      <div className="dets">{user.personality}</div>
                    </div>
                  )}
                </li>
                <li>
                  {user.family && (
                    <div>
                      Family Preference:{" "}
                      <div className="dets">{user.family}</div>
                    </div>
                  )}
                </li>
                <li>
                  {user.lovelang && (
                    <div>
                      Love language: <div className="dets">{user.lovelang}</div>
                    </div>
                  )}
                </li>
                <li>
                  {user.zodiac && (
                    <div>
                      Zodiac sign: <div className="dets">{user.zodiac}</div>
                    </div>
                  )}
                </li>
                <li>
                  {user.communication && (
                    <div>
                      Communication style:
                      <div className="dets">{user.communication}</div>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>

          <div className="edit-container">
            <button id="btn" className="edit-btn" onClick={openModal2}>
              <img src={pen} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetUp;
