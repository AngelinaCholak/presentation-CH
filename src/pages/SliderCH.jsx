import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useSwipeable } from 'react-swipeable';
import css from './Shops.module.css';

import image1 from './img/img1.jpg';
import image2 from './img/img2.jpg';
import image3 from './img/img3.jpg';


const images = [
  {
    src: image1,
    title: 'Заголовок 1',
    description: 'Опис 1',
    price: 'Опис 1',
  },
  {
    src: image2,
    title: 'Заголовок 2',
    description: 'Опис 2',
    price: 'Опис 2',
  },
  {
    src: image3,
    title: 'Заголовок 3',
    description: 'Опис 3',
    price: 'Опис 3',
  },
];

const SliderCH = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
  });

  const currentImage = images[currentIndex];

  return (
    <div {...handlers} className={css.sliderContainer}>
      <div className={css.sliderContent}>
        <div className={css.slideContainer}>
          <div className={css.captionContainer}>
            <h2 className={css.title}>{currentImage.title}</h2>
          </div>
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className={css.slide}
            width="800"
            height="500"
            loading="lazy"
          />
          <div className={css.price}>
            <p className={css.description}>{currentImage.description}</p>
            <p className={css.description}>Price:{currentImage.price}</p>
          </div>
        </div>
      </div>

      <div className={css.buttonContainer}>
        <button className={`${css.arrow} ${css.prev}`} onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className={`${css.arrow} ${css.next}`} onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default SliderCH;


