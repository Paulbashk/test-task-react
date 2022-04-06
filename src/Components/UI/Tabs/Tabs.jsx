import React, { useState } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../../Utils/isEmpty';
import TabsNav from './TabsNav/TabsNav';
import TabContents from './TabContents/TabContents';

/* Компонент: Табы, переключатели */
/*
    Параметры:

    data - Данные, которые содержит таб (контент, компоненты, навигация)
    firstTab - первый активный таб
    prefix - добавление блок_элемент ко всем элементам с указанным префиксом
*/

function Tabs({
  data,
  firstTab,
  prefix
}) {
  // Состояние активного таба
  const [active, setActive] = useState(firstTab);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      { isEmpty(data)
        ? ([
          <TabsNav
            key="TabsNav"
            data={data}
            active={active}
            setActive={setActive}
            prefix={prefix}
          />,
          <TabContents
            key="TabContents"
            data={data}
            active={active}
            prefix={prefix}
          />
        ])
        : <p>Отсутствует контент</p>}
    </>
  );
}

Tabs.defaultProps = {
  data: [],
  firstTab: 0,
  prefix: ''
};

Tabs.propTypes = {
  data: PropTypes.instanceOf(Array),
  firstTab: PropTypes.number,
  prefix: PropTypes.string
};

export default Tabs;
