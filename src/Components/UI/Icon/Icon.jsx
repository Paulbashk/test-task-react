import React from 'react';
import PropTypes from 'prop-types';
import './Icon.scss';
import classesPrefix from '../../../Utils/classesPrefix';

/* Компонент: Icon */
/*
    Параметры:

    iconClassName - класс для контейнера
    prefix - префикс классов
    paramPath - векторная информация для тега path
    fillPath - цвет вектора
    width - ширина
    height - высота
    viewBox - координаты
    fillSvg - фоновый цвет
*/
function Icon({
  iconClassName,
  prefix,
  paramPath,
  fillPath,
  width,
  height,
  viewBox,
  fillSvg
}) {
  const classes = iconClassName ? `icon icon--${iconClassName}${classesPrefix(prefix, 'icon')}` : `icon${classesPrefix(prefix, 'icon')}`;

  return (
    <i className={classes}>
      <svg className={`icon__svg${classesPrefix(prefix, 'svg')}`} width={width} height={height} fill={fillSvg} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
        <path className={`icon__path${classesPrefix(prefix, 'path')}`} fillRule="evenodd" clipRule="evenodd" d={paramPath} fill={fillPath} />
      </svg>
    </i>
  );
}

Icon.defaultProps = {
  iconClassName: '',
  prefix: '',
  paramPath: '',
  fillPath: 'white',
  width: '1px',
  height: '1px',
  viewBox: '',
  fillSvg: 'none'
};

Icon.propTypes = {
  iconClassName: PropTypes.string,
  prefix: PropTypes.string,
  paramPath: PropTypes.string,
  fillPath: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  fillSvg: PropTypes.string
};

export default Icon;
