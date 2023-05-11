import React from "react";
import about1 from "../../../assets/images/about_us/parts.jpg";
import about2 from "../../../assets/images/about_us/person.jpg";
const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col   lg:flex-row ">
          <div className="w-6/12 relative ">
            <img src={about2} className="rounded-lg w-5/6 shadow-2xl h-[473px]  " />
            <img src={about1} className="rounded-lg border-8 border-white shadow-2xl h-80 w-1/2 absolute right-4 top-1/2" />
          </div>
          <div className="lg:w-1/2 p-4 ">
            <h3 className="text-xl text-[#FF3811] font-bold">About Us</h3>
            <h2 className="text-4xl leading-[50px] font-bold w-3/5 pt-5 pb-7">We are qualified <br /> & of experience in this field</h2>
            <p className="leading-7">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <p className="py-6 leading-7">
            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <button className="btn bg-[#FF3811] hover:bg-orange-600 border-none">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
