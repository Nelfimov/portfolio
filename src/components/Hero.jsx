import React from 'react';
import HEROES_LIST from '../heroes.json';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <a className='anchor' id='hero'></a>
      <div className="name">
        <h1>Nikita</h1>
        <h1>Elfimov</h1>
      </div>
      <div className='prof'>
        <h2>Web</h2>
        <h2>Developer</h2>
      </div>
      <picture>
        <source
          media="(max-width: 800px)"
          srcSet={`${process.env.PUBLIC_URL}${HEROES_LIST[400]}`}
        />
        <img
          src={`${process.env.PUBLIC_URL}${HEROES_LIST[800]}`}
          alt="profile"
        />
      </picture>
    </section>
  );
};

export default Hero;
