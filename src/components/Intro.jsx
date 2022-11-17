import React from 'react';
import hero400 from '../images/hero/hero_400.jpg';
import hero800 from '../images/hero/hero_800.jpg';
import '../styles/Intro.css';

const Intro = () => {
  return (
    <section id="hero">
      <div className="name">
        <h1>Nikita Elfimov</h1>
        <h1>Web developer</h1>
      </div>
      <picture>
        <source media="(max-width: 800px)" srcSet={hero400} />
        <img src={hero800} alt="profile" />
      </picture>
      <hr />
    </section>
  );
};

export default Intro;
