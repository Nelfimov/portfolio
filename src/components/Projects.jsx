import React, {useEffect, useRef} from 'react';
import PROJECT_LIST from '../projects.json';
import ICONS_LIST from '../icons.json';
import '../styles/Projects.css';

const Projects = () => {
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  const card4 = useRef(null);

  const cardList = [card1, card2, card3, card4];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        console.log(entry.target);
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      };
    }, {
      rootMargin: '0px 0px -100px 0px',
    });

    cardList.forEach((card) => observer.observe(card.current));

    return () => {
      cardList.forEach((card) => observer.unobserve(card.current));
    };
  }, []);

  return (
    <section className='projects'>
      <a className='anchor' id='projects'></a>
      <h1>My projects</h1>
      <div className="card-container">
        {PROJECT_LIST.map((project, index) => (
          <div className="card" key={project.id} ref={cardList[index]}>
            <a href={project.href}>
              <img
                src={`${process.env.PUBLIC_URL}${project.src}`}
                alt={project.name} />
              <h3>{project.name}</h3>
              <div className="stack">

                {project.stack.split(' ').map((item) => (
                  <img key={item}
                    src={
                      `${process.env.PUBLIC_URL}${ICONS_LIST['tech'][item].src}`
                    }
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
