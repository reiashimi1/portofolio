import React from "react";
import Layout from "../Layout";
import welcome from "../images/wlc.png";
import profile from "../images/profile.jpg";

const Home = () => {
  return (
    <Layout>
      <div className="flex justify-center animate-bounce opacity-75 hover:opacity-50">
        <img
          src={welcome}
          alt="Welcome"
          className="lg:w-80 lg:h-60 sm:w-60 sm:h-40 sm:visible invisible h-0"
        />
      </div>
      <div className="flex lg:flex-row flex-col lg:justify-around items-center">
        <img
          src={profile}
          alt="profile"
          className="lg:h-80 sm:h-60 lg:w-auto sm:w-40 h-40 mr-5 rounded-full shadow-lg hover:opacity-75 lg:mb-0 mb-10"
        />
        <div className="bg-gray-100 rounded-full border border-fuchsia-500 bg-yellow-50 p-6 lg:font-semibold lg:text-lg shadow-lg hover:opacity-75">
          <div className="flex justify-center lg:p-10 p-5 text-blue-800">
            Hello there
          </div>
          <div className="text-purple-800">This is Rei Ashimi</div>
          <div className="text-sky-600">I am a software developer</div>
          <div className="flex justify-end lg:p-8 p-5 text-emerald-600">
            Feel free to explore my portofolio
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
