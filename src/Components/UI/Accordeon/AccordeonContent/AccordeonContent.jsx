import React from 'react';
import PropTypes from 'prop-types';
import classesPrefix from '../../../../Utils/classesPrefix';

/* Компонент: Аккордион - content */
/*
    Параметры:
    content - содержимое, контент (  )
*/
function AccordeonContent({
  content,
  isActive,
  prefix
}) {
  return (
    <div
      className={`wrapper-accordion__acc-content ${isActive ? 'wrapper-accordion__acc-content--active' : ''}${classesPrefix(prefix, 'acc-content')}${isActive ? classesPrefix(prefix, 'acc-content--active') : ''}`}
    >
      { content
                && content.type === 'text'
        ? <p className={`wrapper-accordion__text${classesPrefix(prefix, 'text')}`}>{content.full}</p>
        : content.full}
    </div>
  );
}

AccordeonContent.defaultProps = {
  content: {},
  isActive: false,
  prefix: ''
};

AccordeonContent.propTypes = {
  content: PropTypes.shape({
    type: PropTypes.string,
    full: PropTypes.node
  }),
  isActive: PropTypes.bool,
  prefix: PropTypes.string
};

export default AccordeonContent;
