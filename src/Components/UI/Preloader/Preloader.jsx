import React from 'react';
import './Preloader.scss';

/* Компонент: Прелоадрер, загрузочная анимация */
function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__loader" />
    </div>
  );
}

export default Preloader;
