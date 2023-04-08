import ICONS_LIST from '../icons.json';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <span>Built with:</span>
        <img
          src={ICONS_LIST.tech.react.src}
          alt={ICONS_LIST.tech.react.label}
        />
        <img
          src={ICONS_LIST.tech.typescript.src}
          alt={ICONS_LIST.tech.typescript.label}
        />
        <img src={ICONS_LIST.tech.html.src} alt={ICONS_LIST.tech.html.label} />
        <img src={ICONS_LIST.tech.css.src} alt={ICONS_LIST.tech.css.label} />
        <img
          src={ICONS_LIST.tech.eslint.src}
          alt={ICONS_LIST.tech.eslint.label}
        />
        <img src={ICONS_LIST.tech.vite.src} alt={ICONS_LIST.tech.vite.label} />
      </div>
    </footer>
  );
};

export default Footer;
