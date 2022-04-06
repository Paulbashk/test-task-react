/* Функция проверки наличия значения в строке или объекте */
/*
    Возвращает Boolean значение в зависимости от пустоты объекта
*/
const isEmpty = (value) => value !== null || (Object.keys(value) || value).length;

export default isEmpty;
