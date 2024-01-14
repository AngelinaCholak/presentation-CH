import React, { Children, cloneElement, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import css from './Carousel.module.css';

// const PAGE_WITH = `100%`
export const Carousel = ({ children }) => {
    
    const [pages, setPages] = useState([]);
    const handleLeftArrowClick = (() => {
        console.log('handleLeftArrowClick');
    })
    const handleRightArrowClick = (() => {
         console.log('handleLeftArrowClick');
     });

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                  style: {
                    height: '100%',
                    minWidth: '100%',
                    maxWidth: '100%',
                  },
                });
            })
        )
    },[])
  return (
    <div className={css.mainContainer}>
      <FaChevronLeft className={css.arrow} onClick={handleLeftArrowClick} />
      <div className={css.window}>
        <div className={css.allPagesContainer}>{pages}</div>
      </div>
      <FaChevronRight className={css.arrow} onClick={handleRightArrowClick} />
    </div>
  );
}
