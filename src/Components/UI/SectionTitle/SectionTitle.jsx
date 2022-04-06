import React from 'react';
import PropTypes from 'prop-types';
import './SectionTitle.scss';

/* Компонент: Заголовок секции */
/*
    Параметры:

    title - заголовок
    titleClassName - добавление класса заголовку
*/
function SectionTitle({ title, titleClassName }) {
  return (
    <h2 className={`section-title${titleClassName}`}>{title}</h2>
  );
}

SectionTitle.defaultProps = {
  title: '',
  titleClassName: ''
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  titleClassName: PropTypes.string
};

export default SectionTitle;
