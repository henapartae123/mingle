import React, { useState, useEffect, useContext } from "react";
import {
  collection,
  query,
  where,
  setDoc,
  doc,
  updateDoc,
  getDocs,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "./fb";
import UserDetailsBasic from "./UserDetailsBasic";
import UserDetailsPersonality from "./UserDetailsPersonality";
import UserDetailsLifestyle from "./UserDetailsLifestyle";
import Progress from "./Progress";
import { AuthContext } from "./AuthContext";
import "./UserDetails.css";

const UserDetails = () => {
  const [page, setPage] = useState("basic");
  const navigate = useNavigate();
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

  const nextPage = (page) => {
    setPage(page);
  };

  const nextPageNumber = (pageNumber) => {
    switch (pageNumber) {
      case "1":
        setPage("basic");
        break;
      case "2":
        setPage("personality");
        break;
      case "3":
        setPage("lifestyle");
        break;
      default:
        setPage("1");
    }
  };

  const { currentUser } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateDoc(doc(db, "users", currentUser.uid), {
      proffession: formData.proffession,
      location: formData.location,
      bio: formData.bio,
      personality: formData.personality,
      family: formData.family,
      lovelang: formData.lovelang,
      zodiac: formData.zodiac,
      communication: formData.communication,
      workout: formData.workout,
      pets: formData.pets,
      drinking: formData.drinking,
      smoking: formData.smoking,
      diet: formData.diet,
      socials: formData.socials,
      sleep: formData.sleep,
    });
    navigate("/");
  };

  return (
    <div className="user-details">
      <Progress page={page} onPageNumberClick={nextPageNumber} />

      <div>
        {
          {
            basic: (
              <UserDetailsBasic
                formData={formData}
                setFormData={setFormData}
                onButtonClick={nextPage}
              />
            ),
            personality: (
              <UserDetailsPersonality
                formData={formData}
                setFormData={setFormData}
                onButtonClick={nextPage}
              />
            ),
            lifestyle: (
              <UserDetailsLifestyle
                formData={formData}
                setFormData={setFormData}
                handleSubmit={handleSubmit}
              />
            ),
          }[page]
        }
      </div>

      <div>
        <button>Add Later</button>
      </div>
    </div>
  );
};

export default UserDetails;
