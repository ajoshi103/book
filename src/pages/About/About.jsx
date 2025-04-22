import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>BookHub is a modern web application that helps users explore and discover books from around the world using the Open Library API. Whether you're looking for a classic novel or a newly released gem, BookHub makes it simple to search, browse, and learn more about books with ease.</p>
            <p className='fs-17'>BookHub is built using React and leverages Context API for state management, making it a lightweight and scalable solution for book lovers and curious readers alike.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
