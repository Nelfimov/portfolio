import React from 'react';
import jsIcon from '../images/icons/js.svg';
import nodeIcon from '../images/icons/nodejs.svg';
import '../styles/About.css';

const About = () => {
  return (
    <section id='about'>
      <h1>About me</h1>
      <div>
        <p>
          A radiophysics student passionately learning Web Development.
          Started out as student of Yandex Praktikum in Back End, however the
          study format did not suit me. Continued with my pet project and
          learning in parallel <a href="https://theodinproject.com">The Odin Project</a>.
        </p>
        <div className="tech">
          <img src={jsIcon} alt="" />
          <img src={nodeIcon} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
