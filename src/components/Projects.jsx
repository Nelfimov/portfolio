import React from 'react';
import PROJECT_LIST from '../projects.json';
import ICONS_LIST from '../icons.json';
import '../styles/Projects.css';

const Projects = () => {
  const handleScroll = () => {
    const projects = document.querySelector('section.projects');
    const rect = projects.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom <=
      (window.innerHeight + projects.offsetHeight / 1.5)) {
      projects.classList.add('active');
    };
  };

  window.addEventListener('load', handleScroll);
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('touchmove', handleScroll);

  return (
    <section className='projects'>
      <a className='anchor' id='projects'></a>
      <h1>My projects</h1>
      <div className="card-container">
        {PROJECT_LIST.map((project) => (
          <div className="card" key={project.id}>
            <a href={project.href}>
              <img src={project.src} alt={project.name} />
              <h3>{project.name}</h3>
              <div className="stack">

                {project.stack.split(' ').map((item) => (
                  <img key={item}
                    src={ICONS_LIST['tech'][item].src}
                    alt={item}
                    className='tech-icon small'
                  />
                ))}

              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
