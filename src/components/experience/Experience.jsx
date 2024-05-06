import React, { useState, useEffect } from "react";
import { SlCalender } from "react-icons/sl";
import "./Experience.css";

const Experience = ({ state }) => {
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");

  useEffect(() => {
    const { contract } = state;
    const educationDetails = async () => {
      const educationData = await contract.methods.allEductationDetails().call();
      setEducation(educationData);
    };
    contract && educationDetails();
  }, [state]);

  useEffect(() => {
    const { contract } = state;
    const experienceDetails = async () => {
      const experienceData = await contract.methods.allExperienceDetails().call();
      setExperience(experienceData);
    };
    contract && experienceDetails();
  }, [state]);

  return (
    <section className="exp-section">
      <h1 className="title">Experience & Education</h1>

      <div className="container">
        <div className="education">
          <h1 className="edu-title">Education</h1>
          {education !== "" &&
            education.map((edu) => (
              <div className="edu-card" key={edu.id}>
                <p className="card-text1">
                  <SlCalender className="icon" /> {edu.date}
                </p>
                <h3 className="card-text2">{edu.degree}</h3>
                <p className="card-text3">{edu.knowledgeAcquired}</p>
                <p className="card-text4">{edu.instutionName}</p>
              </div>
            ))}
        </div>

        <div className="education">
          <h1 className="edu-title">Experience</h1>
          {experience !== "" &&
            experience.map((exp) => (
              <div className="edu-card" key={exp.id}>
                <p className="card-text1">
                  <SlCalender className="icon" /> {exp.date}
                </p>
                <h3 className="card-text2">{exp.post}</h3>
                <p className="card-text3">{exp.knowledgeAcquired}</p>
                <p className="card-text4">{exp.companyName}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
