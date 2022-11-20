import React from 'react';
import '../styles/About.css';
import ICONS_LIST from '../icons.json';

const About = () => {
  const handleScroll = () => {
    const about = document.querySelector('section.about');
    const rect = about.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom <=
      (window.innerHeight + about.offsetHeight / 3)) {
      about.classList.add('active');
    };
  };

  window.addEventListener('load', handleScroll);
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('touchmove', handleScroll);

  return (
    <section className='about'>
      <a className='anchor' id='about'></a>
      <h1>About me</h1>
      <div>
        <p>
          A radiophysics student passionately learning Web Development.
          Started out as student of Yandex Praktikum in Back End, however the
          study format did not suit me. Continued with my pet project and
          learning in parallel <a href="https://theodinproject.com">The Odin Project</a>.
        </p>
        <div className="tech">
          {Object.keys(ICONS_LIST['tech']).map((item, index) => (
            <div className="stack" key={index}>
              <img
                src={ICONS_LIST['tech'][item].src}
                alt={ICONS_LIST['tech'][item].label}
                className="tech-icon" />
              <p className="tech-label">{ICONS_LIST['tech'][item].label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
