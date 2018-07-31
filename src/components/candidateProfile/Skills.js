import React, { Component } from 'react';

export const Skills = ({skills}) => (
    <div className="section skills">
        <p className="section-title">Skills</p>
        <div className="skill-list">
            {
                skills.map((item, id)=> (
                    <button className="btn btn-default button-default" key={`skills-${id}`}>{item}</button>
                ))
            }
        </div>
    </div>
);

export default Skills