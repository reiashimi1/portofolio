import React from "react";
import Layout from "../Layout";
import contact from "../images/contact.png";
import { BrandGmail, BrandLinkedin, Location, Phone } from "tabler-icons-react";

const Contact = () => {
  return (
    <Layout>
      <div className="h-full w-full p-5">
        <div>
          <div className="text-3xl text-indigo-800 font-semibold">
            CONTACT INFO
          </div>
          <hr />
        </div>
        <div className="mt-5">
          <div className="border-sky-500 rounded-xl border bg-yellow-50 p-5 font-semibold text-lg shadow-lg max-w-lg flex flex-col justify-center">
            <div className="flex justify-between">
              <div className="flex">
                <BrandGmail className="mr-2 text-sky-700" />
                <div>Email</div>
              </div>
              <div className="text-blue-700">reiashimi1@gmail.com</div>
            </div>
            <div className="flex justify-between py-3 my-2 bg-sky-50">
              <div className="flex">
                <BrandLinkedin className="mr-2 text-blue-700" />
                <div>LinkedIn Profile</div>
              </div>
              <div className="text-blue-700 hover:mouse-pointer underline">
                <a
                  href="https://www.linkedin.com/in/rei-ashimi-01777820a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click here
                </a>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <Location className="mr-2 text-sky-700" />
                <div>Location</div>
              </div>
              <div className="text-blue-700">Tirana, Albania</div>
            </div>
            <div className="flex justify-between my-2 py-3 bg-sky-50">
              <div className="flex">
                <Phone className="mr-2 text-sky-700" />
                <div>Phone Number</div>
              </div>
              <div className="text-blue-700">+355 67 54 49 040</div>
            </div>
          </div>
          <img
            src={contact}
            alt="contactMe"
            className="mt-10 md:h-44 h-32 border border-blue-300 rounded-full"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
