import { useContext } from "react";
import AllDetailsContext from "../AllDetailsContext";
import { useNavigate } from "react-router-dom";

const BasicDetailsForm = () => {
  const [, setAllDetails] = useContext(AllDetailsContext);
  const navigate = useNavigate();
  return (
    <div className="form">
      <h2>Basic Details</h2>
      <form
        className="input"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            name: formData.get("name") ?? "",
            address: formData.get("address") ?? "",
            phn: formData.get("phn") ?? "",
            email: formData.get("email") ?? "",
            link: formData.get("link") ?? "",
          };

          setAllDetails((prevState) => ({
            ...prevState,
            Details: obj,
          }));
          navigate("/EducationDetailsForm");
        }}
      >
        <label htmlFor="Name">Name:- </label>
        <input id="name" placeholder="Name" name="name" />

        <label htmlFor="Address">Address:-</label>
        <input id="address" placeholder="address" name="address" />

        <label htmlFor="Phn">Phone Number:-</label>
        <input id="phn" placeholder="phn" name="phn" />

        <label htmlFor="Email">Email-Id:-</label>
        <input id="email" placeholder="email" name="email" />

        <label htmlFor="Link">Links:-</label>
        <input id="link" placeholder="link" name="link" />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default BasicDetailsForm;
