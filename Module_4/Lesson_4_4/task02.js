'use strict';

const format = text => {

  const lowerCase = text.toLowerCase();
  const result = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1)
  return result;
};


console.log('format("приВет МиР"): ', format("приВет МиР"));