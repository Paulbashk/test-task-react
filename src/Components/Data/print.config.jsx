/* Секция Print */
import React from 'react';
import Prints from '../Blocks/Prints/Prints';
import prints from './prints.config';

const print = {
  classesNameSection: 'section-print',
  title: 'Типографика',
  desc: 'Используется шрифт Graphik. На телефонах стили типографики переопределяются',
  tabs: [
    {
      name: 'Десктоп',
      content: <Prints data={prints.desktop} prefix="section-print" />
    },
    {
      name: 'Телефон',
      content: <Prints data={prints.mobile} prefix="section-print" wrapperPrintsClassName="prints--mobile" />
    }
  ]
};

export default print;
