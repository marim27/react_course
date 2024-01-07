import React from 'react';
import Bannar from './../../components/bannar/bannar';
import About from './../../components/about/about';
import Skills from './../../components/skills/skills';
import Portfolio from './../../components/portfolio/Portfolio';
import "./project.css";
const Project = () => {
    return (
        <div className="container bg-secondary bg-opacity-25">
        <Bannar />
        <About />
        <Skills />
        <Portfolio />
      </div>
    );
}

export default Project;
