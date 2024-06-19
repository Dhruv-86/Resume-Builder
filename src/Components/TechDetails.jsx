// import React, { useState, useContext } from "react";
// import AllDetailsContext from "../AllDetailsContext";
// import { useNavigate } from "react-router-dom";

// const TechnicalDetailsForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     title: "",
//     skills: "",
//   });

//   const [, setAllDetails] = useContext(AllDetailsContext);

//   const handleAddDetails = (e) => {
//     e.preventDefault();
//     const obj = {
//       [formData.title]: formData.skills,
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
//       TechDetails: [...(prevState.TechDetails || []), obj],
//     }));

//     // Reset the form data after adding details
//     setFormData({
//       title: "",
//       skills: "",
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const obj = {
//       [formData.title]: formData.skills,
//     };
//     // Check if any of the form fields are filled
//     const isAnyFieldFilled = Object.values(formData).some(
//       (value) => value.trim() !== ""
//     );

//     // If no field is filled, return early without adding to state
//     if (!isAnyFieldFilled) {
//       navigate("/WorkExperienceDetailsForm");
//       return;
//     }

//     setAllDetails((prevState) => ({
//       ...prevState,
//       TechDetails: [...(prevState.TechDetails || []), obj],
//     }));

//     // Reset the form data after adding details
//     setFormData({
//       title: "",
//       skills: "",
//     });

//     navigate("/WorkExperienceDetailsForm");
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div className="form">
//       <h2>Technical skills</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="Title">Title:- </label>
//         <input
//           id="title"
//           placeholder="title"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//         />

//         <label htmlFor="Skill">Skill:-</label>
//         <input
//           id="skills"
//           placeholder="skills"
//           name="skills"
//           value={formData.skills}
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

// export default TechnicalDetailsForm;

import React, { useState, useContext, useEffect } from "react";
import AllDetailsContext from "../AllDetailsContext";
import { useNavigate } from "react-router-dom";

const TechnicalDetailsForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    skills: "",
  });
  const [selectedId, setSelectedId] = useState(null);
  const [allDetails, setAllDetails] = useContext(AllDetailsContext);

  useEffect(() => {
    if (allDetails.TechDetails && allDetails.TechDetails.length > 0) {
      const firstItem = allDetails.TechDetails[0];
      setFormData(firstItem);
      setSelectedId(firstItem.id);
    }
  }, [allDetails.TechDetails]);

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
        prevState.TechDetails?.map((item) =>
          item.id === obj.id ? obj : item
        ) || [];
      if (!prevState.TechDetails?.some((item) => item.id === obj.id)) {
        updatedDetails.push(obj);
      }
      return {
        ...prevState,
        TechDetails: updatedDetails,
      };
    });

    // Reset the form data after adding details
    setFormData({
      id: null,
      title: "",
      skills: "",
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
      navigate("/WorkExperienceDetailsForm");
      return;
    }

    setAllDetails((prevState) => {
      const updatedDetails =
        prevState.TechDetails?.map((item) =>
          item.id === obj.id ? obj : item
        ) || [];
      if (!prevState.TechDetails?.some((item) => item.id === obj.id)) {
        updatedDetails.push(obj);
      }
      return {
        ...prevState,
        TechDetails: updatedDetails,
      };
    });

    // Reset the form data after adding details
    setFormData({
      id: null,
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

  const handleSelect = (id) => {
    const selectedDetail = allDetails.TechDetails.find(
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
      title: "",
      skills: "",
    });
    setSelectedId(null);
  };

  return (
    <div className="form">
      <h2>Technical skills</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:- </label>
        <input
          id="title"
          placeholder="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <label htmlFor="skills">Skill:-</label>
        <input
          id="skills"
          placeholder="skills"
          name="skills"
          value={formData.skills}
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

      {allDetails.TechDetails && allDetails.TechDetails.length > 0 && (
        <div>
          {allDetails.TechDetails.map((detail, index) => (
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

export default TechnicalDetailsForm;
