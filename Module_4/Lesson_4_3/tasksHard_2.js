'use strict';

const income2 = +prompt('Введите ваш доход для расчета налога!');
let tax2;

if (income2 < 15000) {
  tax2 = income2 * 0.13;
} else if (income2 <= 50000) {
  tax2 = (income2 - 15000) * 0.2 + 1950;
} else {
  tax2 = (income2 - 50000) * 0.3 + 7000 + 1950;
}

console.log(tax2);