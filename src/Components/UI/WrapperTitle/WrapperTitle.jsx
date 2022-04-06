import React from 'react';
import PropTypes from 'prop-types';
import './WrapperTitle.scss';
import classesPrefix from '../../../Utils/classesPrefix';

/* Компонент: Обертка для заголовка */
/*
    Параметры:

    title - заголовок
    description - описание
    prefix - добавление блок_элемент ко всем элементам с указанным префиксом
*/
function WrapperTitle({
  title,
  description,
  prefix
}) {
  return (
    <div className={`wrapper-title${classesPrefix(prefix, 'wrapper-title')}`}>
      <h1 className={`section-title${classesPrefix(prefix, 'section-title')}`}>{title}</h1>
      <p className={`description${classesPrefix(prefix, 'description')}`}>{description}</p>
    </div>
  );
}

WrapperTitle.defaultProps = {
  title: '',
  description: '',
  prefix: ''
};

WrapperTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  prefix: PropTypes.string
};

export default WrapperTitle;
