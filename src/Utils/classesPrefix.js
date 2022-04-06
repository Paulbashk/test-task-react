/* Функция генерации строки блока и элемента (по БЭМ) в новый класс */
/*
    Принимает:
      prefix - блок в БЭМ
      className - элемент

    Возвращает строку (класс) блок + модификатор
*/
const classesPrefix = (prefix = '', className = '') => (prefix ? ` ${prefix}__${className}` : '');

export default classesPrefix;
