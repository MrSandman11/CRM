'use strict';

const sumOfArr = arr => {
  const cloneArr = [...arr];
  const x = Math.round(Math.random() * 10);
  cloneArr.push(x);
  let sum = 0;
  arr.forEach(item => {
    sum += item;
  });
  if (sum < 50) {
    return sumOfArr(cloneArr);
  } else {
    return cloneArr;
  }
};

console.log(sumOfArr([1, 5, 8]));
