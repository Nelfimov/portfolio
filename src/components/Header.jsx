import React, {useRef} from 'react';
import '../styles/Header.css';
import menuIcon from '../images/menu.svg';

const NAV_LINKS = [
  {href: '#hero', text: 'me'},
  {href: '#about', text: 'about'},
  {href: '#projects', text: 'projects'},
  {href: 'https://github.com/nelfimov', text: 'github'},
];

const Header = () => {
  const menu = useRef();

  window.onscroll = () => {
    // Header
    const top = window.scrollY;
    const header = document.querySelector('header');
    if (top > 50) {
      header.classList.add('scrolled');
      document.body.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
      document.body.classList.remove('scrolled');
    };

    // Header nav linkds
    const nav = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    sections.forEach((i) => {
      // Length or number of pixels the viewport has been scrolled
      const top = window.scrollY;
      // Length of the element from the top of the viewport
      const offset = i.offsetTop - 50;
      // Length of the sections
      const height = i.offsetHeight;
      const id = i.getAttribute('id');

      if (top >= offset && top < offset + height) {
        nav.forEach((link) => {
          link.classList.remove('active');
          document
              .querySelector('header nav a[href*=' + id + ']')
              .classList.add('active');
        });
      }
    });
  };

  const handleClick = (e) => {
    menu.current.classList.toggle('hidden');
    e.target.classList.toggle('click');
  };

  return (
    <header>
      <span><a href="/" aria-label='home'>LOGO</a></span>
      <nav>
        {NAV_LINKS.map((item, index) => (
          <a key={index} href={item.href} aria-label={item.text}>{item.text}</a>
        ))}
      </nav>
      <div className="menu">
        <img src={menuIcon} alt="menu" onClick={handleClick} />
        <ul className="hidden" ref={menu}>
          <li><a href="#about" aria-label='about'></a></li>
          <li><a href="https://github.com/Nelfimov" aria-label='github link'>Github</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
