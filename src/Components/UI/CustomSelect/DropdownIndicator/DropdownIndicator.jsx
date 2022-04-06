import React from 'react';
import { components } from 'react-select';
import Icon from '../../Icon/Icon';
import { arrow } from '../../../Data/icons.config';

function DropdownIndicator(props) {
  return (
    components.DropdownIndicator && (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <components.DropdownIndicator {...props}>
        <Icon
          iconClassName="arrow"
          prefix="select"
          paramPath={arrow.paramPath}
          fillPath={arrow.fillPath}
          width={arrow.width}
          height={arrow.height}
          viewBox={arrow.viewBox}
          fill={arrow.fill}
        />
      </components.DropdownIndicator>
    )
  );
}

export default DropdownIndicator;
