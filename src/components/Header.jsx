import { useRef } from 'react';
import '../styles/Header.css';
import menuIcon from '../images/menu.svg';

const Header = () => {
  const menuList = useRef();

  const handleClick = (e) => {
    menuList.current.classList.toggle('hidden');
    e.target.classList.toggle('click');
  };

  return (
    <header>
      <span>LOGO</span>
      <nav>
        <a href="/" aria-label='home'>Home</a>
        <a href="https://github.com/Nelfimov" aria-label='github link'>Github</a>
      </nav>
      <div className="menu">
        <img src={menuIcon} alt="menu" onClick={handleClick} />
        <ul className="hidden" ref={menuList}>
          <li><a href="/" aria-label='home'>Home</a></li>
          <li><a href="https://github.com/Nelfimov" aria-label='github link'>Github</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;