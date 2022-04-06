/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import DropdownIndicator from './DropdownIndicator/DropdownIndicator';
import './CustomSelect.scss';

/* Компонент: Выпадающий список */
/*
    Параметры:

    options - опции выпадающего списка
    selectClassName - добавление класса выпадающему списку
*/
function CustomSelect(props) {
  const { selectClassName, prefix } = props || '';
  const classes = prefix ? `select ${prefix}__select ${selectClassName}` : `select ${selectClassName}`;
  return (
    <Select
      {...props}
      className={classes}
      classNamePrefix="select"
      components={{
        DropdownIndicator
      }}
    />
  );
}

CustomSelect.defaultProps = {
  props: {
    selectClassName: '',
    prefix: ''
  }
};

CustomSelect.propTypes = {
  props: PropTypes.shape({
    selectClassName: PropTypes.string,
    prefix: PropTypes.string
  })
};

export default CustomSelect;
