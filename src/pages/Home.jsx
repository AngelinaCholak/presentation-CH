import React from 'react'
import css from './Home.module.css';
import image1 from './img/slide1.png';
import image2 from './img/slide2.png';

export const Home = () => {
  return (
    <div className={css.container}>
      <div className={css.containerImg}>
        <img className={css.img} src={image1} alt="img" />
      </div>
      <div>
        <img className={css.img} src={image2} alt="img" />
      </div>
    </div>
  );
}
