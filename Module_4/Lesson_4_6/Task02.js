'use strict';

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = arr => {
  let n = 0;

  for (let i = 0; i < arr.length; i++) {
    n = n + arr[i];
  }

  const average = Math.floor( n / arr.length) ;

  return average;
};

console.log (getAverageValue(allCashbox));