import React from 'react';
import PropTypes from 'prop-types';

function FooterFull({
  prefix, link, Icon, config
}) {
  return (
    <>
      <a href={config.link.href} className={`${prefix}__circle ${prefix}__circle--footer`}>
        <Icon
          iconClassName="link"
          prefix={prefix || 'modal-information'}
          paramPath={link.paramPath}
          fillPath={link.fillPath}
          width={link.width}
          height={link.height}
          viewBox={link.viewBox}
          fill={link.fill}
        />
      </a>
      <a href={config.link.href} className={`${prefix}__social-link`}>{config.link.name}</a>
    </>
  );
}

FooterFull.defaultProps = {
  prefix: '',
  link: '',
  Icon: null,
  config: {}
};

FooterFull.propTypes = {
  prefix: PropTypes.string,
  config: PropTypes.shape({
    link: PropTypes.shape({
      href: PropTypes.string.isRequired,
      name: PropTypes.string
    })
  }),
  link: PropTypes.shape({
    paramPath: PropTypes.string.isRequired,
    fillPath: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    viewBox: PropTypes.string.isRequired,
    fill: PropTypes.string.isRequired
  }),
  Icon: PropTypes.func
};

export default FooterFull;
