import React from "react";
import Layout from "../Layout";
import background from "../images/bg-cartoon.jpg";
import { Elevator, FileDescription, Checkbox } from "tabler-icons-react";

const Skills = () => {
  const softSkillsArray = [
    "Strong communication and interpersonal skills",
    "Sets high personal standards, seeks out new challenges",
    "Team player",
    "Strong critical and analytical skills",
    "Demonstrates leadership skills",
    "Adaptable to situations and different/multicultural environments",
    "Ability to work under pressure",
  ];

  const hardSkillsArray = [
    "React Js",
    "JavaScript",
    "Java",
    "Node js",
    "C++",
    "C#",
    "PHP",
    "SQL",
    "Git",
  ];

  return (
    <Layout>
      <div className="flex justify-around mt-5">
        <div className="border-sky-500 rounded-xl border bg-yellow-50 p-5 text-lg shadow-lg hover:opacity-75">
          <div className="flex font-bold justify-center px-20">
            <Elevator className="mr-2 text-sky-700" />
            <div>Hard Skills</div>
          </div>
          {hardSkillsArray.map((skill) => {
            return (
              <div key={skill} className="flex">
                <Checkbox className="mr-2 text-sky-500" />
                <div>{skill}</div>
              </div>
            );
          })}
        </div>
        <div className="border-green-500 rounded-xl border bg-yellow-50 p-5 text-lg shadow-lg hover:opacity-75">
          <div className="flex justify-center font-bold">
            <FileDescription className="mr-2 text-green-700" />
            <div>Soft Skills</div>
          </div>
          {softSkillsArray.map((skill) => {
            return (
              <div key={skill} className="flex">
                <Checkbox className="mr-2 text-green-500" />
                <div>{skill}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <img src={background} alt="background" className="h-52 rounded-xl" />
      </div>
    </Layout>
  );
};

export default Skills;
