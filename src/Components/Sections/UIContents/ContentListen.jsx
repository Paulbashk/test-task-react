import React from 'react';
import PropTypes from 'prop-types';
import UIContent from '../UI/UIContent/UIContent';
import WrapperSelect from '../../UI/WrapperSelect/WrapperSelect';

function ContentListen({ config }) {
  return (
    <UIContent
      wrapperName={config.name}
      titleType={config.titleType}
      title={config.title}
      description={config.description}
    >
      <div className={config.wrapperSelectedClassName}>
        {config.data.map((item) => (
          <WrapperSelect
            key={item.name}
            name={item.name}
            placeholder={item.placeholder}
            wrapperTitle={item.wrapperTitle}
            options={item.options}
            defaultValue={item.defaultValue !== undefined ? item.defaultValue : undefined}
            menuIsOpen={item.menuIsOpen}
            autoFocus={item.autoFocus}
            wrapperSelectClassName={config.wrapperSelectClassName}
            selectClassName={item.selectClassName}
            prefix="section-ui"
          />
        ))}
      </div>
    </UIContent>
  );
}

ContentListen.defaultProps = {
  config: {}
};

ContentListen.propTypes = {
  config: PropTypes.shape({
    name: PropTypes.string,
    titleType: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
    data: PropTypes.instanceOf(Array),
    wrapperSelectedClassName: PropTypes.string,
    itemTitleClassName: PropTypes.string,
    wrapperSelectClassName: PropTypes.string,
    titleClassName: PropTypes.string
  })
};

export default ContentListen;
