import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import classesPrefix from '../../../Utils/classesPrefix';

/* Компонент: Кнопка */
/*
    Параметры:

    nameButton - название кнопки
    title - заголовок
    disabled - работает/не работает кнопка ( Значение: Boolean )
    styleType - стиль кнопки ( По умолчанию: gradient )

    Добавление классов:
      wrapperClassName - добавление класса обертке компоненты
      itemTitleClassName - добавление класса обертке заголовка
      prefix - добавление блок_элемент ко всем элементам с указанным префиксом
*/
function Button({
  nameButton,
  title,
  disabled,
  styleType,
  wrapperClassName,
  itemTitleClassName,
  prefix
}) {
  const titleClasses = itemTitleClassName || '';
  const wrapperClasses = wrapperClassName || '';
  const classes = prefix ? `wrapper-btn ${prefix}__wrapper-btn ${wrapperClasses}` : `wrapper-btn ${wrapperClasses}`;
  return (
    <div className={classes}>
      <div className={`wrapper-btn__item-title${classesPrefix(prefix, 'item-title')} ${titleClasses}`}>
        {title && <p className={`wrapper-btn__name min${classesPrefix(prefix, 'name')}`}>{title}</p>}
      </div>
      <button type="button" className={`btn btn--${styleType}${classesPrefix(prefix, 'button')}`} disabled={disabled}>{nameButton}</button>
    </div>
  );
}

Button.defaultProps = {
  nameButton: '',
  title: '',
  disabled: false,
  styleType: 'gradient',
  wrapperClassName: '',
  itemTitleClassName: '',
  prefix: ''
};

Button.propTypes = {
  nameButton: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  styleType: PropTypes.string,
  wrapperClassName: PropTypes.string,
  itemTitleClassName: PropTypes.string,
  prefix: PropTypes.string
};

export default Button;
