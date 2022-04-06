import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';
import classesPrefix from '../../../Utils/classesPrefix';

/* Компонент: Input, поле ввода */
/*
    Параметры:

    typeInput - тип поля ввода
    nameInput - название поля ввода (name, id)
    title - заголовок
    placeholder - подсказка
    errorMessage - сообщение об ошибке
    value - значение поля ввода
    setValue - функция изменения значения поля ввода
    prefix - добавление блок_элемент ко всем элементам с указанным префиксом
    wrapperClassName - добавление класса обертке
    itemTitleClassName - добавление класса обертке заголовка
    prefix - добавление блок_элемент ко всем элементам с указанным префиксом
*/
function Input({
  typeInput,
  nameInput,
  title,
  placeholder,
  errorMessage,
  label,
  value,
  setValue,
  wrapperClassName,
  itemTitleClassName,
  prefix
}) {
  // Функция изменения состояния значения полей ввода
  const changeValue = (event) => {
    setValue({
      ...value,
      [nameInput]: event.target.value,
    });
  };

  const wrapperClasses = wrapperClassName || '';
  const titleClasses = itemTitleClassName || '';
  const classes = prefix ? `wrapper-input ${prefix}__wrapper-input ${wrapperClasses}` : `wrapper-input ${wrapperClasses}`;

  return (
    <div className={classes}>
      <div className={`wrapper-input__item-title${classesPrefix(prefix, 'item-title')} ${titleClasses}`}>
        {title && (
          <p className={`wrapper-input__name min${classesPrefix(prefix, 'name')}`}>
            {title}
          </p>
        )}
      </div>
      {label && (
        <label
          className={`wrapper-input__label${classesPrefix(prefix, 'label')}`}
          htmlFor={nameInput}
        >
          {label}
        </label>
      )}
      <div className={`wrapper-input__item-input${classesPrefix(prefix, 'item-input')}`}>
        <input
          className={`wrapper-input__input${classesPrefix(prefix, 'input')}`}
          type={typeInput}
          name={nameInput}
          id={nameInput}
          placeholder={placeholder}
          autoComplete="nope"
          value={value[nameInput]}
          onChange={(event) => changeValue(event)}
        />
        {errorMessage && (
          <p className={`wrapper-input__message${classesPrefix(prefix, 'message')}`}>
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
}

Input.defaultProps = {
  typeInput: 'text',
  nameInput: '',
  title: '',
  placeholder: '',
  errorMessage: '',
  label: '',
  value: {},
  setValue: null,
  wrapperClassName: '',
  itemTitleClassName: '',
  prefix: ''
};

Input.propTypes = {
  typeInput: PropTypes.string,
  nameInput: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.instanceOf(Object),
  setValue: PropTypes.func,
  wrapperClassName: PropTypes.string,
  itemTitleClassName: PropTypes.string,
  prefix: PropTypes.string
};

export default Input;
