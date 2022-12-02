'use strict';

const rectangle = {
  width: 5,
  height: 5,
  set widthSet(w) {
    if (typeof w === 'number') {
      if (!isNaN(w)) {
        this.width = w;
      }
    }
  },
  set heightSet(h) {
    if (typeof h === 'number') {
      if (!isNaN(h)) {
        this.height = h;
      }
    }
  },
  get perimeter() {
    const perimeter = 2 * this.width + 2 * this.height;
    const cm = 'см';
    return perimeter + cm;
  },
  get square() {
    const square = this.width * this.height;
    const cm = 'см';
    return square + cm;
  },
};

rectangle.widthSet = 10;
rectangle.heightSet = 14;
console.log(rectangle.perimeter);
console.log(rectangle.square);

