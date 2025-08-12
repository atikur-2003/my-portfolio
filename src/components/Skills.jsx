import React from "react";
import Marquee from "react-fast-marquee";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import javascriptLogo from "../assets/javascript.png";
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwind.png";
import nextjsLogo from "../assets/nextjs.png";
import mongodbLogo from "../assets/mongodb.png";


const Skills = () => {
  return (
    <div id="skills" className="text-center my-20">
      <h1 className="text-3xl text-green-500 font-bold mb-7">Skills and Technologies</h1>
      <div className="max-w-4xl mx-auto px-3 lg:px-0">
        <Marquee>
          <div className="flex flex-col rounded-xl p-5 gap-3 mr-5">
            <img src={htmlLogo} className="w-20" alt="" />
            <h2 className="text-green-500">HTML</h2>
          </div>
          <div className="flex flex-col rounded-xl p-5 gap-3 mr-5">
            <img src={cssLogo} className="w-20" alt="" />
            <h2 className="text-green-500">CSS</h2>
          </div>
          <div className="flex flex-col rounded-xl p-5 gap-3 mr-5">
            <img src={javascriptLogo} className="w-20" alt="" />
            <h2 className="text-green-500">JAVASCRIPT</h2>
          </div>
          <div className="flex flex-col rounded-xl p-5 gap-3 mr-5">
            <img src={reactLogo} className="w-20" alt="" />
            <h2 className="text-green-500">REACT.JS</h2>
          </div>
          <div className="flex flex-col rounded-xl p-5 gap-3 mr-5">
            <img src={tailwindLogo} className="w-20" alt="" />
            <h2 className="text-green-500">TAILWIND</h2>
          </div>
          <div className="flex flex-col rounded-xl p-5 gap-3 mr-5">
            <img src={nextjsLogo} className="w-20" alt="" />
            <h2 className="text-green-500">NEXT.JS</h2>
          </div>
          <div className="flex flex-col rounded-xl p-5 gap-3 mr-5">
            <img src={mongodbLogo} className="w-20" alt="" />
            <h2 className="text-green-500">MONGODB</h2>
          </div>
          
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
