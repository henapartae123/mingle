import React from "react";
import "./UserDetailsBasic.css";

const UserDetailsBasic = ({ formData, setFormData, onButtonClick }) => {
  return (
    <div className="user-details-basic">
      <main className="form-wrapper">
        <form>
          <h2>Basic Details</h2>
          <fieldset>
            <label htmlFor="">Profession</label>
            <input
              type="text"
              placeholder=""
              value={formData.proffession}
              onChange={
                (e) => setFormData({ ...formData, proffession: e.target.value }) //setting the formData to the value input of the textfield
              }
            />

            <label htmlFor="">Location</label>
            <input
              type="text"
              placeholder=""
              value={formData.location}
              onChange={
                (e) => setFormData({ ...formData, location: e.target.value }) //setting the formData to the value input of the textfield
              }
            />
            <label htmlFor="">Bio</label>
            <textarea
              type="text"
              placeholder=""
              value={formData.bio}
              onChange={
                (e) => setFormData({ ...formData, bio: e.target.value }) //setting the formData to the value input of the textfield
              }
            />
          </fieldset>
          <div>
            <button onClick={() => onButtonClick("personality")}>Next</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default UserDetailsBasic;
