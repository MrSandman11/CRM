'use strict';

const x = Math.round(Math.random() * 100);

console.log('x: ', x);
 
let answer = +prompt('Я загадал число от 0 до 100. Попробуй угадать');

while (answer !== 0) {
  if (isNaN(answer)) {
    answer = +prompt('Введи число');
  } else {
      if (answer > x) {
        answer = +prompt('Меньше!');
      } else {
          if (answer < x) {
          answer = +prompt('Больше!');
          } else {
              alert('Правильно!');
              break;
          }
      }
  }
};
