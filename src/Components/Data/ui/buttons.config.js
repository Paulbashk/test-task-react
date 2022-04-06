/* buttons */

const buttons = {
  name: 'buttons',
  titleType: false,
  title: 'Кнопка',
  wrapperButtonsClassName: 'section-ui__wrapper-buttons',
  itemTitleClassName: 'section-ui__item-title--button',
  data: [
    {
      nameButton: 'Отправить',
      disabled: false,
      styleType: 'gradient'
    },
    {
      nameButton: 'Отправить',
      title: 'Ховер',
      disabled: false,
      styleType: 'gradient',
      wrapperClassName: 'section-ui__wrapper-btn--hover'
    },
    {
      nameButton: 'Отправить',
      title: 'Нажатие',
      disabled: false,
      styleType: 'gradient',
      wrapperClassName: 'section-ui__wrapper-btn--click'
    },
    {
      nameButton: 'Отправить',
      title: 'Неактивна',
      disabled: true,
      styleType: 'gradient'
    },
  ]
};

export default buttons;
