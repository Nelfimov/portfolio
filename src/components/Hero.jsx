import React from 'react';
// import HEROES_LIST from '../heroes.json';
import ProgressiveImage from './ProgressiveImage';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <a className='anchor' id='hero'></a>
      <div className="info">
        <div className="name">
          <h1>Nikita</h1>
          <h1>Elfimov</h1>
        </div>
        <div className='prof'>
          <h2>Web</h2>
          <h2>Developer</h2>
        </div>
      </div>
      <ProgressiveImage />
    </section>
  );
};

export default Hero;
