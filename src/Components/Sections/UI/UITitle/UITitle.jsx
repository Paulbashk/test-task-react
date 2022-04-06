import React from 'react';

/* Компонент: Секция UI - Заголовок */
/*
    Параметры:

    type - определяет, булет ли элемент в обертке ( Boolean )
    title - заголовок
    description - описание
*/
const UITitle = ({ type, title = '', description = '' }) => {
  const elements = type
    ? (
      <div className="section-ui__wrapper-title">
        <h3 className="section-ui__title">{title}</h3>
        <p className="section-ui__description">{description}</p>
      </div>
    )
    : (<h3 className="section-ui__title">{title}</h3>);

  return (elements);
};

export default UITitle;
