import React from 'react';
import ICONS_LIST from '../icons.json';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/nelfimov">
        <img
          src={`${process.env.PUBLIC_URL}${ICONS_LIST.general.github}`}
          alt="github"
        />
      </a>
    </footer>
  );
};

export default Footer;
