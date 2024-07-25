import React from 'react';
import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';
import Language from './Language';

const Skills = () => {
  return (
    <section className="section skills" id="skills">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My Technical Level</span>
    <div className="skills__container container grid">
    <Frontend />
    <Backend />
    <Language />
    </div>
    </section>
  )
}

export default Skills