'use strict';

const generator = (count) => {
  const numbers = [];

  for (let i = 0; i <count ; i++) {
    numbers[i] = Math.round(Math.random() * 100);
  }

  return numbers;
};

console.log (generator(100));