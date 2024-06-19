// import React, { useState, useContext } from "react";
// import AllDetailsContext from "../AllDetailsContext";
// import { useNavigate } from "react-router-dom";

// const ProjectDetailsForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     project: "",
//     organization: "",
//     date: "",
//     description: "",
//   });

//   const [, setAllDetails] = useContext(AllDetailsContext);

//   const handleAddDetails = (e) => {
//     e.preventDefault();
//     const obj = {
//       project: formData.project,
//       organization: formData.organization,
//       date: formData.date,
//       description: formData.description,
//     };
//     // Check if any of the form fields are filled
//     const isAnyFieldFilled = Object.values(formData).some(
//       (value) => value.trim() !== ""
//     );

//     // If no field is filled, return early without adding to state
//     if (!isAnyFieldFilled) {
//       return;
//     }

//     setAllDetails((prevState) => ({
//       ...prevState,
//       ProjectDetails: [...(prevState.ProjectDetails || []), obj],
//     }));

//     // Reset the form data after adding details
//     setFormData({
//       project: "",
//       organization: "",
//       date: "",
//       description: "",
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const obj = {
//       project: formData.project,
//       organization: formData.organization,
//       date: formData.date,
//       description: formData.description,
//     };
//     // Check if any of the form fields are filled
//     const isAnyFieldFilled = Object.values(formData).some(
//       (value) => value.trim() !== ""
//     );

//     // If no field is filled, return early without adding to state
//     if (!isAnyFieldFilled) {
//       navigate("/LeadershipDetailsForm");
//       return;
//     }

//     setAllDetails((prevState) => ({
//       ...prevState,
//       ProjectDetails: [...(prevState.ProjectDetails || []), obj],
//     }));

//     // Reset the form data after adding details
//     setFormData({
//       project: "",
//       organization: "",
//       date: "",
//       description: "",
//     });

//     navigate("/LeadershipDetailsForm");
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div className="form">
//       <h2>Project Details</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="Project">Project:- </label>
//         <input
//           id="project"
//           placeholder="project"
//           name="project"
//           value={formData.project}
//           onChange={handleChange}
//         />

//         <label htmlFor="Organization">Organization:- </label>
//         <input
//           id="organization"
//           placeholder="organization"
//           name="organization"
//           value={formData.organization}
//           onChange={handleChange}
//         />

//         <label htmlFor="date">Date:-</label>
//         <input
//           id="date"
//           placeholder="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//         />

//         <label htmlFor="Description">Description:-</label>
//         <input
//           id="description"
//           placeholder="description"
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//         />

//         <button onClick={handleAddDetails} type="button">
//           Add
//         </button>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ProjectDetailsForm;

import React, { useState, useContext, useEffect } from "react";
import AllDetailsContext from "../AllDetailsContext";
import { useNavigate } from "react-router-dom";

const ProjectDetailsForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: null,
    project: "",
    organization: "",
    date: "",
    description: "",
  });
  const [selectedId, setSelectedId] = useState(null);
  const [allDetails, setAllDetails] = useContext(AllDetailsContext);

  useEffect(() => {
    if (allDetails.ProjectDetails && allDetails.ProjectDetails.length > 0) {
      const firstItem = allDetails.ProjectDetails[0];
      setFormData(firstItem);
      setSelectedId(firstItem.id);
    }
  }, [allDetails.ProjectDetails]);

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
        prevState.ProjectDetails?.map((item) =>
          item.id === obj.id ? obj : item
        ) || [];
      if (!prevState.ProjectDetails?.some((item) => item.id === obj.id)) {
        updatedDetails.push(obj);
      }
      return {
        ...prevState,
        ProjectDetails: updatedDetails,
      };
    });

    // Reset the form data after adding details
    setFormData({
      id: null,
      project: "",
      organization: "",
      date: "",
      description: "",
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
      navigate("/LeadershipDetailsForm");
      return;
    }

    setAllDetails((prevState) => {
      const updatedDetails =
        prevState.ProjectDetails?.map((item) =>
          item.id === obj.id ? obj : item
        ) || [];
      if (!prevState.ProjectDetails?.some((item) => item.id === obj.id)) {
        updatedDetails.push(obj);
      }
      return {
        ...prevState,
        ProjectDetails: updatedDetails,
      };
    });

    // Reset the form data after adding details
    setFormData({
      id: null,
      project: "",
      organization: "",
      date: "",
      description: "",
    });

    navigate("/LeadershipDetailsForm");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (id) => {
    const selectedDetail = allDetails.ProjectDetails.find(
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
      project: "",
      organization: "",
      date: "",
      description: "",
    });
    setSelectedId(null);
  };

  return (
    <div className="form">
      <h2>Project Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="project">Project:</label>
        <input
          id="project"
          placeholder="Project"
          name="project"
          value={formData.project}
          onChange={handleChange}
        />

        <label htmlFor="organization">Organization:</label>
        <input
          id="organization"
          placeholder="Organization"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
        />

        <label htmlFor="date">Date:</label>
        <input
          id="date"
          placeholder="Date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <label htmlFor="description">Description:</label>
        <input
          id="description"
          placeholder="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <button onClick={handleAddDetails} type="button">
          Add
        </button>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleNew}>
          New
        </button>
      </form>

      {allDetails.ProjectDetails && allDetails.ProjectDetails.length > 0 && (
        <div>
          {allDetails.ProjectDetails.map((detail, index) => (
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

export default ProjectDetailsForm;
