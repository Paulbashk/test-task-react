/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import CustomSelect from '../CustomSelect/CustomSelect';
import './WrapperSelect.scss';
import classesPrefix from '../../../Utils/classesPrefix';

/* Компонент: Обертка - Выпадающий список */
/*
    Параметры:

    wrapperTitle - наименование обертки
    options - опции выпадающего списка

    prefix - добавление блок_элемент ко всем элементам с указанным префиксом
    props.selectClassName - добавление класса выпадающему списку
*/

function WrapperSelect({
  wrapperTitle,
  prefix,
  ...props
}) {
  const classes = prefix ? `wrapper-select ${prefix}__wrapper-select` : 'wrapper-select';
  return (
    <div className={classes}>
      <div className={`wrapper-select__item-title${classesPrefix(prefix, 'item-title')}`}>
        { wrapperTitle && <p className={`wrapper-select__name min${classesPrefix(prefix, 'name')}`}>{wrapperTitle}</p> }
      </div>
      <CustomSelect prefix={prefix} {...props} />
    </div>
  );
}

WrapperSelect.defaultProps = {
  prefix: '',
  wrapperTitle: ''
};

WrapperSelect.propTypes = {
  prefix: PropTypes.string,
  wrapperTitle: PropTypes.string
};

export default WrapperSelect;
