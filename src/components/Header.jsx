import React, {useRef, useEffect} from 'react';
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

  const handleClick = (e) => {
    menu.current.classList.toggle('active');
    e.target.classList.toggle('click');
  };

  const handleScroll = () => {
    const top = window.scrollY;
    const header = document.querySelector('header');
    if (top > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    };
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = document
              .querySelector(`nav a[href*=${entry.target.classList[0]}]`);
          target.classList.add('active');
        } else {
          const target = document
              .querySelector(`nav a[href*=${entry.target.classList[0]}]`);
          target.classList.remove('active');
        };
      });
    }, {
      rootMargin: '-200px 0px',
      threshold: .5,
    });

    const anchors = document.querySelectorAll('section');
    anchors.forEach((anchor) => observer.observe(anchor));

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <span><a href="/" aria-label='home'>My portfolio</a></span>
      <nav>
        {NAV_LINKS.map((item, index) => (
          <a key={index} href={item.href} aria-label={item.text}>{item.text}</a>
        ))}
      </nav>
      <div className="menu">
        <img
          src={`${process.env.PUBLIC_URL}${ICONS_LIST.general.menu}`}
          alt="menu"
          onClick={handleClick}
        />
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
