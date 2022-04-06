import React from 'react';
import PropTypes from 'prop-types';
import UIContent from '../UI/UIContent/UIContent';
import Button from '../../UI/Button/Button';

function ContentButtons({ config }) {
  return (
    <UIContent
      wrapperName={config.name}
      titleType={config.titleType}
      title={config.title}
    >
      <div className={config.wrapperButtonsClassName}>
        { config.data.map((item) => (
          <Button
            key={Math.random()}
            nameButton={item.nameButton}
            title={item.title !== undefined ? item.title : undefined}
            disabled={item.disabled}
            styleType={item.styleType}
            wrapperClassName={item.wrapperClassName}
            itemTitleClassName={config.itemTitleClassName || ''}
            prefix="section-ui"
          />
        ))}
      </div>
    </UIContent>
  );
}

ContentButtons.defaultProps = {
  config: {}
};

ContentButtons.propTypes = {
  config: PropTypes.shape({
    name: PropTypes.string,
    titleType: PropTypes.bool,
    title: PropTypes.string,
    data: PropTypes.instanceOf(Array),
    wrapperButtonsClassName: PropTypes.string,
    accWrapperClassName: PropTypes.string,
    itemTitleClassName: PropTypes.string,
    titleNameClassName: PropTypes.string,
    buttonClassName: PropTypes.string
  })
};

export default ContentButtons;
