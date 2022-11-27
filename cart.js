'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice() {
    return this.totalPrice;
  },
  add(name, price, qty = 1) {
    this.items.push({
      name,
      price,
      qty,
    });
    this.increaseCount(qty);
    this.calculateItemPrice();
  },
  increaseCount(qty) {
    this.count += qty;
  },
  calculateItemPrice() {
    this.totalPrice = 0;
    this.items.forEach(item => {
      this.totalPrice += item.price * item.qty;
    });
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log('totalPrice: ', this.totalPrice);
  },
};

cart.add('headphones', 500, 2);
cart.add('iphone', 1500, 7);
cart.add('charge', 200, 20);
// cart.clear();
cart.print();
console.log(cart);