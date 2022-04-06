import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.scss';
import classesPrefix from '../../../Utils/classesPrefix';

/* Компонент: Checkbox */
/*
    Параметры:

    name - название checkbox
    title - заголовок
    value - данные checkbox
    checked - значение состояния checkbox (Значение: Boolean)
    setChecked - функция изменения состояния активности

    wrapperClassName - добавление класса обертке
    prefix - добавление блок_элемент ко всем элементам с указанным префиксом
*/
function Checkbox({
  name,
  value,
  title,
  checked,
  setChecked,
  wrapperClassName,
  prefix
}) {
  // Функция изменения состояния чекбокса
  const changeCheckbox = () => {
    setChecked({
      ...checked,
      [name]: !checked[name]
    });
  };

  const wrapperClasses = wrapperClassName || '';
  const classes = prefix ? `checkbox ${prefix} ${wrapperClasses}` : `checkbox ${wrapperClasses}`;

  return (
    <div className={classes}>
      <input
        className={`checkbox__custom-checkbox${classesPrefix(prefix, 'custom-checkbox')}`}
        type="checkbox"
        id={name}
        name={name}
        value={value}
        checked={checked[name]}
        onChange={changeCheckbox}
      />
      <label
        className={`checkbox__label${classesPrefix(prefix, 'label')}`}
        htmlFor={name}
      >
        {title}
      </label>
    </div>
  );
}

Checkbox.defaultProps = {
  name: '',
  value: '',
  title: '',
  checked: {},
  setChecked: null,
  wrapperClassName: '',
  prefix: ''
};

Checkbox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  title: PropTypes.string,
  checked: PropTypes.instanceOf(Object),
  setChecked: PropTypes.func,
  wrapperClassName: PropTypes.string,
  prefix: PropTypes.string
};

export default Checkbox;
