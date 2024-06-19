// import React, { useState, useContext } from "react";
// import AllDetailsContext from "../AllDetailsContext";
// import { useNavigate } from "react-router-dom";

// const WorkExperienceDetailsForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     company: "",
//     position: "",
//     date: "",
//     description: "",
//   });

//   const [, setAllDetails] = useContext(AllDetailsContext);

//   const handleAddDetails = (e) => {
//     e.preventDefault();
//     const obj = {
//       company: formData.company,
//       position: formData.position,
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
//       WorkExperienceDetails: [...(prevState.WorkExperienceDetails || []), obj],
//     }));

//     // Reset the form data after adding details
//     setFormData({
//       company: "",
//       position: "",
//       date: "",
//       description: "",
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const obj = {
//       company: formData.company,
//       position: formData.position,
//       date: formData.date,
//       description: formData.description,
//     };
//     // Check if any of the form fields are filled
//     const isAnyFieldFilled = Object.values(formData).some(
//       (value) => value.trim() !== ""
//     );

//     // If no field is filled, return early without adding to state
//     if (!isAnyFieldFilled) {
//       navigate("/ProjectDetailsForm");
//       return;
//     }

//     setAllDetails((prevState) => ({
//       ...prevState,
//       WorkExperienceDetails: [...(prevState.WorkExperienceDetails || []), obj],
//     }));

//     // Reset the form data after adding details
//     setFormData({
//       company: "",
//       position: "",
//       date: "",
//       description: "",
//     });

//     navigate("/ProjectDetailsForm");
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div className="form">
//       <h2>Work Experience</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="Company">Company:-</label>
//         <input
//           id="company"
//           placeholder="company"
//           name="company"
//           value={formData.company}
//           onChange={handleChange}
//         />

//         <label htmlFor="Position">Position:-</label>
//         <input
//           id="position"
//           placeholder="position"
//           name="position"
//           value={formData.position}
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

// export default WorkExperienceDetailsForm;

import React, { useState, useContext, useEffect } from "react";
import AllDetailsContext from "../AllDetailsContext";
import { useNavigate } from "react-router-dom";

const WorkExperienceDetailsForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: null,
    company: "",
    position: "",
    date: "",
    description: "",
  });
  const [selectedId, setSelectedId] = useState(null);
  const [allDetails, setAllDetails] = useContext(AllDetailsContext);

  useEffect(() => {
    if (
      allDetails.WorkExperienceDetails &&
      allDetails.WorkExperienceDetails.length > 0
    ) {
      const firstItem = allDetails.WorkExperienceDetails[0];
      setFormData(firstItem);
      setSelectedId(firstItem.id);
    }
  }, [allDetails.WorkExperienceDetails]);

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
        prevState.WorkExperienceDetails?.map((item) =>
          item.id === obj.id ? obj : item
        ) || [];
      if (
        !prevState.WorkExperienceDetails?.some((item) => item.id === obj.id)
      ) {
        updatedDetails.push(obj);
      }
      return {
        ...prevState,
        WorkExperienceDetails: updatedDetails,
      };
    });

    // Reset the form data after adding details
    setFormData({
      id: null,
      company: "",
      position: "",
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
      navigate("/ProjectDetailsForm");
      return;
    }

    setAllDetails((prevState) => {
      const updatedDetails =
        prevState.WorkExperienceDetails?.map((item) =>
          item.id === obj.id ? obj : item
        ) || [];
      if (
        !prevState.WorkExperienceDetails?.some((item) => item.id === obj.id)
      ) {
        updatedDetails.push(obj);
      }
      return {
        ...prevState,
        WorkExperienceDetails: updatedDetails,
      };
    });

    // Reset the form data after adding details
    setFormData({
      id: null,
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

  const handleSelect = (id) => {
    const selectedDetail = allDetails.WorkExperienceDetails.find(
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
      company: "",
      position: "",
      date: "",
      description: "",
    });
    setSelectedId(null);
  };

  return (
    <div className="form">
      <h2>Work Experience</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="company">Company:</label>
        <input
          id="company"
          placeholder="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />

        <label htmlFor="position">Position:</label>
        <input
          id="position"
          placeholder="Position"
          name="position"
          value={formData.position}
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

      {allDetails.WorkExperienceDetails &&
        allDetails.WorkExperienceDetails.length > 0 && (
          <div>
            {allDetails.WorkExperienceDetails.map((detail, index) => (
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

export default WorkExperienceDetailsForm;
