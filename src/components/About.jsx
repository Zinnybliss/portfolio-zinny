// src/components/About.js
import React from 'react';
import data from '../data';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>{data.about}</p>
    </section>
  );
};

export default About;
