'use strict';

const generator = (count, n, m, parity) => {
  const numbers = [];

  switch (parity) {
    case 'even':
      if (n > m) {
        const min = m;
        const max = n;
    
        for (let i = 0; i <count ; i++) {
          do {
            numbers[i] = Math.round(Math.random() * (max - min) + min);
          }
          while (numbers[i] % 2 === 0)
        }
      } else {
        const min = n;
        const max = m;
    
        for (let i = 0; i <count ; i++) {
          do {
            numbers[i] = Math.round(Math.random() * (max - min) + min);
          }
          while (numbers[i] % 2 === 0)
        }
      }

    break;

    case 'odd':
      if (n > m) {
        const min = m;
        const max = n;
    
        for (let i = 0; i <count ; i++) {
          do {
            numbers[i] = Math.round(Math.random() * (max - min) + min);
          }
          while (!(numbers[i] % 2 === 0))
        }
      } else {
        const min = n;
        const max = m;
    
        for (let i = 0; i <count ; i++) {
          do {
            numbers[i] = Math.round(Math.random() * (max - min) + min);
          }
          while (!(numbers[i] % 2 === 0))
        }
      }

    break;

    default:
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
    break;
  }
  
  return numbers;
};

console.log (generator(100, 15, -50, 'odd'));