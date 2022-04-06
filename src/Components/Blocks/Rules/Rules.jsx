import React from 'react';
import PropTypes from 'prop-types';
import Rule from './Rule/Rule';
import './Rules.scss';

/* Компонент: Вьюпорты экрана */
/*
    Параметры:

    data - данные о вьюпортах ( title, img, imgAlt, designations ( name, number ) )
    prefix - добавление блок_элемент ко всем элементам с указанным префиксом
*/
function Rules({
  data,
  prefix
}) {
  const classes = prefix ? `rules ${prefix}` : 'rules';
  return (
    <div className={classes}>
      {data.map((item) => (
        <Rule
          key={item.title}
          title={item.title}
          img={item.img}
          imgAlt={item.imgAlt}
          designations={item.designations}
          prefix={prefix}
        />
      ))}
    </div>
  );
}

Rules.defaultProps = {
  data: [],
  prefix: '',
};

Rules.propTypes = {
  data: PropTypes.instanceOf(Array),
  prefix: PropTypes.string
};

export default Rules;
