import React from 'react';
import PropTypes from 'prop-types';
import Designation from './Designation/Designation';
import classesPrefix from '../../../../Utils/classesPrefix';

/* Компонент: Вьюпорты экрана - элемент */
/*
    Параметры:

    title - заголовок вьюпорта
    img - ссылка на изображение вьюпорта
    imgAlt - alt для изображения вьюпорта
    designations - описание контента ( данные )
    prefix - добавление блок_элемент ко всем элементам с указанным префиксом
*/
function Rule({
  title,
  img,
  imgAlt,
  designations,
  prefix
}) {
  return (
    <div className={`rules__rule${classesPrefix(prefix, 'rule')}`}>
      <h3 className={`rules__title${classesPrefix(prefix, 'title')}`}>{title}</h3>
      <div className={`rules__designations${classesPrefix(prefix, 'designations')}`}>
        {designations.map((item) => (
          <Designation
            key={item.name}
            name={item.name}
            number={item.number}
            prefix={prefix}
          />
        ))}
      </div>
      <div className={`rules__wrapper-image${classesPrefix(prefix, 'wrapper-image')}`}>
        <img className={`rules__img${classesPrefix(prefix, 'img')}`} src={img} alt={imgAlt} />
      </div>
    </div>
  );
}

Rule.defaultProps = {
  title: '',
  img: '',
  imgAlt: '',
  designations: [],
  prefix: ''
};

Rule.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  designations: PropTypes.instanceOf(Array),
  prefix: PropTypes.string
};

export default Rule;
