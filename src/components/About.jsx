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
  {src: bootstrapIcon, label: 'Bootstrap'},
  {src: cssIcon, label: 'CSS'},
  {src: djangoIcon, label: 'Django'},
  {src: gitIcon, label: 'Git'},
  {src: htmlIcon, label: 'HTML'},
  {src: jestIcon, label: 'Jest'},
  {src: jsIcon, label: 'Javascript'},
  {src: nginxIcon, label: 'Nginx'},
  {src: npmIcon, label: 'npm'},
  {src: pythonIcon, label: 'Python'},
  {src: reactIcon, label: 'React'},
  {src: webpackIcon, label: 'Webpack'},
  {src: nodeIcon, label: 'Node'},
];

const About = () => {
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
