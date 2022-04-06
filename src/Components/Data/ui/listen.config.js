/* listen */

const selectOptions = [
  { value: 'Первый стул', label: 'Первый стул' },
  { value: 'Второй стул', label: 'Второй стул' },
  { value: 'Выбранный пункт', label: 'Выбранный пункт' },
  { value: 'Теорема Эскобара', label: 'Теорема Эскобара' }
];

const listen = {
  name: 'listen',
  titleType: true,
  title: 'Выпадающий список',
  description: 'Компонент состоит из текстового поля и выпадающей подсказки',
  wrapperSelectedClassName: 'section-ui__wrapper-selected',
  data: [
    {
      name: 'select1',
      placeholder: 'Выберите что-нибудь',
      options: selectOptions
    },
    {
      name: 'select2',
      placeholder: 'Выберите что-нибудь',
      options: selectOptions,
      selectClassName: 'select--hover'
    },
    {
      name: 'select3',
      placeholder: 'Выберите что-нибудь',
      wrapperTitle: 'Выберите что-нибудь',
      selectClassName: 'select--blue-4',
      options: selectOptions,
      defaultValue: selectOptions[2],
      menuIsOpen: true,
      autoFocus: false
    }
  ]
};

export default listen;
