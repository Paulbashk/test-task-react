import React from 'react';
import PropTypes from 'prop-types';
import classesPrefix from '../../../../../Utils/classesPrefix';

/* Компонент: Табы, переключатели */
/*
    Параметры:

    content - Содержимое таба
    active - активный элемент
    tabContentClassName - добавление класса
*/
function TabContent({
  number,
  content,
  active,
  prefix
}) {
  return (
    <div
      className={`tab-contents__tab-content ${number === active ? 'tab-contents__tab-content--active' : ''}${classesPrefix(prefix, 'tab-content')}${number === active ? classesPrefix(prefix, 'tab-content--active') : ''}`}
    >
      {content}
    </div>
  );
}

TabContent.defaultProps = {
  number: 0,
  content: null,
  active: 0,
  prefix: ''
};

TabContent.propTypes = {
  number: PropTypes.number,
  content: PropTypes.node,
  active: PropTypes.number,
  prefix: PropTypes.string
};

export default TabContent;
