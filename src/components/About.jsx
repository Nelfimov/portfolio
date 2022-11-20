import React from 'react';
import bootstrapIcon from '../images/icons/bootstrap.svg';
import cssIcon from '../images/icons/css.svg';
import djangoIcon from '../images/icons/django.svg';
import gitIcon from '../images/icons/git.svg';
import htmlIcon from '../images/icons/html.svg';
import jestIcon from '../images/icons/jest.svg';
import jsIcon from '../images/icons/js.svg';
import nginxIcon from '../images/icons/nginx.svg';
import npmIcon from '../images/icons/npm.svg';
import pythonIcon from '../images/icons/python.svg';
import reactIcon from '../images/icons/react.svg';
import webpackIcon from '../images/icons/webpack.svg';
import nodeIcon from '../images/icons/nodejs.svg';
import '../styles/About.css';

const TECH_LIST = [
  {src: htmlIcon, label: 'HTML'},
  {src: cssIcon, label: 'CSS'},
  {src: jsIcon, label: 'Javascript'},
  {src: reactIcon, label: 'React'},
  {src: jestIcon, label: 'Jest'},
  {src: npmIcon, label: 'npm'},
  {src: nodeIcon, label: 'Node'},
  {src: webpackIcon, label: 'Webpack'},
  {src: bootstrapIcon, label: 'Bootstrap'},
  {src: pythonIcon, label: 'Python'},
  {src: djangoIcon, label: 'Django'},
  {src: gitIcon, label: 'Git'},
  {src: nginxIcon, label: 'Nginx'},
];

const About = () => {
  const handleScroll = () => {
    const about = document.getElementById('about');
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
    <section id='about'>
      <h1>About me</h1>
      <div>
        <p>
          A radiophysics student passionately learning Web Development.
          Started out as student of Yandex Praktikum in Back End, however the
          study format did not suit me. Continued with my pet project and
          learning in parallel <a href="https://theodinproject.com">The Odin Project</a>.
        </p>
        <div className="tech">
          {TECH_LIST.map((item, index) => (
            <div className="stack" key={index}>
              <img src={item.src} alt={item.label} className="tech-icon" />
              <p className="tech-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
