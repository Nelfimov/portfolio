import { useRef, useEffect, MouseEvent } from 'react';
import '../styles/Header.css';
import ICONS_LIST from '../icons.json';

const NAV_LINKS = [
  { href: '#hero', text: 'me' },
  { href: '#about', text: 'about' },
  { href: '#projects', text: 'projects' },
  { href: 'https://github.com/nelfimov', text: 'github' },
];

const Header = () => {
  const menuRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const handleClick = (e: MouseEvent<HTMLImageElement>) => {
    if (!menuRef.current || !headerRef.current) return;
    menuRef.current.classList.toggle('active');
    e.currentTarget.classList.toggle('click');
    if (!headerRef.current.classList.contains('scrolled')) {
      headerRef.current.classList.add('scrolled');
    }
  };

  const handleScroll = () => {
    const top = window.scrollY;
    const header = document.querySelector('header') as HTMLElement;
    if (top > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document
              .querySelector(`nav.links a[href*=${entry.target.classList[0]}]`)!
              .classList.add('active');
            document
              .querySelector(`nav.menu a[href*=${entry.target.classList[0]}]`)!
              .classList.add('active');
          } else {
            document
              .querySelector(`nav.links a[href*=${entry.target.classList[0]}]`)!
              .classList.remove('active');
            document
              .querySelector(`nav.menu a[href*=${entry.target.classList[0]}]`)!
              .classList.remove('active');
          }
        });
      },
      {
        rootMargin: '-200px 0px',
        threshold: 0.5,
      },
    );

    const anchors = document.querySelectorAll('section');
    anchors.forEach((anchor) => observer.observe(anchor));

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header ref={headerRef}>
        <div className="container">
          <span>
            <a href="/" aria-label="home">
              My portfolio
            </a>
          </span>
          <nav className="links">
            {NAV_LINKS.map((item, index) => (
              <a key={index} href={item.href} aria-label={item.text}>
                {item.text}
              </a>
            ))}
          </nav>
          <div className="menu-button">
            <img
              src={`${ICONS_LIST.general.menu}`}
              alt="menu"
              onClick={handleClick}
            />
          </div>
        </div>
      </header>
      <nav className="menu" ref={menuRef}>
        <ul>
          {NAV_LINKS.map((item, index) => (
            <li key={index}>
              <a href={item.href} aria-label={item.text}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="overlay" />
    </>
  );
};

export default Header;
