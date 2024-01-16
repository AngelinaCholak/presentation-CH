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
import image4 from './img/img4.jpg';
import image5 from './img/img5.jpg';
import image6 from './img/img6.jpg';
import image7 from './img/img7.jpg';
import image8 from './img/img8.jpg';
import image9 from './img/img9.jpg';
import image10 from './img/img10.jpg';
import image11 from './img/img11.jpg';
import image12 from './img/img12.jpg';
import image13 from './img/img13.jpg';
import image14 from './img/img14.jpg';
import image15 from './img/img15.jpg';
import image16 from './img/img16.jpg';
import image17 from './img/img17.jpg';

const images = [
  {
    src: image1,
    title: 'Заголовок 1',
    description: 'Опис 1',
  },
  {
    src: image2,
    title: 'Заголовок 2',
    description: 'Опис 2',
  },
  {
    src: image3,
    title: 'Заголовок 3',
    description: 'Опис 3',
  },
  {
    src: image4,
    title: 'Заголовок 4',
    description: 'Опис 4',
  },
  {
    src: image5,
    title: 'Заголовок 5',
    description: 'Опис 5',
  },
  {
    src: image6,
    title: 'Заголовок 6',
    description: 'Опис 6',
  },
  {
    src: image7,
    title: 'Заголовок 7',
    description: 'Опис 7',
  },
  {
    src: image8,
    title: 'Заголовок 8',
    description: 'Опис 8',
  },
  {
    src: image9,
    title: 'Заголовок 9',
    description: 'Опис 9',
  },
  {
    src: image10,
    title: 'Заголовок 10',
    description: 'Опис 10',
  },
  {
    src: image11,
    title: 'Заголовок 11',
    description: 'Опис 11',
  },
  {
    src: image12,
    title: 'Заголовок 12',
    description: 'Опис 12',
  },
  {
    src: image13,
    title: 'Заголовок 13',
    description: 'Опис 13',
  },
  {
    src: image14,
    title: 'Заголовок 14',
    description: 'Опис 14',
  },
  {
    src: image15,
    title: 'Заголовок 15',
    description: 'Опис 15',
  },
  {
    src: image16,
    title: 'Заголовок 16',
    description: 'Опис 16',
  },
  {
    src: image17,
    title: 'Заголовок 17',
    description: 'Опис 17',
  },
];

const Slider = () => {
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
          />
          <div className={css.captionContainer}>
            <p className={css.description}>{currentImage.description}</p>
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

export default Slider;
