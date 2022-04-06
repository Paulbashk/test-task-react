import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../UI/Section/Section';
import './SectionPreview.scss';

/* Компонент: секция Preview */
/*
    Параметры:

    classesNameSection - наименование секции
    title - заголовок секции
    description - описание секции
    text - текст секции ( оффер )
*/
function SectionPreview({
  children,
  classesNameSection,
  title,
  description,
  text
}) {
  return (
    <Section classesNameSection={classesNameSection}>
      <div className={`${classesNameSection}__offer`}>
        <div className={`${classesNameSection}__wrapper-title wrapper-title`}>
          <h1 className={`${classesNameSection}__main-title`}>{title}</h1>
          <p className={`${classesNameSection}__lead lead`}>{description}</p>
        </div>
        <p className={`${classesNameSection}__add-desc restrict-592`}>{text}</p>
      </div>
      {children}
    </Section>
  );
}

SectionPreview.defaultProps = {
  children: null,
  classesNameSection: 'section-preview',
  title: '',
  description: '',
  text: ''
};

SectionPreview.propTypes = {
  children: PropTypes.node,
  classesNameSection: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  text: PropTypes.string
};

export default SectionPreview;
