import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AccordeonElement from './AccordeonElement/AccordeonElement';
import './Accordeon.scss';

/* Компонент: Аккордион */
/*
    Параметры:

    data - данные элемента аккордиона ( name, content ( type, full ) )
    prefix - добавление блок_элемент ко всем элементам с указанным префиксом
*/
function Accordeon({
  data,
  firstElement,
  accWrapperClassName,
  prefix
}) {
  const [active, setActive] = useState(firstElement);

  const wrapperClasses = accWrapperClassName || '';
  const classes = prefix ? `wrapper-accordion ${prefix} ${wrapperClasses}` : `wrapper-accordion ${wrapperClasses}`;

  return (
    <div className={classes}>
      {data.map((item, number) => (
        <AccordeonElement
          key={Math.random()}
          number={number}
          item={item}
          prefix={prefix}
          active={active}
          setActive={setActive}
        />
      ))}
    </div>
  );
}

Accordeon.defaultProps = {
  data: [],
  firstElement: 0,
  accWrapperClassName: '',
  prefix: ''
};

Accordeon.propTypes = {
  data: PropTypes.instanceOf(Array),
  firstElement: PropTypes.number,
  accWrapperClassName: PropTypes.string,
  prefix: PropTypes.string
};

export default Accordeon;
