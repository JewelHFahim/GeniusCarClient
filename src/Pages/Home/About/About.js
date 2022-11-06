import React from "react";
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 relative">
            <img
              src={person}
              className="rounded-lg shadow-2xl w-3/4"
              alt=""
            />
            <img src={parts} alt="" className="w-1/2 absolute right-10 top-2/4 border-8 border-base-200 rounded-lg"/>
          </div>
          <div className="w-1/2">
          <p className="font-bold text-lg text-[#FF3811]" >About Us</p>
            <h1 className="text-5xl font-bold">
              We are qualified <br />
              & of experience <br />
              in this field
            </h1>
            <p className="py-6 ">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <p className="py-4">
            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <button className="btn bg-[#FF3811] border-0">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
