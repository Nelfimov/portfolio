import React from 'react';
import '../styles/About.css';
import ICONS_LIST from '../icons.json';

const About = () => {
  const handleScroll = () => {
    const about = document.querySelector('section.about');
    const rect = about.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom <=
      (window.innerHeight + about.offsetHeight / 1.5)) {
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
          A radiophysics student currently employed as Procurement Manager
          passionately learning Web Development.
          <br />
          <br />
          My journey started as a Back-End Dev student
          of <a href="https://practicum.yandex.ru/">Yandex Practicum</a>.
          I felt out of place since most of the students with whom I had
          to cooperate for some tasks did not show same interest and motivation.
          <br />
          <br />
          I decided to leave and proceed on my own.
          My first personal pet project was ecommerce site built with Django.
          However I lacked some fundamental knowledge of CSS, JS.
          <br />
          <br />
          This is where I stumbled
          across <a href="https://theodinproject.com">The Odin Project</a>.
          This helped me so much in understanding Web Dev and I continue forward
          in learning new things with it!
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
