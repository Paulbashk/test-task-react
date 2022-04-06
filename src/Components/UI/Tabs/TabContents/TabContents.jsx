import React from 'react';
import PropTypes from 'prop-types';
import TabContent from './TabContent/TabContent';
import './TabContents.scss';

/* Компонент: Табы, переключатели - Контент */
/*
    Параметры:

    data - Данные, которые содержит таб (контент, компоненты)
    active - активный элемент
    prefix - добавление блок_элемент ко всем элементам с указанным префиксом
*/
function TabContents({
  data,
  active,
  prefix
}) {
  const classes = prefix ? `tab-contents ${prefix}__tab-contents` : 'tab-contents';

  return (
    <div className={classes}>
      {data.map((item, number) => (
        <React.Fragment key={item.name}>
          <TabContent
            number={number}
            content={item.content}
            active={active}
            prefix={prefix}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

TabContents.defaultProps = {
  data: [],
  active: 0,
  prefix: ''
};

TabContents.propTypes = {
  data: PropTypes.instanceOf(Array),
  active: PropTypes.number,
  prefix: PropTypes.string
};

export default TabContents;
