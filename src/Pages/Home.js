import React from "react";
import Layout from "../Layout";
// import welcome from "../images/wlc.png";
import profile from "../images/profile.jpg";
// import bg from "../images/background.png";

const style = {
  fontFamily: "Lucida Console",
};

const Home = () => {
  return (
    <Layout>
      <div className="p-5 h-full w-full">
        <div>
          <div className="text-3xl text-indigo-800 font-semibold">HOME</div>
          <hr />
        </div>
        {/* <div className="flex justify-center animate-bounce opacity-75 hover:opacity-50">
        <img
          src={welcome}
          alt="Welcome"
          className="lg:w-80 lg:h-60 lg:visible invisible h-0"
        />
        </div> */}
        <div className="flex md:flex-row flex-col items-center mt-5 p-3">
          <div
            style={style}
            className="flex flex-col items-center lg:font-semibold lg:text-3xl md:text-xl text-lg italic px-10 pr-20"
          >
            <div>Hello there...</div>
            <div className="py-5">This is Rei Ashimi</div>
            <div>I am a junior software developer</div>
            {/* <div className="flex justify-end lg:p-8 p-5">
            Feel free to explore my portofolio
          </div> */}
          </div>
          <img
            src={profile}
            alt="profile"
            className="lg:h-60 sm:h-40 lg:w-auto sm:w-32 h-28 mr-5 shadow-lg hover:opacity-75 lg:mb-0 mb-10"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
