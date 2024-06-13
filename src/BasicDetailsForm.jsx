import { useContext } from "react";
import AllDetailsContext from "./AllDetailsContext";
import { useNavigate } from "react-router-dom";

const BasicDetailsForm = () => {
  const [, setAllDetails] = useContext(AllDetailsContext);
  const navigate = useNavigate();
  return (
    <div className="form">
      <form
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
        <label htmlFor="Name">
          Name:-
          <input id="name" placeholder="Name" name="name" />
        </label>

        <label htmlFor="Address">
          Address:-
          <input id="address" placeholder="address" name="address" />
        </label>

        <label htmlFor="Phn">
          Phone Number:-
          <input id="phn" placeholder="phn" name="phn" />
        </label>

        <label htmlFor="Email">
          Email-Id:-
          <input id="email" placeholder="email" name="email" />
        </label>

        <label htmlFor="Link">
          Links:-
          <input id="link" placeholder="link" name="link" />
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default BasicDetailsForm;
