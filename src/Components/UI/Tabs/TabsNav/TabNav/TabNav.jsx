import React from 'react';
import PropTypes from 'prop-types';
import classesPrefix from '../../../../../Utils/classesPrefix';

/* Компонент: Табы, переключатели - Навигация */
/*
    Параметры:

    name - Наименование таба
    active - активный элемент
    setActive - функция для изменения состояния
    tabNavClassName - добавление класса для обертки навигационного пункта
    tabNavNameClassName - добавление класса для названия навигационного пункта
*/
function TabNav({
  number,
  name,
  active,
  setActive,
  prefix
}) {
  const changeActive = () => setActive(number);

  return (
    <div
      className={`tabs-nav__tab ${active === number ? 'tabs-nav__tab--active' : ''}${classesPrefix(prefix, 'tab')}${active === number ? classesPrefix(prefix, 'tab--active') : ''}`}
      onClick={() => changeActive()}
      aria-hidden="true"
    >
      <p className={`tabs-nav__name tabs-nav__name--tab${classesPrefix(prefix, 'name')}${classesPrefix(prefix, 'name--tab')}`}>{name}</p>
    </div>
  );
}

TabNav.defaultProps = {
  number: 0,
  name: '',
  active: 0,
  setActive: null,
  prefix: ''
};

TabNav.propTypes = {
  number: PropTypes.number,
  name: PropTypes.string,
  active: PropTypes.number,
  setActive: PropTypes.func,
  prefix: PropTypes.string
};

export default TabNav;
