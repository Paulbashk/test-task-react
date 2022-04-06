import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-animated-css';
import classesPrefix from '../../../Utils/classesPrefix';
import Icon from '../Icon/Icon';
import { close } from '../../Data/icons.config';
import './Modal.scss';

/* Компонент: Модальное окно */
/*
    Параметры:

    prefix - префикс классов
    gridContainer (Boolean)
        true: все элементы (children), при этом, обертка window будет находится вне грид-контейнера
        false: все элементы, принимаемые пропсом (children), будут размещены в обертке window
    header (Boolean) - вкл. обертку header (работает, если gridContainer = true)
    content (Boolean) - вкл. обертку content (работает, если gridContainer = true)
    footer (Boolean) - вкл. обертку footer (работает, если gridContainer = true)
    children - дочерние элементы компоненты
        - Если gridContainer = true, элементы будут размещены ниже header, content, footer
        - Если gridContainer = false, элементы будут размещены в обертке window
    headerFull - принимает элементы. Элементы попадут в обертку header
    contentFull - принимает элементы. Элементы попадут в обертку content
    footerFull - принимает элементы. Элементы попадут в обертку footer
    closeIcon - принимает логотипа. Если параметр не задан, будет выставлена иконка по умолчанию
    active - состояние модального окна
    setActive - функция для манипуляции состоянием модального окна
*/
function Modal({
  prefix,
  gridContainer,
  header,
  content,
  footer,
  children,
  headerFull,
  contentFull,
  footerFull,
  closeIcon,
  active,
  setActive
}) {
  const classes = prefix ? `modal ${prefix}${active ? ` modal--active ${prefix}--active` : ` modal--disabled ${prefix}--disabled`}` : `modal ${active ? ' modal--active' : ' modal--disabled'}`;

  return (
    <Animated className={classes} animationIn="fadeIn" animationOut="fadeOut" animationInDuration={400} animationOutDuration={400} isVisible={active}>
      <div className={`modal__overlay${classesPrefix(prefix, 'overlay')}`} onClick={() => setActive(!active)} aria-hidden="true" />
      <div className={`modal__window${classesPrefix(prefix, 'window')}`}>
        { !gridContainer
                    && ([
                      <div className={`modal__close${classesPrefix(prefix, 'close')}`} onClick={() => setActive(!active)} aria-hidden="true">
                        { closeIcon || (
                          <Icon
                            iconClassName="close"
                            prefix={prefix || 'modal'}
                            paramPath={close.paramPath}
                            fillPath={close.fillPath}
                            width={close.width}
                            height={close.height}
                            viewBox={close.viewBox}
                            fill={close.fill}
                          />
                        )}
                      </div>,
                      children])}
      </div>
      {gridContainer && (
        <div className={`grid modal__grid${classesPrefix(prefix, 'grid')}`}>
          <div className={`grid__wrapper modal__wrapper${classesPrefix(prefix, 'wrapper')}`}>
            <div className={`modal__close${classesPrefix(prefix, 'close')}`} onClick={() => setActive(!active)} aria-hidden="true">
              <Icon
                iconClassName="close"
                prefix={prefix || 'modal'}
                paramPath={close.paramPath}
                fillPath={close.fillPath}
                width={close.width}
                height={close.height}
                viewBox={close.viewBox}
                fill={close.fill}
              />
            </div>
            { header
                    && (
                      <div className={`modal__header${classesPrefix(prefix, 'header')}`}>
                        {headerFull}
                      </div>
                    )}
            { content
                    && (
                      <div className={`modal__content${classesPrefix(prefix, 'content')}`}>
                        {contentFull}
                      </div>
                    )}
            { footer
                    && (
                      <div className={`modal__footer${classesPrefix(prefix, 'footer')}`}>
                        {footerFull}
                      </div>
                    )}
            {children}
          </div>
        </div>
      ) }
    </Animated>
  );
}

Modal.defaultProps = {
  prefix: '',
  gridContainer: true,
  header: true,
  content: true,
  footer: true,
  children: null,
  headerFull: null,
  contentFull: null,
  footerFull: null,
  closeIcon: null,
  active: false,
  setActive: null
};

Modal.propTypes = {
  prefix: PropTypes.string,
  gridContainer: PropTypes.bool,
  header: PropTypes.bool,
  content: PropTypes.bool,
  footer: PropTypes.bool,
  children: PropTypes.node,
  headerFull: PropTypes.node,
  contentFull: PropTypes.node,
  footerFull: PropTypes.node,
  closeIcon: PropTypes.node,
  active: PropTypes.bool,
  setActive: PropTypes.func
};

export default Modal;
