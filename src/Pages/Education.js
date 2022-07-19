import React from "react";
import Layout from "../Layout";
import student from "../images/student.png";
import { EyeCheck, School, Certificate2, Vocabulary } from "tabler-icons-react";

const Education = () => {
  return (
    <Layout>
      <div className="flex justify-around">
        <div>
          <div className="border-sky-500 rounded-xl border bg-yellow-50 p-5 text-lg shadow-lg hover:opacity-75 flex flex-col items-center">
            <div className="flex justify-center">
              <School className="text-sky-700" />
              <div className="font-bold pl-5">In progress...</div>
            </div>
            <div className="flex">
              <Vocabulary className="text-sky-500" />
              <div className="ml-2">Bachelor of Computer Science</div>
            </div>
            <div>University of New York Tirana</div>
            <div>2019 - 2023</div>
          </div>
          <div className="border border-green-500 mt-20 rounded-xl border bg-yellow-50 p-5 text-lg shadow-lg hover:opacity-75">
            <div className="flex justify-center">
              <Certificate2 className="text-green-700" />
              <div className="pl-5 font-bold">Certificates</div>
            </div>
            <div className="flex">
              <EyeCheck className="mr-2 text-green-500" />
              <div>UDEMY: JavaScript (From zero te expert)</div>
            </div>
            <div className="flex">
              <EyeCheck className="mr-2 text-green-500" />
              <div>DELF - French language</div>
            </div>
            <div className="flex">
              <EyeCheck className="mr-2 text-green-500" />
              <div>APTIS - English language</div>
            </div>
          </div>
        </div>
        <div>
          <img src={student} alt="student" className="h-96" />
        </div>
      </div>
    </Layout>
  );
};

export default Education;
