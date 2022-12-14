import React, {useState, useEffect} from 'react';
import HEROES_LIST from '../heroes.json';

const ProgressiveImage = () => {
  let placehoalder;
  let image;
  let img;

  if (window.innerWidth >= 800) {
    placehoalder = HEROES_LIST['800_low'];
    image = HEROES_LIST['800'];
  } else {
    placehoalder = HEROES_LIST['400_low'];
    image = HEROES_LIST['400'];
  };

  const [src, setSrc] = useState(placehoalder);

  const handleResize = () => {
    if (window.innerWidth >= 800) {
      placehoalder = HEROES_LIST['800_low'];
      image = HEROES_LIST['800'];
    } else {
      placehoalder = HEROES_LIST['400_low'];
      image = HEROES_LIST['400'];
    }
    img = new Image();
    img.src = process.env.PUBLIC_URL + image;
    img.onload = () => setSrc(image);
  };

  handleResize();

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [src]);

  const customClass = placehoalder && src === placehoalder ?
    'loading' :
    'loaded';

  return (
    <img
      src={`${process.env.PUBLIC_URL}${src}`}
      alt="profile"
      className={`${customClass}`}
    />
  );
};

export default ProgressiveImage;
