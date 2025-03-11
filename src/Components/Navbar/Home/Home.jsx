import React from 'react'
import avatarImg from '../Home/7358602-removebg-preview.png'
import TextChanger from '../../TextChanger';
const Home = () => {
    return (
        <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
          <div className="md:w-2/4 md:pt-10 ">
            <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
            <TextChanger />
            </h1>
            <p className="text-sm md:text-2xl tracking-tight ">
            I work as a web developer. I have been working as a web developer for quite some time now. I believe I am a very ambitious person who loves to work on making the website work well. Working on the web is my passion as I love to work on exciting projects. This is the field I get to express my creativity. 
            I would love to work in your esteemed organisation. This is all about me.
            </p>
            <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-purple-500">
              Contact Me
            </button>
          </div>
          <div>
            <img  src={avatarImg}/>
          </div>
        </div>
      );
    };

export default Home