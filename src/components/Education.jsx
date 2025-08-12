import React from "react";

const Education = () => {
  return (
    <div id="education" className="my-20">
      <div className="text-center px-3 md:px-0">
        <h1 className="text-3xl text-green-500 mb-5 font-bold">My Education Journey</h1>
        <p className="text-base text-gray-300">An Overview of my educational qualification</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-12 mt-7 justify-center">
        <div className="px-5 py-8">
          <div className="text-center">
            <h2 className="text-xl text-green-500 font-semibold">Secondary School Certificate (SSC)</h2>
            <p className="text-gray-300">
              Mohanpur Govt. High School <br /> Mohanpur, Rajshahi
            </p>
          </div>
          <hr  className="my-4"/>
          <div>
            <ul className="text-gray-300">
                <li>GPA : 5.00 (5.00)</li>
                <li>Subject : Science</li>
                <li>Passing Year : 2020</li>
            </ul>
          </div>
        </div>
        <div className=" px-5 py-8">
          <div className="text-center">
            <h2 className="text-xl text-green-500 font-semibold">Diploma in Engineering</h2>
            <p className="text-gray-300">
              Rajshahi Polytechnic Institute <br /> Rajshahi
            </p>
          </div>
          <hr  className="my-4"/>
          <div>
            <ul className="text-gray-300">
                <li>CGPA : 3.76 (4.00)</li>
                <li>Subject : Computer Technology</li>
                <li>Duration : 2020-2024</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
