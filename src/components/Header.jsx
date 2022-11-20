import React, {useRef} from 'react';
import '../styles/Header.css';
import ICONS_LIST from '../icons.json';

const NAV_LINKS = [
  {href: '#hero', text: 'me'},
  {href: '#about', text: 'about'},
  {href: '#projects', text: 'projects'},
  {href: 'https://github.com/nelfimov', text: 'github'},
];

const Header = () => {
  const menu = useRef();

  const handleScrollHeader = () => {
    const top = window.scrollY;
    const header = document.querySelector('header');
    if (top > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    };
  };

  const handleScrollHeaderLinks = () => {
    const nav = document.querySelectorAll('nav a');
    const menu = document.querySelectorAll('.menu a');
    const sections = document.querySelectorAll('section');

    sections.forEach((i) => {
      // Length or number of pixels the viewport has been scrolled
      const top = window.scrollY;
      // Length of the element from the top of the viewport
      const offset = i.offsetTop - 50;
      // Length of the sections
      const height = i.offsetHeight;
      const id = i.getAttribute('class').split(' ')[0];

      if (top >= offset && top < offset + height) {
        nav.forEach((link) => {
          link.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']')
              .classList.add('active');
        });
        menu.forEach((link) => {
          link.classList.remove('active');
          document.querySelector('header .menu a[href*=' + id + ']')
              .classList.add('active');
        });
      }
    });
  };

  window.addEventListener('scroll', () => {
    handleScrollHeader();
    handleScrollHeaderLinks();
  });

  const handleClick = (e) => {
    menu.current.classList.toggle('active');
    e.target.classList.toggle('click');
  };

  return (
    <header>
      <span><a href="/" aria-label='home'>My portfolio</a></span>
      <nav>
        {NAV_LINKS.map((item, index) => (
          <a key={index} href={item.href} aria-label={item.text}>{item.text}</a>
        ))}
      </nav>
      <div className="menu">
        <img src={ICONS_LIST.general.menu} alt="menu" onClick={handleClick} />
        <ul className="" ref={menu}>
          {NAV_LINKS.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                href={item.href}
                aria-label={item.text}>{item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
