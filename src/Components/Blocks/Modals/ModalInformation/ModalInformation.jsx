import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../UI/Icon/Icon';
import Modal from '../../../UI/Modal/Modal';
import { logo, link } from '../../../Data/icons.config';
import Logotype from '../../../UI/Logotype/Logotype';
import HeaderFull from './HeaderFull/HeaderFull';
import ContentFull from './ContentFull/ContentFull';
import FooterFull from './FooterFull/FooterFull';
import { header, content, footer } from '../../../Data/modalInformation.config';
import './ModalInformation.scss';

/* Компонент: Modal Information */
/*
    Параметры:

    prefix - классовый префикс для элементов данного модального окна
*/
function ModalInformation({
  prefix,
  active,
  setActive
}) {
  return (
    <Modal
      prefix={prefix}
      headerFull={<HeaderFull prefix={prefix} logo={logo} Logotype={Logotype} config={header} />}
      contentFull={<ContentFull prefix={prefix} config={content} />}
      footerFull={<FooterFull prefix={prefix} link={link} Icon={Icon} config={footer} />}
      active={active}
      setActive={setActive}
    />
  );
}

ModalInformation.defaultProps = {
  prefix: 'modal-information'
};

ModalInformation.propTypes = {
  prefix: PropTypes.string,
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired
};

export default ModalInformation;
