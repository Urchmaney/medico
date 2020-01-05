import React from 'react';
import imgSrc from '../../images/logo.svg';
import '../../styles/style.scss';

const Image = () => (
  <div className="site-image">
    <img src={imgSrc} alt="logo" />
    <h3>
      MEDI
      <span>CO</span>
    </h3>
  </div>
);

export default Image;
