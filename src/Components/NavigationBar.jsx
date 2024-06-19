/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <div className="nav-bar">
      {
        // eslint-disable-next-line react/jsx-no-comment-textnodes
      }
      <span onClick={() => navigate("/")}>Basic Details</span>
      <span onClick={() => navigate("/EducationDetailsForm")}>
        Education Details
      </span>
      <span onClick={() => navigate("/TechnicalDetailsForm")}>
        Technical skills
      </span>
      <span onClick={() => navigate("/WorkExperienceDetailsForm")}>
        Work Experience
      </span>
      <span onClick={() => navigate("/ProjectDetailsForm")}>Projects</span>
      <span onClick={() => navigate("/LeadershipDetailsForm")}>
        Organization
      </span>
    </div>
  );
};

export default NavigationBar;
