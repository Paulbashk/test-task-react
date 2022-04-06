import React from 'react';
import PropTypes from 'prop-types';

function ContentFull({ prefix, config }) {
  return (
    <>
      <h2 className={`${prefix}__title`}>
        {config.lastname}
        <br />
        {config.other}
      </h2>
      ,
      <p className={`${prefix}__description`}>
        {config.description}
      </p>
      ,
      <a href={config.link.href} className={`${prefix}__phone-link`}>{config.link.name}</a>
    </>
  );
}

ContentFull.defaultProps = {
  prefix: '',
  config: {}
};

ContentFull.propTypes = {
  prefix: PropTypes.string,
  config: PropTypes.shape({
    lastname: PropTypes.string,
    other: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.shape({
      href: PropTypes.string,
      name: PropTypes.string
    })
  })
};

export default ContentFull;
