import React from 'react';
import PropTypes from 'prop-types';
import classesPrefix from '../../../../../Utils/classesPrefix';

/* Компонент: Вьюпорты экрана - элемент - внутренний элемент */
/*
    Параметры:

    name - название описания контента
    number - цифра вьюпорта описания контента
*/
function Designation({
  name,
  number,
  prefix
}) {
  return (
    <div className={`rules__designation${classesPrefix(prefix, 'designation')}`}>
      <p className={`rules__name min${classesPrefix(prefix, 'name')}`}>{name}</p>
      <span className={`rules__number${classesPrefix(prefix, 'number')}`}>{number}</span>
    </div>
  );
}

Designation.defaultProps = {
  name: '',
  number: '0',
  prefix: ''
};

Designation.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  prefix: PropTypes.string
};

export default Designation;
