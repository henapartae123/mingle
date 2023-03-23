import React, { useContext, useEffect, useState } from "react";
import "./Browse.css";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "./fb";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import MultiRangeSlider from "./slider";
import Search from "./Search";

const Browse = () => {
  const [activeUser, setActiveUser] = useState([]);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [minim, setMinim] = useState(18);
  const [maxim, setMaxim] = useState(75);
  const [range, setRange] = useState([]);
  const usersRef = collection(db, "users");

  const { currentUser } = useContext(AuthContext);
  //

  useEffect(() => {
    const getCurrentUser = async () => {
      const currentUserDoc = query(
        usersRef,
        where("uid", "==", currentUser.uid)
      );

      try {
        const userdata = await getDocs(currentUserDoc);
        const fuserdata = userdata.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(fuserdata);
        setActiveUser(fuserdata);
      } catch (err) {
        console.log(err);
      }
    };
    getCurrentUser();
    const getUsers = async () => {
      const q = query(usersRef, where("uid", "!=", currentUser.uid));
      try {
        const data = await getDocs(q);
        const fdata = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        // console.log(fdata);
        setUsers(fdata);
      } catch (err) {
        console.log(err);
      }
    };

    getUsers();
  }, []);

  useEffect(() => {
    setSearchedUsers(
      users.filter(
        (user) => user.displayName.toLowerCase().includes(search.toLowerCase())
        // &&
        // user.sex.includes(activeUser[0].sex)
        // &&
        // user.age >= min && user.age <= max
      )
    );
  }, [search, users]);

  // useEffect(({ min, max }) => {
  //   setRange((range) => [min, max]);
  // }, []);

  // const handleOnChange = ({ min, max }) => {
  //   setRange( [min, max]);
  // };
  // console.log(fdata);
  return (
    <div className="browse-container">
      <div>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          style={{ border: "1px solid" }}
        />
        {/* <MultiRangeSlider
          min={minim}
          max={maxim}
          value={range}
          // onChange={handleOnChange}
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
          // onChange={(e) => setMin($min) && setMax(max)}
          // onChange={(e) => setRange([e.target[0].value, e.target[1].value])}
          // onChange={({ min, max }) => setRange([min, max])}
          // onChange={(e) => console.log(e.target.value, minim)}
        /> */}
      </div>

      <div className="main-grid">
        {searchedUsers.map((user) => (
          <div className="user-card" key={user.id}>
            <img
              src={user.photoURL}
              alt="user"
              style={{ width: "100%", height: "100%" }}
            />
            <div className="card-details">
              <p>{user.displayName}</p>
              <Link to={`/profile/${user.id}`}>
                <button className="visitbtn">Visit profile</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
