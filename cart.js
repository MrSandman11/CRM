'use strict';

const cart = {
  items: [],
  count: 0,
  get totalPrice() {
    let totalPrice = this.calculateItemPrice();
    return totalPrice;
  },
  add(name, price, qty = 1) {
    this.items.push({
      name,
      price,
      qty,
    });
    this.increaseCount(qty);
  },
  increaseCount(qty) {
    this.count += qty;
  },
  calculateItemPrice() {
    let totPrice = 0;
    this.items.forEach(item => {
      totPrice += item.price * item.qty;
    });
    return totPrice;
  },
  clear() {
    this.items = [];
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
console.log('cart.totalPrice: ', cart.totalPrice);
// cart.clear();
cart.print();
console.log(cart);