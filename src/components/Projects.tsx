import { useEffect, useRef } from 'react';
import PROJECT_LIST from '../projects.json';
import ICONS_LIST from '../icons.json';
import '../styles/Projects.css';

const Projects = () => {
  const cardContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardContainer.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px 0px -100px 0px',
      },
    );

    const cards = [...cardContainer.current.children];

    cards.forEach((card) => observer.observe(card));

    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <section className="projects">
      <a className="nav-link" id="projects"></a>
      <h1>My projects</h1>
      <div className="card-container" ref={cardContainer}>
        {PROJECT_LIST.map((project) => (
          <div className="card" key={project.id}>
            <a href={project.href}>
              <img src={project.src} alt={project.name} />
              <h3>{project.name}</h3>
              <div className="stack">
                {project.stack.split(' ').map((item) => (
                  <img
                    key={item}
                    //@ts-expect-error: ignore
                    src={ICONS_LIST.tech[item].src}
                    alt={item}
                    className="tech-icon small"
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
