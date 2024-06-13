//   Temperary Method to display all the details in state it has to be removed while actually building the resume:-
import React, { useContext } from "react";
import AllDetailsContext from "./AllDetailsContext";

const RenderDetails = () => {
  const [allData] = useContext(AllDetailsContext);

  const renderDetails = (data) => {
    return Object.keys(data).map((key) => {
      if (Array.isArray(data[key])) {
        // If the value is an array, render each item
        return (
          <div key={key}>
            <strong>{key}:</strong>
            <ul style={{ marginLeft: "20px" }}>
              {data[key].map((item, index) => (
                <li key={index}>{renderDetails(item)}</li>
              ))}
            </ul>
          </div>
        );
      } else if (typeof data[key] === "object" && data[key] !== null) {
        // If the value is an object, render nested structure
        return (
          <div key={key}>
            <strong>{key}:</strong>
            <div style={{ marginLeft: "20px" }}>{renderDetails(data[key])}</div>
          </div>
        );
      } else {
        // Render non-object values
        return (
          <div key={key}>
            <strong>{key}:</strong> {data[key]}
          </div>
        );
      }
    });
  };

  return (
    <div className="details">
      <h2>Details:</h2>
      {renderDetails(allData)}
    </div>
  );
};

export default RenderDetails;
