import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import { FaCode, FaRegEye } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className="my-20 px-3 md:px-8 lg:px-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl text-green-500 font-bold mb-4">My Projects</h1>
        <p className="text-base text-gray-300">
          Take a look at some my latest projects.Following projects showcase my
          skills and expertise.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <div>
            <img src={project1} className="rounded-lg" alt="" />
          </div>
          <div className="p-5">
            <h1 className="text-xl mb-4 text-green-500">
              Utility Bills Payment Website
            </h1>
            <p className="text-sm text-gray-300">
              EasyBills is a utility bill payment website. User can create a
              account and pay their utility bills using this website.
            </p>
            <div className="space-x-1 text-xs mt-4">
              <span className="p-1 rounded-full border border-green-500 text-green-500">React</span>
              <span className="p-1 rounded-full border border-green-500 text-green-500">Tailwind</span>
              <span className="p-1 rounded-full border border-green-500 text-green-500">Firebase</span>
              <span className="p-1 rounded-full border border-green-500 text-green-500">Express</span>
              <span className="p-1 rounded-full border border-green-500 text-green-500">Mongodb</span>
            </div>
            <div className="mt-5 text-green-500 flex gap-5">
                <a href="https://assignment-8-9bfd2.web.app/" target="_blank" className="flex gap-2 items-center"><FaRegEye></FaRegEye> Live Demo</a>

                <a href="https://github.com/atikur-2003/easybills" target="_blank" className="flex gap-2 items-center"><FaCode></FaCode> Github Repo</a>
            </div>
            <button className="mt-5 px-4 py-1 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded-lg cursor-pointer">
              See More
            </button>
          </div>
        </div>
        <div>
          <div>
            <img src={project2} className="rounded-lg" alt="" />
          </div>
          <div className="p-5">
            <h1 className="text-xl mb-4 text-green-500">
              Product Recommendation Website
            </h1>
            <p className="text-sm text-gray-300">
              QueryNest is a platform where user can post a query about their
              problem and can find a solution.
            </p>
            <div className="space-x-1 text-xs mt-4">
              <span className="p-1 rounded-full border border-green-500 text-green-500">React</span>
              <span className="p-1 rounded-full border border-green-500 text-green-500">Tailwind</span>
              <span className="p-1 rounded-full border border-green-500 text-green-500">Firebase</span>
              <span className="p-1 rounded-full border border-green-500 text-green-500">Express</span>
              <span className="p-1 rounded-full border border-green-500 text-green-500">Mongodb</span>
            </div>
            <div className="mt-5 text-green-500 flex gap-5">
                <a href="https://querynest-aa129.web.app/" target="_blank" className="flex gap-2 items-center"><FaRegEye></FaRegEye> Live Demo</a>

                <a href="https://github.com/atikur-2003/easybills" target="_blank" className="flex gap-2 items-center"><FaCode></FaCode> Github Repo</a>
            </div>
            <button className="mt-5 px-4 py-1 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded-lg cursor-pointer">
              See More
            </button>
          </div>
        </div>
        <div>
          <div>
            <img src={project3} className="rounded-lg" alt="" />
          </div>
          <div className="p-5">
            <h1 className="text-xl mb-4 text-green-500">
              Student Hostel Management Website
            </h1>
            <p className="text-sm text-gray-300">
              MealMate is hostel management website for university students. In
              this platform there is admin who controlles the system.
            </p>
            <div className="space-x-1 text-xs mt-4">
              <span className="p-1 rounded-full border border-green-500 text-green-500">React</span>
              <span className="p-1 rounded-full border border-green-500 text-green-500">Tailwind</span>
              <span className="p-1 rounded-full border border-green-500 text-green-500">Firebase</span>
              <span className="p-1 rounded-full border border-green-500 text-green-500">Express</span>
              <span className="p-1 rounded-full border border-green-500 text-green-500">Mongodb</span>
            </div>
            <div className="mt-5 text-green-500 flex gap-5">
                <a href="https://mealmate-84e00.web.app/" target="_blank" className="flex gap-2 items-center"><FaRegEye></FaRegEye> Live Demo</a>

                <a href="https://github.com/atikur-2003/easybills" target="_blank" className="flex gap-2 items-center"><FaCode></FaCode> Github Repo</a>
            </div>
            <button className="mt-5 px-4 py-1 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded-lg cursor-pointer">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
