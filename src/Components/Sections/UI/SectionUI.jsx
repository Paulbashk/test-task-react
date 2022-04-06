import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../UI/Section/Section';
import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import './SectionUI.scss';

/* Компонент: Секция UI - Заголовок */
/*
    Параметры:

    classesNameSection - наименование секции ( класс )
    title - заголовок
    titleClassName - добавление класса заголовку
*/
function SectionUI({
  children,
  classesNameSection,
  title,
  titleClassName,
}) {
  return (
    <Section classesNameSection={classesNameSection}>
      <SectionTitle title={title} titleClassName={titleClassName} />
      {children}
    </Section>
  );
}

SectionUI.defaultProps = {
  children: null,
  classesNameSection: 'section-ui',
  title: '',
  titleClassName: ''
};

SectionUI.propTypes = {
  children: PropTypes.node,
  classesNameSection: PropTypes.string,
  title: PropTypes.string,
  titleClassName: PropTypes.string
};

export default SectionUI;
