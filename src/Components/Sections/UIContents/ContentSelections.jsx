import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UIContent from '../UI/UIContent/UIContent';
import Checkbox from '../../UI/Checkbox/Checkbox';
import Radio from '../../UI/Radio/Radio';

function ContentSelections({ config }) {
  const checkboxes = {};
  config.checkboxes.data.map((item) => {
    checkboxes[item.name] = item.checked;
    return true;
  });

  const [radio, setRadio] = useState(config.radioes.checked);
  const [checked, setChecked] = useState(checkboxes);

  return (
    <UIContent
      wrapperName={config.name}
      titleType={config.titleType}
      title={config.title}
    >
      <div className={config.wrapperGridClassName}>
        <div className={config.wrapperCheckboxesClassName}>
          { config.checkboxes.data.map((item) => (
            <Checkbox
              key={item.name}
              value={item.value}
              name={item.name}
              title={item.title}
              checked={checked}
              setChecked={setChecked}
              wrapperClassName={item.wrapperClassName || ''}
              prefix="section-ui"
            />
          ))}
        </div>
        <div className={config.wrapperRadioesClassName}>
          {config.radioes.data.map((item) => (
            <Radio
              key={item.name}
              data={config.radioes.name}
              name={item.name}
              title={item.title}
              startValue={item.name}
              value={radio}
              setValue={setRadio}
              labelClassName={item.labelClassName || ''}
              prefix="section-ui"
            />
          ))}
        </div>
      </div>
    </UIContent>
  );
}

ContentSelections.defaultProps = {
  config: {}
};

ContentSelections.propTypes = {
  config: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    titleType: PropTypes.bool,
    wrapperGridClassName: PropTypes.string,
    wrapperCheckboxesClassName: PropTypes.string,
    wrapperRadioesClassName: PropTypes.string,
    checkboxes: PropTypes.shape({
      data: PropTypes.instanceOf(Array),
      checkboxClassName: PropTypes.string,
      labelClassName: PropTypes.string
    }),
    radioes: PropTypes.shape({
      data: PropTypes.instanceOf(Array),
      checked: PropTypes.string,
      name: PropTypes.string,
      labelClassName: PropTypes.string
    })
  })
};

export default ContentSelections;
