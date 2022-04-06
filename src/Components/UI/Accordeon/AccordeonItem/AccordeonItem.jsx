import React from 'react';
import PropTypes from 'prop-types';
import classesPrefix from '../../../../Utils/classesPrefix';

/* Компонент: Аккордион - item */
/*
    Параметры:

    name - наименование
*/
function AccordeonItem({
  name,
  onClick,
  isActive,
  prefix
}) {
  return (
    <div className={`wrapper-accordion__acc-item ${isActive ? 'wrapper-accordion__acc-item--active' : ''}${classesPrefix(prefix, 'acc-item')}${isActive ? classesPrefix(prefix, 'acc-item--active') : ''}`} onClick={onClick} aria-hidden="true">
      <p className={`wrapper-accordion__name${classesPrefix(prefix, 'name')}`}>{name}</p>
    </div>
  );
}

AccordeonItem.defaultProps = {
  name: '',
  onClick: null,
  isActive: false,
  prefix: ''
};

AccordeonItem.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  prefix: PropTypes.string
};

export default AccordeonItem;
