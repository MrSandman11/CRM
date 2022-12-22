'use strict';

const income = +prompt('Введите ваш доход для расчета налога!');
let tax;

if (income < 15000) {
  tax = income * 0.13;
} else if (income <= 50000) {
  tax = income * 0.2;
} else {
  tax = income * 0.3;
}

console.log(tax);
