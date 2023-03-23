import React from "react";

const UserDetailsPersonality = ({ formData, setFormData, onButtonClick }) => {
  return (
    <div className="user-details-basic">
      <main className="form-wrapper">
        <form action="">
          <h2>Personality</h2>
          <fieldset>
            <select name="" id="">
              <option value=""></option>
            </select>
            <input
              type="text"
              placeholder="Personality type"
              value={formData.personality}
              onChange={
                (e) => setFormData({ ...formData, personality: e.target.value }) //setting the formData to the value input of the textfield
              }
            />
            <input
              type="text"
              placeholder="Family plans"
              value={formData.family}
              onChange={
                (e) => setFormData({ ...formData, family: e.target.value }) //setting the formData to the value input of the textfield
              }
            />
            <input
              type="text"
              placeholder="Love language"
              value={formData.lovelang}
              onChange={
                (e) => setFormData({ ...formData, lovelang: e.target.value }) //setting the formData to the value input of the textfield
              }
            />
            <input
              type="text"
              placeholder="Zodiac"
              value={formData.zodiac}
              onChange={
                (e) => setFormData({ ...formData, zodiac: e.target.value }) //setting the formData to the value input of the textfield
              }
            />
            <input
              type="text"
              placeholder="Communication style"
              value={formData.communication}
              onChange={
                (e) =>
                  setFormData({ ...formData, communication: e.target.value }) //setting the formData to the value input of the textfield
              }
            />
          </fieldset>

          <div>
            <button onClick={() => onButtonClick("lifestyle")}>Next</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default UserDetailsPersonality;
