// src/components/Home.js
import React from 'react';
import data from '../data';
import '../styles/Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <img src={data.profileImage} alt="Profile" className="profile-image" />
      <h1>{data.name}</h1>
      <p>{data.role}</p>
    </section>
  );
};

export default Home;
