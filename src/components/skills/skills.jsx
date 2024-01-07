import React from 'react';
import Prog from './../progress/Prog';

const Skills = () => {
    return (
        <div>
             <div className="bg-dark bg-opacity-75 h-25 p-5">
        <h1 className="fw-bold text-light text-center mb-5">skills</h1>
            <p className="text-light text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iurelabore temporibus quibusdam hic deserunt illo quibusdam</p> 
            <p className="text-light text-center">dolor sit amet consectetur adipisicing elit. Iurelabore temporibus quibusdam hic deserunt nemo</p> 
            <p className="text-light text-center mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iurelabore temporibus </p>
        <div className="row">
            <div className="col-2"></div>
            <div className="col-2">
                <div className="border-bottom text-light text-center fw-bold mb-3 pb-3">MY FOCUSE</div>
                <div className="text-light text-center fw-bold mb-3">UI/UX design</div>
                <div className="text-light text-center fw-bold mb-3">responsive design</div>
                <div className="text-light text-center fw-bold mb-3">web design</div>
                <div className="text-light text-center fw-bold mb-3">mbile app design</div>
            </div>
            <div className="col-2"></div>
            <div className="col-4">
       <Prog labelskill="HTML" variant1="dark" variant2="secondary" now1={25} now2={71} key1={1} key2={2}/>
       <Prog labelskill="CSS" variant1="dark" variant2="secondary" now1={25} now2={70} key1={1} key2={2}/>
       <Prog labelskill="javascript" variant1="dark" variant2="secondary" now1={25} now2={72} key1={1} key2={2}/>
       <Prog labelskill="reast" variant1="dark" variant2="secondary" now1={25} now2={71} key1={1} key2={2}/>
       <Prog labelskill="bootstrap" variant1="dark" variant2="secondary" now1={25} now2={69} key1={1} key2={2}/>
       <Prog labelskill="adobe XD" variant1="dark" variant2="secondary" now1={25} now2={74} key1={1} key2={2}/>
       <Prog labelskill="node.js" variant1="dark" variant2="secondary" now1={25} now2={69} key1={1} key2={2}/>
       <Prog labelskill="wordpress" variant1="dark" variant2="secondary" now1={25} now2={65} key1={1} key2={2}/>
            </div>
        </div>
      </div>
        </div>
    );
}

export default Skills;
