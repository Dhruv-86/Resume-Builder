import { useContext } from "react";
import AllDetailsContext from "./AllDetailsContext";

const DisplayBasicDetails = ({ basics }) => {
  return (
    <div>
      <h2>{basics.name}</h2>
      <p>
        {basics.address} | {basics.email} | {basics.link} | {basics.phn}
      </p>
    </div>
  );
};

const DisplayEducationDetails = ({ educations }) => {
  return (
    <div>
      {" "}
      <h2>EDUCATION</h2>
      {educations.map((education, index) => (
        <div key={index}>
          <h2>
            {education.school} | {education.degree}, {education.major} |{" "}
            {education.date} | GPA: {education.gpa}
          </h2>
          <p>Course: {education.courses}</p>
        </div>
      ))}
    </div>
  );
};

const DisplayTechDetails = ({ techs }) => {
  return (
    <div>
      {" "}
      <h2>TECHNICAL SKILLS</h2>
      {techs.map((tech, index) => (
        <div key={index}>
          {Object.entries(tech).map(([key, value]) => (
            <div key={key}>
              <h3>{key}:</h3>
              <p>{value}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const DisplayProjectDetails = ({ projects }) => {
  return (
    <div>
      {" "}
      <h2>ACADEMIC PROJECTS</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h2>
            {project.project} | {project.organization} | {project.date}
          </h2>
          <p>{project.organization}</p>
        </div>
      ))}
    </div>
  );
};

const DisplayWorkExperienceDetails = ({ experiences }) => {
  return (
    <div>
      <h2>Work Experience</h2>
      {experiences.map((experience, index) => (
        <div key={index}>
          <h2>
            {experience.company} | {experience.position} | {experience.date}
          </h2>
          <p>{experience.description}</p>
        </div>
      ))}
    </div>
  );
};

const DisplayLeadershipDetails = ({ leaderships }) => {
  return (
    <div>
      <h2>LEADERSHIP EXPERIENCE & ORGANIZATIONAL EXPERIENCE</h2>
      {leaderships.map((leadership, index) => (
        <div key={index}>
          <h2>
            {leadership.eventName} | {leadership.organization} |{" "}
            {leadership.date}
          </h2>
          <p>{leadership.description}</p>
        </div>
      ))}
    </div>
  );
};

const Display = () => {
  const [allDetails] = useContext(AllDetailsContext);

  return (
    <div>
      {allDetails.Details && (
        <DisplayBasicDetails basics={allDetails.Details} />
      )}
      {allDetails.EducationDetails &&
        allDetails.EducationDetails.length > 0 && (
          <DisplayEducationDetails educations={allDetails.EducationDetails} />
        )}
      {allDetails.TechDetails && allDetails.TechDetails.length > 0 && (
        <DisplayTechDetails techs={allDetails.TechDetails} />
      )}
      {allDetails.WorkExperienceDetails &&
        allDetails.WorkExperienceDetails.length > 0 && (
          <DisplayWorkExperienceDetails
            experiences={allDetails.WorkExperienceDetails}
          />
        )}
      {allDetails.ProjectDetails && allDetails.ProjectDetails.length > 0 && (
        <DisplayProjectDetails projects={allDetails.ProjectDetails} />
      )}
      {allDetails.leadershipDetails &&
        allDetails.leadershipDetails.length > 0 && (
          <DisplayLeadershipDetails
            leaderships={allDetails.leadershipDetails}
          />
        )}
    </div>
  );
};

export default Display;
