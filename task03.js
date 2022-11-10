'use strict';

const calculate = (sum, amount, promo) => {
  let totalPrice = sum;

  if (amount > 10) {
    totalPrice = totalPrice * 0.97;
  } if (totalPrice > 30000) {
    totalPrice = (totalPrice - 30000) * 0.85 + 30000;
  } if (promo === "METHED") {
    totalPrice = totalPrice * 0.9;
  } if (promo === "G3H2Z1" && totalPrice > 2000) {
    totalPrice = totalPrice - 500;
  }

  return totalPrice;
};

console.log (calculate(50000, 9, 'G3H2Z1'));
