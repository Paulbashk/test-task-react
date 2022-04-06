import React from 'react';
import PropTypes from 'prop-types';
import classesPrefix from '../../../../Utils/classesPrefix';

/* Компонент: Типографика - элемент */
/*
    Параметры:

    name - наименование принта
    example - текст принта ( в примере )
    prefix - добавление блок_элемент ко всем элементам с указанным префиксом
    type - тип принта ( Например: h1, h2, h3.. )
      Типы:
          - h1
          - h2
          - h3
          - h4
          - lead
          - strong
          - p
          - min
*/
function Print({
  name,
  example,
  type,
  prefix
}) {
  const classes = prefix ? `prints__print ${prefix}` : 'prints__print';

  // Определение тэга
  const tag = (type === 'lead') || (type === 'strong') || (type === 'min') ? 'p' : type;

  // Создание элемента
  const elememtExample = React.createElement(
    tag,
    { className: `prints__example prints__example--${type}${classesPrefix(prefix, 'example')}${classesPrefix(prefix, `example--${type}`)}` },
    example
  );

  return (
    <div className={classes}>
      <div className={`prints__left${classesPrefix(prefix, 'left')}`}>
        <p className={`prints__name min${classesPrefix(prefix, 'name')}`}>{name}</p>
      </div>
      <div className={`prints__right${classesPrefix(prefix, 'right')}`}>
        {elememtExample}
      </div>
    </div>
  );
}

Print.defaultProps = {
  name: '',
  example: '',
  type: '',
  prefix: ''
};

Print.propTypes = {
  name: PropTypes.string,
  example: PropTypes.string,
  type: PropTypes.string,
  prefix: PropTypes.string
};

export default Print;
