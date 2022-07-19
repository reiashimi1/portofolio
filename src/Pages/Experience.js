import React from "react";
import Layout from "../Layout";
import bg from "../images/bg.jpg";
import { DevicesPc, Devices } from "tabler-icons-react";

const Experience = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-between">
        <div className="border p-5 border-sky-400 mb-10 max-w-md border-sky-500 rounded-xl bg-yellow-50 text-lg shadow-lg hover:opacity-75">
          <div className="flex justify-center">
            <DevicesPc className="text-sky-700" />
            <div className="ml-3 font-bold">Work Experience</div>
          </div>
          <div className="flex">
            <Devices className="mr-2 text-sky-500" />
            <div>Frontend Developer @ RPAY</div>
          </div>
          <div>April 2022 - Present</div>
        </div>
        <div>
          <img
            src={bg}
            alt="bg"
            className="max-w-lg w-auto opacity-75 hover:opacity-50"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
