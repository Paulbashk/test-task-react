/* Inputs */

const inputs = {
  name: 'inputs',
  titleType: false,
  title: 'Текстовое поле',
  wrapperInputsClassName: 'section-ui__wrapper-inputs',
  itemTitleClassName: 'section-ui__item-title section-ui__item-title--input',
  data: [
    {
      type: 'email',
      name: 'emailOne',
      placeholder: 'E-mail'
    },
    {
      type: 'email',
      name: 'emailTwo',
      title: 'Ховер',
      placeholder: 'E-mail',
      wrapperClassName: 'section-ui__wrapper-input--hover'
    },
    {
      type: 'email',
      name: 'emailThree',
      title: 'Ввод',
      label: 'E-mail',
      placeholder: 'E-mail',
      value: 'office@make.st',
      wrapperClassName: 'section-ui__wrapper-input--word'
    },
    {
      type: 'email',
      name: 'emailFour',
      title: 'Ошибка',
      label: 'E-mail',
      placeholder: 'E-mail',
      errorMessage: 'Текст ошибки',
      wrapperClassName: 'section-ui__wrapper-input--error'
    }
  ]
};

export default inputs;
