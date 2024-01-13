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
    "React",
    "JavaScript",
    "TypeScript",
    "Next",
    "Java",
    "SpringBoot"
    "Node",
    "Nest",
    "SQL",
    "PostgreSQL"
    "Git",
    "GitHub",
    "GitLab",
  ];

  return (
    <Layout>
      <div className="w-full h-full p-5">
        <div>
          <div className="text-3xl text-indigo-800 font-semibold">SKILLS</div>
          <hr />
        </div>
        <div className="flex md:flex-row flex-col justify-around mt-5">
          <div className="border-sky-500 rounded-xl border bg-yellow-50 p-5 text-lg shadow-lg hover:opacity-75 lg:mb-0 mb-5 md:mr-4">
            <div className="flex font-bold justify-center px-20">
              <Elevator className="mr-2 text-sky-700" />
              <div>Hard Skills</div>
            </div>
            <div className="flex justify-around">
              <div>
                {hardSkillsArray.map((skill, index) => {
                  return (
                    index < hardSkillsArray.length / 2 && (
                      <div key={skill} className="flex">
                        <Checkbox className="mr-2 text-sky-500" />
                        <div>{skill}</div>
                      </div>
                    )
                  );
                })}
              </div>
              <div>
                {hardSkillsArray.map((skill, index) => {
                  return (
                    index >= hardSkillsArray.length / 2 && (
                      <div key={skill} className="flex">
                        <Checkbox className="mr-2 text-sky-500" />
                        <div>{skill}</div>
                      </div>
                    )
                  );
                })}
              </div>
            </div>
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
          <img
            src={background}
            alt="background"
            className="xl:h-52 h-40 lg:block hidden rounded-xl"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
