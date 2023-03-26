import React from "react";

const UserDetailsPersonality = ({ formData, setFormData, onButtonClick }) => {
  return (
    <div className="user-details-basic">
      <main className="form-wrapper">
        <form action="">
          <h2>Personality</h2>
          <fieldset>
            {/* <input
              type="text"
              placeholder="Personality type"
              value={formData.personality}
              onChange={
                (e) => setFormData({ ...formData, personality: e.target.value }) //setting the formData to the value input of the textfield
              }
            /> */}
            <label htmlFor="personality">Personality type</label>
            <select
              type="text"
              name="personality"
              defaultValue={""}
              value={formData.personality}
              onChange={
                (e) => setFormData({ ...formData, personality: e.target.value }) //setting the formData to the value input of the textfield
              }
            >
              <option value="" hidden disabled></option>
              <option value="intp">INTP</option>
              <option value="intj">INTJ</option>
              <option value="entj">ENTJ</option>
              <option value="entp">ENTP</option>
            </select>

            <label htmlFor="lovelang">Love language</label>
            <select
              type="text"
              name="lovelang"
              defaultValue={""}
              value={formData.lovelang}
              onChange={
                (e) => setFormData({ ...formData, lovelang: e.target.value }) //setting the formData to the value input of the textfield
              }
            >
              <option value="" hidden disabled></option>
              <option value="touch">Touch</option>
              <option value="compliments">Compliments</option>
              <option value="presents">Presents</option>
              <option value="gestures">Thoughtful Gestures</option>
              <option value="timetogether">Time Together</option>
            </select>

            <label htmlFor="Zodiac">Zodiac</label>
            <select
              type="text"
              name="zodiac"
              defaultValue={""}
              value={formData.zodiac}
              onChange={
                (e) => setFormData({ ...formData, zodiac: e.target.value }) //setting the formData to the value input of the textfield
              }
            >
              <option value="" hidden disabled></option>
              <option value="capricorn">Capricorn</option>
              <option value="aquarius">Aquarius</option>
              <option value="pisces">Pisces</option>
              <option value="aries">Aries</option>
              <option value="taurus">Taurus</option>
              <option value="gemini">Gemini</option>
              <option value="cancer">Cancer</option>
              <option value="leo">Leo</option>
              <option value="virgo">Virgo</option>
              <option value="libra">Libra</option>
              <option value="scorpio">Scorpio</option>
              <option value="sagittarius">Sagittarius</option>
            </select>

            <label htmlFor="comstyle">Communication style</label>
            <select
              type="text"
              name="comstyle"
              defaultValue={""}
              value={formData.communication}
              onChange={
                (e) =>
                  setFormData({ ...formData, communication: e.target.value }) //setting the formData to the value input of the textfield
              }
            >
              <option value="" hidden disabled></option>
              <option value="bigtexter">Big time Texter</option>
              <option value="phonecaller">Phone caller</option>
              <option value="videochatter">Video chatter</option>
              <option value="badtexter">Bad texter</option>
              <option value="inperson">Better in person</option>
            </select>
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
