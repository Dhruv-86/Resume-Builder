import React, { useState, useContext, useEffect } from "react";
import AllDetailsContext from "../AllDetailsContext";
import { useNavigate } from "react-router-dom";

const EducationDetailsForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: null,
    school: "",
    degree: "",
    major: "",
    date: "",
    gpa: "",
    courses: "",
  });
  const [selectedId, setSelectedId] = useState(null);
  const [allDetails, setAllDetails] = useContext(AllDetailsContext);

  useEffect(() => {
    if (allDetails.EducationDetails && allDetails.EducationDetails.length > 0) {
      const firstItem = allDetails.EducationDetails[0];
      setFormData(firstItem);
      setSelectedId(firstItem.id);
    }
  }, [allDetails.EducationDetails]);

  const handleAddDetails = (e) => {
    e.preventDefault();
    const obj = {
      ...formData,
      id: formData.id || Date.now(),
    };

    // Check if any of the form fields are filled
    const isAnyFieldFilled = Object.values(formData).some(
      (value) => typeof value === "string" && value.trim() !== ""
    );

    // If no field is filled, return early without adding to state
    if (!isAnyFieldFilled) {
      return;
    }

    setAllDetails((prevState) => {
      const updatedDetails =
        prevState.EducationDetails?.map((item) =>
          item.id === obj.id ? obj : item
        ) || [];
      if (!prevState.EducationDetails?.some((item) => item.id === obj.id)) {
        updatedDetails.push(obj);
      }
      return {
        ...prevState,
        EducationDetails: updatedDetails,
      };
    });

    // Reset the form data after adding details
    setFormData({
      id: null,
      school: "",
      degree: "",
      major: "",
      date: "",
      gpa: "",
      courses: "",
    });
    setSelectedId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      ...formData,
      id: formData.id || Date.now(),
    };

    // Check if any of the form fields are filled
    const isAnyFieldFilled = Object.values(formData).some(
      (value) => typeof value === "string" && value.trim() !== ""
    );

    // If no field is filled, return early without adding to state
    if (!isAnyFieldFilled) {
      navigate("/TechnicalDetailsForm");
      return;
    }

    setAllDetails((prevState) => {
      const updatedDetails =
        prevState.EducationDetails?.map((item) =>
          item.id === obj.id ? obj : item
        ) || [];
      if (!prevState.EducationDetails?.some((item) => item.id === obj.id)) {
        updatedDetails.push(obj);
      }
      return {
        ...prevState,
        EducationDetails: updatedDetails,
      };
    });

    // Reset the form data after adding details
    setFormData({
      id: null,
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

  const handleSelect = (id) => {
    const selectedDetail = allDetails.EducationDetails.find(
      (item) => item.id === id
    );
    if (selectedDetail) {
      setFormData(selectedDetail);
      setSelectedId(id);
    }
  };

  const handleNew = () => {
    setFormData({
      id: null,
      school: "",
      degree: "",
      major: "",
      date: "",
      gpa: "",
      courses: "",
    });
    setSelectedId(null);
  };

  return (
    <div className="form">
      <h2>Education Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="school">School:-</label>
        <input
          id="school"
          placeholder="school"
          name="school"
          value={formData.school}
          onChange={handleChange}
        />

        <label htmlFor="degree">Degree:-</label>
        <input
          id="degree"
          placeholder="degree"
          name="degree"
          value={formData.degree}
          onChange={handleChange}
        />

        <label htmlFor="major">Major:- </label>
        <input
          id="major"
          placeholder="major"
          name="major"
          value={formData.major}
          onChange={handleChange}
        />

        <label htmlFor="date">Date:- </label>
        <input
          id="date"
          placeholder="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <label htmlFor="gpa">GPA:- </label>
        <input
          id="gpa"
          placeholder="gpa"
          name="gpa"
          value={formData.gpa}
          onChange={handleChange}
        />

        <label htmlFor="courses">Courses:- </label>
        <input
          id="courses"
          placeholder="courses"
          name="courses"
          value={formData.courses}
          onChange={handleChange}
        />

        <button onClick={handleAddDetails} type="button">
          Save
        </button>
        <button type="submit">Next</button>
        <button type="button" onClick={handleNew}>
          Add
        </button>
      </form>

      {allDetails.EducationDetails && allDetails.EducationDetails.length > 0 && (
        <div>
          {allDetails.EducationDetails.map((detail, index) => (
            <button
              key={detail.id}
              onClick={() => handleSelect(detail.id)}
              className={selectedId === detail.id ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationDetailsForm;
