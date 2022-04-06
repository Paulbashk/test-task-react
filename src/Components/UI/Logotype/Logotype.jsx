import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import './Logotype.scss';
import classesPrefix from '../../../Utils/classesPrefix';

/* Компонент: Логотип */
/*
    Параметры:

    iconClassName - наименование модификатора иконки
    prefix - префикс классов
    text (Boolean) - будет ли виден текст
    logo - конфигурация (данные) для логотипа
    lastname - текст (Фамилия)
    other - текст (Имя Отчество)
*/
function Logotype({
  prefix,
  text,
  logo,
  iconClassName,
  lastname,
  other
}) {
  return (
    <div className={`logo${classesPrefix(prefix, 'logo')}`}>
      <div className={`logo__circle${classesPrefix(prefix, 'circle')}`}>
        <Icon
          iconClassName={iconClassName}
          prefix={prefix}
          paramPath={logo.paramPath}
          fillPath={logo.fillPath}
          width={logo.width}
          height={logo.height}
          viewBox={logo.viewBox}
          fill={logo.fill}
        />
      </div>
      { text
            && (
              <div className="logo__wrapper-text header__wrapper-text">
                {lastname && <p className="logo__lastname header__lastname min">{lastname}</p>}
                {other && <p className="logo__other header__other min">{other}</p>}
              </div>
            )}
    </div>
  );
}

Logotype.defaultProps = {
  prefix: '',
  text: true,
  logo: {},
  iconClassName: '',
  lastname: '',
  other: ''
};

Logotype.propTypes = {
  prefix: PropTypes.string,
  text: PropTypes.bool,
  logo: PropTypes.instanceOf(Object),
  iconClassName: PropTypes.string,
  lastname: PropTypes.string,
  other: PropTypes.string
};

export default Logotype;
