'use strict';

const allCashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

const getAveragePriceGoods = (arr) => {
  const averagePriceGoods = [];

  for (let i = 0; i < arr.length; i++) {
    let [x , y] = arr[i];
    let z = y / x;
    averagePriceGoods.push(z);
  }

  return averagePriceGoods;
};

console.log (getAveragePriceGoods(allCashbox));