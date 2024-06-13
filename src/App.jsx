import React, { useState, useRef } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllDetailsContext from "./AllDetailsContext";
import BasicDetailsForm from "./BasicDetailsForm";
import EducationDetailsForm from "./EducationDetailsForm";
import TechnicalDetailsForm from "./TechDetails";
import RenderDetails from "./TempDisplay";
import WorkExperienceDetailsForm from "./WorkExperienceDetailsForm";
import LeadershipDetailsForm from "./LeadershipDetailsForm";
import ProjectDetailsForm from "./ProjectDetailsForm";
import { useReactToPrint } from "react-to-print";
import Display from "./Display";
const App = () => {
  const allDetails = useState([]);
  const printRef = useRef(null); // Initialize useRef with null

  const handlePrint = useReactToPrint({
    content: () => printRef.current, // Ensure current is accessed safely
    documentTitle: "Resume",
  });
  console.log(allDetails[0]);

  return (
    <BrowserRouter>
      <AllDetailsContext.Provider value={allDetails}>
        <div className="container">
          <div className="left-div" ref={printRef}>
            {(allDetails[0] && Object.keys(allDetails[0]).length > 0 && (
              <Display />
            )) || <RenderDetails />}
          </div>
          <div className="right-div">
            {" "}
            <Routes>
              <Route path="/" element={<BasicDetailsForm />} />
              <Route
                path="/EducationDetailsForm"
                element={<EducationDetailsForm />}
              />
              <Route
                path="/TechnicalDetailsForm"
                element={<TechnicalDetailsForm />}
              />
              <Route
                path="/WorkExperienceDetailsForm"
                element={<WorkExperienceDetailsForm />}
              />
              <Route
                path="/ProjectDetailsForm"
                element={<ProjectDetailsForm />}
              />
              <Route
                path="/LeadershipDetailsForm"
                element={<LeadershipDetailsForm />}
              />
            </Routes>
            <button type="button" onClick={handlePrint}>
              Print
            </button>
          </div>
        </div>
      </AllDetailsContext.Provider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
