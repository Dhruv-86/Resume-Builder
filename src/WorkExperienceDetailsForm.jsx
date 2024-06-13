import React, { useState, useContext } from "react";
import AllDetailsContext from "./AllDetailsContext";
import { useNavigate } from "react-router-dom";

const WorkExperienceDetailsForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    date: "",
    description: "",
  });

  const [, setAllDetails] = useContext(AllDetailsContext);

  const handleAddDetails = (e) => {
    e.preventDefault();
    const obj = {
      company: formData.company,
      position: formData.position,
      date: formData.date,
      description: formData.description,
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
      WorkExperienceDetails: [...(prevState.WorkExperienceDetails || []), obj],
    }));

    // Reset the form data after adding details
    setFormData({
      company: "",
      position: "",
      date: "",
      description: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      company: formData.company,
      position: formData.position,
      date: formData.date,
      description: formData.description,
    };
    // Check if any of the form fields are filled
    const isAnyFieldFilled = Object.values(formData).some(
      (value) => value.trim() !== ""
    );

    // If no field is filled, return early without adding to state
    if (!isAnyFieldFilled) {
      navigate("/ProjectDetailsForm");
      return;
    }

    setAllDetails((prevState) => ({
      ...prevState,
      WorkExperienceDetails: [...(prevState.WorkExperienceDetails || []), obj],
    }));

    // Reset the form data after adding details
    setFormData({
      company: "",
      position: "",
      date: "",
      description: "",
    });

    navigate("/ProjectDetailsForm");
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
        <label htmlFor="Company">
          Company:-
          <input
            id="company"
            placeholder="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="Position">
          Position:-
          <input
            id="position"
            placeholder="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="date">
          Date:-
          <input
            id="date"
            placeholder="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="Description">
          Description:-
          <input
            id="description"
            placeholder="description"
            name="description"
            value={formData.description}
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

export default WorkExperienceDetailsForm;
