'use strict';

const generator = (count, n, m) => {
  const numbers = [];

  if (n > m) {
    const min = m;
    const max = n;

    for (let i = 0; i <count ; i++) {
      numbers[i] = Math.round(Math.random() * (max - min) + min);
    }
  } else {
    const min = n;
    const max = m;

    for (let i = 0; i <count ; i++) {
      numbers[i] = Math.round(Math.random() * (max - min) + min);
    }
  }

  for (let i = 0; i <count ; i++) {
    numbers[i] = Math.round(Math.random() * (max - min) + min);
  }

  return numbers;
};

console.log (generator(100, 15, -50));