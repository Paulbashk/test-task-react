import React from 'react';
import PropTypes from 'prop-types';
import UIContent from '../UI/UIContent/UIContent';
import Accordeon from '../../UI/Accordeon/Accordeon';

function ContentAccordeon({ config }) {
  return (
    <UIContent
      wrapperName={config.name}
      titleType={config.titleType}
      title={config.title}
    >
      <Accordeon
        data={config.data}
        firstElement={2}
        accWrapperClassName={config.accWrapperClassName}
        prefix="section-ui"
      />
    </UIContent>
  );
}

ContentAccordeon.defaultProps = {
  config: {}
};

ContentAccordeon.propTypes = {
  config: PropTypes.shape({
    name: PropTypes.string,
    titleType: PropTypes.bool,
    title: PropTypes.string,
    data: PropTypes.instanceOf(Array),
    accWrapperClassName: PropTypes.string,
    accItemClassName: PropTypes.string,
    accNameClassName: PropTypes.string,
    accContentClassName: PropTypes.string,
    accTextClassName: PropTypes.string
  })
};

export default ContentAccordeon;
