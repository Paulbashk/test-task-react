/* Секция Grid */
import imagePicDesktop from '../../Images/pic_desctop.jpg';
import iamgePicTab from '../../Images/pic_tab.jpg';
import iamgePicMob from '../../Images/pic_mob.jpg';

const grid = {
  classesNameSection: 'section-grid',
  title: 'Сетка',
  desc: 'Задание предполагает адаптивную вёрстку. Используется 3 состояния в зависимости от устройства. Сетка «резиновая» — переменной ширины.',
  rules: [
    {
      title: 'Десктоп (1200+)',
      img: imagePicDesktop,
      imgAlt: 'Десктоп (1200+)',
      designations: [
        {
          name: 'Контент',
          number: '1072–1312'
        },
        {
          name: 'Колонок',
          number: '12'
        },
        {
          name: 'Ширина колонки',
          number: '60-80'
        },
        {
          name: 'Межколонник',
          number: '32'
        }
      ]
    },
    {
      title: 'Планшет (736+)',
      img: iamgePicTab,
      imgAlt: 'Планшет (736+)',
      designations: [
        {
          name: 'Контент',
          number: '672–928'
        },
        {
          name: 'Колонок',
          number: '8'
        },
        {
          name: 'Ширина колонки',
          number: '56-88'
        },
        {
          name: 'Межколонник',
          number: '32'
        }
      ]
    },
    {
      title: 'Телефон (320+)',
      img: iamgePicMob,
      imgAlt: 'Телефон (320+)',
      designations: [
        {
          name: 'Контент',
          number: '296–424'
        },
        {
          name: 'Колонок',
          number: '4'
        },
        {
          name: 'Ширина колонки',
          number: '56-88'
        },
        {
          name: 'Межколонник',
          number: '24'
        }
      ]
    }
  ]
};

export default grid;
