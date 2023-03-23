import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import clip from "./assets/attach-icon.png";
import { auth, storage, db } from "./fb";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    const sex = e.target[3].value;
    const age = e.target[4].value;
    const file = e.target[5].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
              age,
              sex,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/user-details");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };
  return (
    <div className="form-container">
      <div className="formWrapper">
        <span className="logo">Mingle</span>
        <span className="title">Sign Up For Free</span>
        <form onSubmit={handleSubmit}>
          <div className="form-wrap">
            <div className="left">
              <label htmlFor="text">Full Name</label>
              <input type="text" placeholder="" required />
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="" required />
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="" required />
            </div>

            <div className="right">
              <label htmlFor="sex">Gender</label>
              <select
                type="text"
                name="sex"
                id="sex"
                defaultValue={""}
                required
              >
                <option value="" hidden disabled>
                  Select
                </option>
                <option value="m">Male</option>
                <option value="f">Female</option>
              </select>

              <label htmlFor="age">Age</label>
              <input type="number" placeholder="" required />

              <label>Add an avatar</label>
              <input type="file" id="file" className="input-upload" required />
            </div>
          </div>

          <span className="Regbtn">
            <button className="btn" disabled={loading}>
              Register
            </button>
          </span>
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Oops Error</span>}
        </form>

        <span className="bottom-text">
          Already have an account?
          <Link to="/login" className="login-link">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
