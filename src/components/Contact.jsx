// src/components/Contact.js
import React from 'react';
import data from '../data';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>Email: <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a></p>
      <p>Phone: {data.contact.phone}</p>
    </section>
  );
};

export default Contact;

