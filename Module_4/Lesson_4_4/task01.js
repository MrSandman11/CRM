'use strict';

const converter = euro => {
  const kursDollar = 73;
  const kursEuro = 1.2 * kursDollar;

  const result = euro * kursEuro;
  return result;
};

console.log('converter(2.65);: ', converter(2.65));
