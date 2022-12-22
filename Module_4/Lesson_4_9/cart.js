'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,
  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    } if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
  },
  get totalPrice() {
    const totalPrice = this.calculateItemPrice();
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
    totPrice *= (100 - this.discount) * 0.01;
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

cart.setDiscount = 'METHED';
cart.add('headphones', 500, 2);
cart.add('iphone', 1500, 7);
cart.add('charge', 200, 20);
console.log('cart.totalPrice: ', cart.totalPrice);
// cart.clear();
// cart.print();
console.log(cart);
