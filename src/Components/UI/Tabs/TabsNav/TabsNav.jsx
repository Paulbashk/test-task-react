import React from 'react';
import PropTypes from 'prop-types';
import TabNav from './TabNav/TabNav';
import './TabsNav.scss';
import classesPrefix from '../../../../Utils/classesPrefix';

/* Компонент: Табы, переключатели - Навигация */
/*
    Параметры:

    data - Данные, которые содержит таб (контент, компоненты)
    active - активный элемент
    setActive - функция для изменения состояния
    prefix - добавление блок_элемент ко всем элементам с указанным префиксом
*/
function TabsNav({
  data,
  active,
  setActive,
  prefix
}) {
  return (
    <div className={`tabs-nav${classesPrefix(prefix, 'tabs-nav')}`}>
      { data.map((item, number) => (
        <React.Fragment key={item.name}>
          <TabNav
            number={number}
            name={item.name}
            active={active}
            setActive={setActive}
            prefix={prefix}
          />
        </React.Fragment>
      )) }
    </div>
  );
}

TabsNav.defaultProps = {
  data: [],
  active: 0,
  setActive: null,
  prefix: ''
};

TabsNav.propTypes = {
  data: PropTypes.instanceOf(Array),
  active: PropTypes.number,
  setActive: PropTypes.func,
  prefix: PropTypes.string
};

export default TabsNav;
