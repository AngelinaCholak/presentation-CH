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
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
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

  return (
    <div {...handlers} className={css.sliderContainer}>
      <div className={css.sliderContent}>
        <div className={css.slideContainer}>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className={css.slide}
            width="800"
            height="600"
          />
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
