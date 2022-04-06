import React from 'react';
import PropTypes from 'prop-types';
import UITitle from '../UITitle/UITitle';

/* Компонент: Секция UI - Контент */
/*
    Параметры:

    wrapperName - наименование обертки
    titleType - определяет, булет ли элемент в обертке ( Boolean )
    title - заголовок
    description - описание
*/
function UIContent({
  children,
  wrapperName,
  titleType,
  title,
  description
}) {
  return (
    <div className={`section-ui__wrapper-content section-ui__wrapper-content--${wrapperName}`}>
      <UITitle
        type={titleType}
        title={title}
        description={description}
      />
      {children}
    </div>
  );
}

UIContent.defaultProps = {
  wrapperName: '',
  titleType: false,
  title: '',
  description: ''
};

UIContent.propTypes = {
  children: PropTypes.element.isRequired,
  wrapperName: PropTypes.string,
  titleType: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string
};

export default UIContent;
