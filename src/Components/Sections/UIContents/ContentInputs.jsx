import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UIContent from '../UI/UIContent/UIContent';
import Input from '../../UI/Input/Input';

function ContentInputs({ config }) {
  const inputs = {};
  config.data.map((item) => {
    inputs[item.name] = item.value !== undefined ? item.value : '';
    return true;
  });

  const [input, setInput] = useState(inputs);

  return (
    <UIContent
      wrapperName={config.name}
      titleType={config.titleType}
      title={config.title}
    >
      <div className={config.wrapperInputsClassName}>
        {config.data.map((item) => (
          <Input
            key={item.name}
            typeInput={item.type}
            nameInput={item.name}
            title={item.title !== undefined ? item.title : undefined}
            placeholder={item.placeholder}
            label={item.label !== undefined ? item.label : ''}
            value={input}
            errorMessage={item.errorMessage !== undefined ? item.errorMessage : undefined}
            setValue={setInput}
            wrapperClassName={item.wrapperClassName}
            itemTitleClassName={config.itemTitleClassName}
            prefix="section-ui"
          />
        ))}
      </div>
    </UIContent>
  );
}

ContentInputs.defaultProps = {
  config: {}
};

ContentInputs.propTypes = {
  config: PropTypes.shape({
    name: PropTypes.string,
    titleType: PropTypes.bool,
    title: PropTypes.string,
    data: PropTypes.instanceOf(Array),
    wrapperInputsClassName: PropTypes.string,
    itemTitleClassName: PropTypes.string
  })
};

export default ContentInputs;
