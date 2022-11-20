import React from 'react';
import waldoScreenshot from '../images/projects/waldo280.png';
import ecommerceScreenshot from '../images/projects/ecommerce280.png';
import battleshipScreenshot from '../images/projects/battleship280.png';
import todoScreenshot from '../images/projects/todo280.png';
import '../styles/Projects.css';

const PROJECT_LIST = [
  {
    name: 'Ecommerce shop',
    thumbnail: ecommerceScreenshot,
    href: 'http://217.25.237.151/',
  },
  {
    name: 'Where is Waldo game',
    thumbnail: waldoScreenshot,
    href: 'https://nelfimov.github.io/odin-phototaggingapp/',
  },
  {
    name: 'Battleship game',
    thumbnail: battleshipScreenshot,
    href: 'https://nelfimov.github.io/odin-battleship/',
  },
  {
    name: 'Todo app',
    thumbnail: todoScreenshot,
    href: 'https://nelfimov.github.io/odin-todoapp/',
  },
];

const Projects = () => {
  const handleScroll = () => {
    const projects = document.getElementById('projects');
    const rect = projects.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom <=
      (window.innerHeight + projects.offsetHeight / 3)) {
      projects.classList.add('active');
    };
  };

  window.addEventListener('load', handleScroll);
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('touchmove', handleScroll);

  return (
    <section id='projects'>
      <h1>My projects</h1>
      <div className="card-container">
        {PROJECT_LIST.map((item, index) => (
          <div className="card" key={index}>
            <a href={item.href}>
              <img src={item.thumbnail} alt={item.name} />
              <h3>{item.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
