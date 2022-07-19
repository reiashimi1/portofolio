import React from "react";
import Layout from "../Layout";
import welcome from "../images/wlc.png";
import profile from "../images/profile.jpg";

const Home = () => {
  return (
    <Layout>
      <div className="flex justify-center animate-bounce opacity-75 hover:opacity-50">
        <img src={welcome} alt="Welcome" className="w-80 h-60" />
      </div>
      <div className="flex justify-around">
        <img
          src={profile}
          alt="profile"
          className="h-80 mr-5 rounded-full shadow-lg hover:opacity-75"
        />
        <div className="bg-gray-100 rounded-full border border-fuchsia-500 bg-yellow-50 p-6 font-semibold text-lg shadow-lg hover:opacity-75">
          <div className="flex justify-center p-10 text-blue-800">
            Hello there
          </div>
          <div className="text-purple-800">This is Rei Ashimi</div>
          <div className="text-sky-600">I am a software developer</div>
          <div className="flex justify-end p-8 pr-0 text-emerald-600">
            Feel free to explore my portofolio
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
