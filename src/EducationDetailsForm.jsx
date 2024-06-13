import React, { useState, useContext } from "react";
import AllDetailsContext from "./AllDetailsContext";
import { useNavigate } from "react-router-dom";
const EducationDetailsForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    major: "",
    date: "",
    gpa: "",
    courses: "",
  });

  const [, setAllDetails] = useContext(AllDetailsContext);

  const handleAddDetails = (e) => {
    e.preventDefault();
    const obj = {
      school: formData.school,
      degree: formData.degree,
      major: formData.major,
      date: formData.date,
      gpa: formData.gpa,
      courses: formData.courses,
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
      EducationDetails: [...(prevState.EducationDetails || []), obj],
    }));

    // Reset the form data after adding details
    setFormData({
      school: "",
      degree: "",
      major: "",
      date: "",
      gpa: "",
      courses: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      school: formData.school,
      degree: formData.degree,
      major: formData.major,
      date: formData.date,
      gpa: formData.gpa,
      courses: formData.courses,
    };
    // Check if any of the form fields are filled
    const isAnyFieldFilled = Object.values(formData).some(
      (value) => value.trim() !== ""
    );

    // If no field is filled, return early without adding to state
    if (!isAnyFieldFilled) {
      navigate("/TechnicalDetailsForm");
      return;
    }

    setAllDetails((prevState) => ({
      ...prevState,
      EducationDetails: [...(prevState.EducationDetails || []), obj],
    }));

    // Reset the form data after adding details
    setFormData({
      school: "",
      degree: "",
      major: "",
      date: "",
      gpa: "",
      courses: "",
    });

    navigate("/TechnicalDetailsForm");
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
        <label htmlFor="school">
          School:-
          <input
            id="school"
            placeholder="school"
            name="school"
            value={formData.school}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="degree">
          Degree:-
          <input
            id="degree"
            placeholder="degree"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="major">
          Major:-
          <input
            id="major"
            placeholder="major"
            name="major"
            value={formData.major}
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

        <label htmlFor="gpa">
          GPA:-
          <input
            id="gpa"
            placeholder="gpa"
            name="gpa"
            value={formData.gpa}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="courses">
          Courses:-
          <input
            id="courses"
            placeholder="courses"
            name="courses"
            value={formData.courses}
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

export default EducationDetailsForm;
