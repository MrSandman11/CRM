'use strict';

const x = Math.round(Math.random() * 100);

console.log('x: ', x);

const answer = +prompt('Я загадал число от 0 до 100. Попробуй угадать');

const game = answer => {
  if (answer !== 0) {
    if (isNaN(answer)) {
      game(answer = +prompt('Введи число'));
    } else {
      if (answer > x) {
        game(answer = +prompt('Меньше!'));
      } else {
        if (answer < x) {
          game(answer = +prompt('Больше!'));
        } else {
          alert('Правильно!');
        }
      }
    }
  }
};

game(answer);
