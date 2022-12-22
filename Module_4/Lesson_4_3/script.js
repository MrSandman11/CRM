'use strict';

// const name = 'Навигационная система Soundmax';
// const count = 5;
// const category = 'Home Appliances';
// const price = 100;

// console.log('name: ', name);

// const sum = price * count;
// console.log('sum: ', sum);

const name1 = prompt('Наименование товара?');
let count1 = +prompt('Количество товара?');
const category1 = prompt('Категория товара?');
let price1 = +prompt('Цена товара?');

const sum1 = price1 * count1;

if (Number.isNaN(count1) || Number.isNaN(price1)) {
  console.log("Вы ввели некорректные данные");
} else {
  console.log(`"На складе ${count1} единицы товара "${name1}" на сумму ${sum1} деревянных"`);
}



