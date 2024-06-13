import React, { useState, useContext } from "react";
import AllDetailsContext from "./AllDetailsContext";
import { useNavigate } from "react-router-dom";
const TechnicalDetailsForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    skills: "",
  });

  const [, setAllDetails] = useContext(AllDetailsContext);

  const handleAddDetails = (e) => {
    e.preventDefault();
    const obj = {
      [formData.title]: formData.skills,
    };
    // Check if any of the form fields are filled
    const isAnyFieldFilled = Object.values(formData).some(
      (value) => value.trim() !== ""
    );

    // If no field is filled, return early without adding to state
    if (!isAnyFieldFilled) {
      return;
    }

    setAllDetails((prevState) => ({
      ...prevState,
      TechDetails: [...(prevState.TechDetails || []), obj],
    }));

    // Reset the form data after adding details
    setFormData({
      title: "",
      skills: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      [formData.title]: formData.skills,
    };
    // Check if any of the form fields are filled
    const isAnyFieldFilled = Object.values(formData).some(
      (value) => value.trim() !== ""
    );

    // If no field is filled, return early without adding to state
    if (!isAnyFieldFilled) {
      navigate("/WorkExperienceDetailsForm");
      return;
    }

    setAllDetails((prevState) => ({
      ...prevState,
      TechDetails: [...(prevState.TechDetails || []), obj],
    }));

    // Reset the form data after adding details
    setFormData({
      title: "",
      skills: "",
    });

    navigate("/WorkExperienceDetailsForm");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Title">
          Title:-
          <input
            id="title"
            placeholder="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="Skill">
          Skill:-
          <input
            id="skills"
            placeholder="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </label>

        <button onClick={handleAddDetails} type="button">
          Add
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TechnicalDetailsForm;
