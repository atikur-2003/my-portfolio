import React from "react";
import img2 from '../assets/heroImg.png'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="px-3 md:px-16 py-5">
      <div className="hero-content justify-between flex-col lg:flex-row-reverse -mt-10">
        <img
          src={img2}
          className="w-90 rounded-lg"
        />
        <div className="">
          <h1 className="text-4xl font-bold">Welcome!</h1>
          <h2 className="text-xl mt-3">It's <span className="text-green-500 text-3xl font-bold">Md. Atikur Rahman.</span></h2>
          <p className="my-4 text-base text-gray-400">
            A passionate and dedicated Frontend Developer crafting real-world,<br /> responsive, user-friendly React projects.
          </p>

          <div className="flex gap-5 mb-5">
            <a href="https://github.com/atikur-2003"
            target="_blank"><FaGithub size={30} className="rounded-full"></FaGithub></a>

            <a href="https://www.linkedin.com/in/atikur2003/"
            target="_blank"><FaLinkedin size={30} className="rounded-full"></FaLinkedin></a>

            <a href="https://www.facebook.com/md.atikur.50702769"
            target="_blank"><FaFacebook size={30} className="rounded-full"></FaFacebook></a>
          </div>

          <button className="px-4 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded-lg cursor-pointer">Hire Me</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
