import React, { useEffect, useRef } from 'react';
import Isotope from 'isotope-layout';

import Page from './Page';

import styles from './Isotope.css';

const IsotopeGallery = () => {
  let iso;
  const el = useRef(null);

  useEffect(() => {
    iso = new Isotope(el.current, {
      itemSelector: '.element-item',
      layoutMode: 'fitRows'
    });
  });

  const handleClick = evt => {
    const filterValue = evt.target.dataset.filter;
    iso.arrange({ filter: filterValue });
  };

  return (
    <Page>
      <div className={`${styles.button__group} filter__button--group`}>
        <button onClick={handleClick} data-filter="*">
          Show all
        </button>
        <button onClick={handleClick} data-filter=".metal">
          Metal
        </button>
        <button onClick={handleClick} data-filter=".transition">
          Transition
        </button>
        <button onClick={handleClick} data-filter=".alkali">
          Alkali & Alkaline
        </button>
      </div>

      <div className={`${styles.grid__wrapper} grid`} ref={el}>
        <div className={`${styles.grid__item} element-item metal`}>
          <p className="number">Metal</p>
        </div>
        <div className={`${styles.grid__item} element-item transition`}>
          <p className="number">Transition</p>
        </div>
        <div className={`${styles.grid__item} element-item alkali`}>
          <p className="number">Alkali</p>
        </div>
        <div className={`${styles.grid__item} element-item metal`}>
          <p className="number">Metal</p>
        </div>
        <div className={`${styles.grid__item} element-item transition`}>
          <p className="number">Transition</p>
        </div>
        <div className={`${styles.grid__item} element-item alkali`}>
          <p className="number">Alkali</p>
        </div>
      </div>
    </Page>
  );
};

export default IsotopeGallery;
