import React from 'react';
import hero400 from '../images/hero/hero_400.jpg';
import hero800 from '../images/hero/hero_800.jpg';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="hero">
      <div className="name">
        <h1>Nikita</h1>
        <h1>Elfimov</h1>
      </div>
      <div className='prof'>
        <h2>Web</h2>
        <h2>Developer</h2>
      </div>
      <picture>
        <source media="(max-width: 800px)" srcSet={hero400} />
        <img src={hero800} alt="profile" />
      </picture>
    </section>
  );
};

export default Hero;
