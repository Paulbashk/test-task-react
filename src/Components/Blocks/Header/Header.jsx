import React from 'react';
import PropTypes from 'prop-types';
import Logotype from '../../UI/Logotype/Logotype';
import { logo } from '../../Data/icons.config';
import main from '../../Data/main.config';
import './Header.scss';

/* Компонент: Шапка сайта */
function Header({ modalActive, setModalActive }) {
  return (
    <header className="header">
      <div className="header__grid grid">
        <div className="grid__wrapper header__wrapper">
          <Logotype
            iconClassName="logo"
            prefix="header"
            text
            logo={logo}
            lastname={main.lastname}
            other={main.other}
          />
          <div className="header__menu-open" onClick={() => setModalActive(!modalActive)} aria-hidden="true" />
        </div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  modalActive: false,
  setModalActive: null
};

Header.propTypes = {
  modalActive: PropTypes.bool,
  setModalActive: PropTypes.func
};

export default Header;
