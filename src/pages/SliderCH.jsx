import React from 'react';
import css from './SliderCH.module.css';
import { Carousel } from 'components/Carousel/Carousel';

import image1 from './img/img1.jpg';
import image2 from './img/img2.jpg';
import image3 from './img/img3.jpg';
import image4 from './img/img4.jpg';

export const SliderCH = () => {
    return (
      <div className={css.container}>
        <Carousel>
          <div className={`${css.item} ${css.item1}`}>
            <div>
              <img src={image1} alt={`Chehol`} width="450" height="450" />
            </div>
            <div>
              <p>fghnjmk,</p>
            </div>
          </div>
          <div className={`${css.item} ${css.item1}`}>
            <div>
              <img src={image2} alt={`Chehol`} width="450" height="450" />
            </div>
            <div>
              <p>fghnjmk,</p>
            </div>
          </div>
          <div className={`${css.item} ${css.item1}`}>
            <div>
              <img src={image3} alt={`Chehol`} width="450" height="450" />
            </div>
            <div>
              <p>fghnjmk,</p>
            </div>
          </div>
          <div className={`${css.item} ${css.item1}`}>
            <div>
              <img src={image4} alt={`Chehol`} width="450" height="450" />
            </div>
            <div>
              <p>fghnjmk,</p>
            </div>
          </div>
        </Carousel>
      </div>
    );
};