/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import PropTypes, { shape } from 'prop-types';

function HeaderFull({
  prefix,
  logo,
  Logotype,
  config
}) {
  return (
    <>
      <Logotype
        iconClassName="modal-logo"
        prefix={prefix || 'modal-information'}
        text={false}
        logo={logo}
      />
      <p className={`${prefix}__text min`}>{config.text}</p>
    </>
  );
}

HeaderFull.defaultProps = {
  prefix: '',
  logo: {},
  Logotype: null,
  config: {}
};

HeaderFull.propTypes = {
  prefix: PropTypes.string,
  logo: PropTypes.instanceOf(Object),
  Logotype: PropTypes.func,
  config: shape({
    text: PropTypes.string
  })
};

export default HeaderFull;
