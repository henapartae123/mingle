import React from "react";
import "./UserDetailsBasic.css";

const UserDetailsLifestyle = ({ formData, setFormData, handleSubmit }) => {
  return (
    <div className="user-details-basic">
      <main className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <h2>LifeStyle</h2>

          <fieldset>
            <input
              type="text"
              placeholder="Workout plans"
              value={formData.workout}
              onChange={
                (e) => setFormData({ ...formData, workout: e.target.value }) //setting the formData to the value input of the textfield
              }
            />
            <input
              type="text"
              placeholder="Pets"
              value={formData.pets}
              onChange={
                (e) => setFormData({ ...formData, pets: e.target.value }) //setting the formData to the value input of the textfield
              }
            />
            <input
              type="text"
              placeholder="Drinking"
              value={formData.drinking}
              onChange={
                (e) => setFormData({ ...formData, drinking: e.target.value }) //setting the formData to the value input of the textfield
              }
            />
            <input
              type="text"
              placeholder="Smoking"
              value={formData.smoking}
              onChange={
                (e) => setFormData({ ...formData, smoking: e.target.value }) //setting the formData to the value input of the textfield
              }
            />
            <input
              type="text"
              placeholder="Diet Preference"
              value={formData.diet}
              onChange={
                (e) => setFormData({ ...formData, diet: e.target.value }) //setting the formData to the value input of the textfield
              }
            />
            <input
              type="text"
              placeholder="Social Media Activity"
              value={formData.socials}
              onChange={
                (e) => setFormData({ ...formData, socials: e.target.value }) //setting the formData to the value input of the textfield
              }
            />
            <input
              type="text"
              placeholder="Sleeping Habits"
              value={formData.sleep}
              onChange={
                (e) => setFormData({ ...formData, sleep: e.target.value }) //setting the formData to the value input of the textfield
              }
            />
          </fieldset>

          <div>
            <button>Submit</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default UserDetailsLifestyle;
