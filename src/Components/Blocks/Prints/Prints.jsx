import React from 'react';
import PropTypes from 'prop-types';
import Print from './Print/Print';
import './Prints.scss';

/* Компонент: Типографика */
/*
    Параметры:

    data - Данные всех принтов ( name, example, type )

    Добавление классов:
      wrapperPrintsClassName - класс для обертки
      prefix - добавление блок_элемент ко всем элементам с указанным префиксом
*/
function Prints({
  data,
  prefix,
  wrapperPrintsClassName
}) {
  const wrapperClasses = wrapperPrintsClassName || '';
  const classes = prefix ? `prints ${prefix} ${wrapperClasses}` : `prints ${wrapperClasses}`;
  return (
    <div className={classes}>
      {data.map((item) => (
        <Print
          key={item.name}
          name={item.name}
          example={item.example}
          type={item.type}
          prefix={prefix}
        />
      ))}
    </div>
  );
}

Prints.defaultProps = {
  data: [],
  prefix: '',
  wrapperPrintsClassName: ''
};

Prints.propTypes = {
  data: PropTypes.instanceOf(Array),
  prefix: PropTypes.string,
  wrapperPrintsClassName: PropTypes.string
};

export default Prints;
