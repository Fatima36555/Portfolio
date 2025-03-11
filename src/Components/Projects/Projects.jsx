import React from 'react'
import ProjectsCard from './ProjectsCard';
const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectsCard
          title="CV Project"
          main="CV Project created used some component libraries of HTML and CSS"
        />
        <ProjectsCard
          title="Calculator/Weather App"
          main="In these projects used HTML,CSS and JavaScript"
        />
        <ProjectsCard
          title="Portfolio"
          main="In this project used ReactJS & Tailwind CSS"
        />
      </div>
    </div>
  )
}

export default Projects