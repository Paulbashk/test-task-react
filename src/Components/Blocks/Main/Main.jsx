import React from 'react';
import PropTypes from 'prop-types';
import './Main.scss';
import Grid from '../Grid/Grid';

/* Компонент: Основа сетки */
function Main({ children }) {
  return (
    <div className="main">
      <Grid>
        {children}
      </Grid>
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired
};

export default Main;
