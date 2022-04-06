import React from 'react';
import PropTypes from 'prop-types';
import './TestGrid.scss';

/* Компонент: Сетка, для проверки задания */
/*
    Параметры:

    enable - вкл/выкл сетку
*/

function TestGrid({ enable }) {
  return (
    <div className="grid-layout" style={{ display: enable ? 'flex' : 'none' }}>
      <div className="grid-layout__ctr">
        <div className="grid-layout__wrapper">
          <div className="grid-layout__block" />
          <div className="grid-layout__block" />
          <div className="grid-layout__block" />
          <div className="grid-layout__block" />
          <div className="grid-layout__block" />
          <div className="grid-layout__block" />
          <div className="grid-layout__block" />
          <div className="grid-layout__block" />
          <div className="grid-layout__block" />
          <div className="grid-layout__block" />
          <div className="grid-layout__block" />
          <div className="grid-layout__block" />
        </div>
      </div>
    </div>
  );
}

TestGrid.defaultProps = {
  enable: true
};

TestGrid.propTypes = {
  enable: PropTypes.bool
};

export default TestGrid;
