import React from 'react';
import PropTypes from 'prop-types';
import './Grid.scss';

/* Компонент: Сетка */
function Grid({ children }) {
  return (
    <div className="main__grid grid">
      <div className="grid__wrapper main__grid-wrapper">
        {children}
      </div>
    </div>
  );
}

Grid.propTypes = {
  children: PropTypes.node.isRequired
};

export default Grid;
