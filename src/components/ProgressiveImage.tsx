import { useState, useEffect } from 'react';
import HEROES_LIST from '../heroes.json';

const ProgressiveImage = () => {
  let placehoalder: string;
  let image: string;
  let img: HTMLImageElement;

  if (window.innerWidth >= 800) {
    placehoalder = import.meta.env.BASE_URL + HEROES_LIST['800_low'];
    image = import.meta.env.BASE_URL + HEROES_LIST['800'];
  } else {
    placehoalder = import.meta.env.BASE_URL + HEROES_LIST['400_low'];
    image = import.meta.env.BASE_URL + HEROES_LIST['400'];
  }

  const [src, setSrc] = useState(placehoalder);

  const handleResize = () => {
    if (window.innerWidth >= 800) {
      placehoalder = import.meta.env.BASE_URL + HEROES_LIST['800_low'];
      image = import.meta.env.BASE_URL + HEROES_LIST['800'];
    } else {
      placehoalder = import.meta.env.BASE_URL + HEROES_LIST['400_low'];
      image = import.meta.env.BASE_URL + HEROES_LIST['400'];
    }
    img = new Image();
    img.src = image;
    img.onload = () => setSrc(image);
  };

  handleResize();

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [src]);

  const customClass =
    placehoalder && src === placehoalder ? 'loading' : 'loaded';

  return <img src={src} alt="profile" className={customClass} />;
};

export default ProgressiveImage;
