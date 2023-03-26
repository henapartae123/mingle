import React from "react";
import "./UserDetailsBasic.css";

const UserDetailsLifestyle = ({ formData, setFormData, handleSubmit }) => {
  return (
    <div className="user-details-basic">
      <main className="form-wrapper-wide">
        <form onSubmit={handleSubmit}>
          <h2>LifeStyle</h2>

          <fieldset>
            <div className="lifestylee">
              <div>
                <label htmlFor="personality">Family Plans</label>
                <select
                  type="text"
                  name="famplans"
                  defaultValue={""}
                  value={formData.family}
                  onChange={
                    (e) => setFormData({ ...formData, family: e.target.value }) //setting the formData to the value input of the textfield
                  }
                >
                  <option value="" hidden disabled></option>
                  <option value="wantchildren">I want children</option>
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
                    (e) => setFormData({ ...formData, workout: e.target.value }) //setting the formData to the value input of the textfield
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
                    (e) => setFormData({ ...formData, pets: e.target.value }) //setting the formData to the value input of the textfield
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
                      setFormData({ ...formData, drinking: e.target.value }) //setting the formData to the value input of the textfield
                  }
                >
                  <option value="" hidden disabled></option>
                  <option value="socialy">Socialy</option>
                  <option value="mostnights">Most Nights</option>
                  <option value="onspecial">On Special occasions</option>
                  <option value="dontwant">Don't want</option>
                </select>
              </div>

              <div>
                <label htmlFor="smoking">Smoking habits</label>
                <select
                  type="text"
                  name="smokingng"
                  defaultValue={""}
                  value={formData.smoking}
                  onChange={
                    (e) => setFormData({ ...formData, smoking: e.target.value }) //setting the formData to the value input of the textfield
                  }
                >
                  <option value="" hidden disabled></option>
                  <option value="socialsmoker">Social Smoker</option>
                  <option value="whendrinking">Smoke when drinking</option>
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
                    (e) => setFormData({ ...formData, diet: e.target.value }) //setting the formData to the value input of the textfield
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
                    (e) => setFormData({ ...formData, socials: e.target.value }) //setting the formData to the value input of the textfield
                  }
                >
                  <option value="" hidden disabled></option>
                  <option value="active">Socially Active</option>
                  <option value="offgrid">Off the grid</option>
                  <option value="influencer">Influencer Status</option>
                  <option value="passive">Passive Scroller</option>
                </select>

                <label htmlFor="sleep">Sleeping habits</label>
                <select
                  type="text"
                  name="sleep"
                  defaultValue={""}
                  value={formData.sleep}
                  onChange={
                    (e) => setFormData({ ...formData, sleep: e.target.value }) //setting the formData to the value input of the textfield
                  }
                >
                  <option value="" hidden disabled></option>
                  <option value="earlybird">Early bird</option>
                  <option value="nightowl">Night owl</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </fieldset>

          <div className="sub-btn">
            <button>Submit</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default UserDetailsLifestyle;
