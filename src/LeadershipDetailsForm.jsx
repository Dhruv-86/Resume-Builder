import React, { useState, useContext } from "react";
import AllDetailsContext from "./AllDetailsContext";
import { useNavigate } from "react-router-dom";

const LeadershipDetailsForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    eventName: "",
    organization: "",
    date: "",
    description: "",
  });

  const [, setAllDetails] = useContext(AllDetailsContext);

  const handleAddDetails = (e) => {
    e.preventDefault();
    const obj = {
      eventName: formData.eventName,
      organization: formData.organization,
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
      leadershipDetails: [...(prevState.leadershipDetails || []), obj],
    }));

    // Reset the form data after adding details
    setFormData({
      eventName: "",
      organization: "",
      date: "",
      description: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      eventName: formData.eventName,
      organization: formData.organization,
      date: formData.date,
      description: formData.description,
    };
    // Check if any of the form fields are filled
    const isAnyFieldFilled = Object.values(formData).some(
      (value) => value.trim() !== ""
    );

    // If no field is filled, return early without adding to state
    if (!isAnyFieldFilled) {
      navigate("/");
      return;
    }

    setAllDetails((prevState) => ({
      ...prevState,
      leadershipDetails: [...(prevState.leadershipDetails || []), obj],
    }));

    // Reset the form data after adding details
    setFormData({
      eventName: "",
      organization: "",
      date: "",
      description: "",
    });

    navigate("/");
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
        <label htmlFor="EventName">
          EventName:-
          <input
            id="eventName"
            placeholder="eventName"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="Organization">
          Organization:-
          <input
            id="organization"
            placeholder="organization"
            name="organization"
            value={formData.organization}
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

export default LeadershipDetailsForm;
