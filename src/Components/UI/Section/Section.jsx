import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll/modules';
import './Section.scss';

/* Компонент: Секция */
/*
    Параметры:

    classesNameSection - имя секции
*/
function Section({ children, classesNameSection }) {
  return (
    <section className={`main__${classesNameSection} ${classesNameSection}`}>
      <Element name={classesNameSection} className={`to-scroll ${classesNameSection}__to-scroll`}>
        {children}
      </Element>
    </section>
  );
}

Section.defaultProps = {
  children: null,
  classesNameSection: ''
};

Section.propTypes = {
  children: PropTypes.node,
  classesNameSection: PropTypes.string
};

export default Section;
