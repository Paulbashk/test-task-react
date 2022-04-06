import React from 'react';
import PropTypes from 'prop-types';
import AccordeonContent from '../AccordeonContent/AccordeonContent';
import AccordeonItem from '../AccordeonItem/AccordeonItem';

/* Компонент: Аккордион - элемент ( item + content ) */
/*
    Параметры:

    item - данные элемента аккордиона ( name, content ( type, full ) )
*/
function AccordeonElement({
  item,
  number,
  active,
  setActive,
  prefix
}) {
  const isActive = number === active;

  const itemActive = () => {
    setActive(number);
  };

  return (
    <>
      <AccordeonItem
        name={item.name}
        onClick={itemActive}
        isActive={isActive}
        prefix={prefix}
      />
      <AccordeonContent
        content={item.content}
        isActive={isActive}
        prefix={prefix}
      />
    </>
  );
}

AccordeonElement.defaultProps = {
  item: {},
  number: 0,
  active: 0,
  setActive: null,
  prefix: ''
};

AccordeonElement.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    content: PropTypes.instanceOf(Object)
  }),
  number: PropTypes.number,
  active: PropTypes.number,
  setActive: PropTypes.func,
  prefix: PropTypes.string
};

export default AccordeonElement;
