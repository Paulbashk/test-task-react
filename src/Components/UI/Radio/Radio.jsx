import React from 'react';
import PropTypes from 'prop-types';
import './Radio.scss';
import classesPrefix from '../../../Utils/classesPrefix';

/* Компонент: Radio */
/*
    Параметры:

    name - название radio
    data - группа данных radio
    title - заголовок
    startValue - присвоенное значение для radio
    value - текущее значение состояния radio
    setValue - функция изменения состояния radio
    labelClassName - добавление класса label элементу
    prefix - добавление блок_элемент ко всем элементам с указанным префиксом
*/
function Radio({
  name,
  data,
  title,
  startValue,
  value,
  setValue,
  labelClassName,
  prefix
}) {
  const labelClasses = labelClassName || '';
  const classes = prefix ? `radio ${prefix}` : 'radio';

  return (
    <div className={classes}>
      <input
        className={`radio__custom-radio${classesPrefix(prefix, 'custom-radio')}`}
        type="radio"
        value={startValue}
        id={name}
        name={data}
        checked={value === startValue}
        onChange={() => setValue(startValue)}
      />
      <label
        className={`radio__label${classesPrefix(prefix, 'custom-radio')} ${labelClasses}`}
        htmlFor={name}
      >
        {title}
      </label>
    </div>
  );
}

Radio.defaultProps = {
  name: '',
  data: '',
  title: '',
  startValue: '',
  value: '',
  setValue: null,
  labelClassName: '',
  prefix: ''
};

Radio.propTypes = {
  name: PropTypes.string,
  data: PropTypes.string,
  title: PropTypes.string,
  startValue: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
  prefix: PropTypes.string,
  labelClassName: PropTypes.string,
};

export default Radio;
