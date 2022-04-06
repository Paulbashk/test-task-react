import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, animateScroll as scroll } from 'react-scroll/modules';
import classesPrefix from '../../../../Utils/classesPrefix';

/* Компонент: Навигация сайта - элемент навигации */
/*
    Параметры:

    name - название ссылки
    href - адрес ссылки
*/
function Item({
  name,
  href,
  offset,
  prefix
}) {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <li className={`navigation__item${classesPrefix(prefix, 'item')}`}>
      <Link
        activeClass={`navigation__link--active${classesPrefix(prefix, 'link--active')}`}
        className={`navigation__link${classesPrefix(prefix, 'link')}`}
        to={href}
        spy
        smooth
        duration={1000}
        offset={offset}
      >
        {name}
      </Link>
    </li>
  );
}

Item.defaultProps = {
  name: '',
  href: '',
  offset: 0,
  prefix: ''
};

Item.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
  offset: PropTypes.number,
  prefix: PropTypes.string
};

export default Item;
