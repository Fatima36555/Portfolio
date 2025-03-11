import React from 'react'
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24 bg-purple-400">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-purple-300 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} /></span>
            <span className="text-black">
              <h2 className="leading-tight font-bold">FrontEnd Developer</h2>
              <p className="text-sm leading-tight font-semibold">
                - Present
              </p>
              <ul className="text-sm p-2">
                <li>- HTML standard markup language for creating Web pages</li>
                <li>- CSS can display the HTML element on screen</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-purple-300 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
          <FaJs color="#F7DF1E" size={50} /></span>
            <span className="text-black">
              <h2 className="leading-tight font-bold">Backend Developer</h2>
              <p className="text-sm leading-tight font-semibold">
                - Present
              </p>
              <ul className="text-sm p-2">
                <li>- MySQL</li>
                <li>- MongoDB</li>
                <li>- MySQL Server</li>
                <li>- Oracel</li>
                <li>- Oracel Databases</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-purple-300 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
          <FaReact color="#61DAFB" size={50} /></span>
            <span className="text-black">
              <h2 className="leading-tight font-bold">Databases</h2>
              <p className="text-sm leading-tight font-semibold">
                - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Database Design</li>
                <li>- SQL Proficiency</li>
                <li>- DBMS</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience