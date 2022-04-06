import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-sticky-el';
import classesPrefix from '../../../Utils/classesPrefix';
import Item from './Item/Item';
import './Navigation.scss';

/* Компонент: Навигация сайта */
/*
    Параметры:

    data - данные о ссылках ( name, href )

    wrapperClassName - добавление класса к обертке
    prefix - добавление блок_элемент ко всем элементам с указанным префиксом
*/
function Navigation({
  data,
  wrapperClassName,
  prefix
}) {
  const wrapperClasses = wrapperClassName || '';
  const classes = prefix ? `navigation ${prefix} ${wrapperClasses}` : `navigation ${wrapperClasses}`;

  return (
    <Sticky
      className={classes}
      stickyClassName="sticky"
      topOffset={-100}
      bottomOffset={100}
      hideOnBoundaryHit={false}
      boundaryElement=".navigation"
    >
      <nav className={`navigation__nav${classesPrefix(prefix, 'nav')}`}>
        <ul className={`navigation__menu${classesPrefix(prefix, 'menu')}`}>
          {data.map((item) => (
            <Item
              key={item.name}
              name={item.name}
              href={item.href}
              prefix={prefix}
              offset={item.offset}
            />
          ))}
        </ul>
      </nav>
    </Sticky>

  );
}

Navigation.defaultProps = {
  data: [],
  wrapperClassName: '',
  prefix: ''
};

Navigation.propTypes = {
  data: PropTypes.instanceOf(Array),
  wrapperClassName: PropTypes.string,
  prefix: PropTypes.string
};

export default Navigation;
