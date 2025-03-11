import React from 'react'
import {IoArrowForward} from 'react-icons/io5'
import AboutImg from '../About/7358653-removebg-preview.png'
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-purple-500 shadow-xl mx-0 md:mx-20 bg-opacity-40 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  FrontEnd Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                “I'm fresh  front-end developer, where I’ve worked extensively with HTML, CSS, JavaScript, and frameworks like React.
                I’ve built responsive, 
                mobile-friendly applications and collaborated closely with designers to deliver user-centric interfaces.”
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  BackEnd Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I'm a Backend developer with fresh specializing in Node.js and Express.js.
                I hold a Bachelor's degree in Computer Science from The Women University Multan.
                I'm passionate about optimizing system performance and looking forward by building robust and efficient backend solutions.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  DataBase Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                As Database developer, i'll be design, programming, construction, and implementation of new databases,
                 as well as modifying existing databases for platform updates and changes in user needs.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About