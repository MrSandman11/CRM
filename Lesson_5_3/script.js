'use strict';

const table = document.querySelector('.table__tbody');

const createRow = (obj) => {
  const newTrElem = document.createElement('tr');
  newTrElem.classList.add('table__tbody-tr');
  table.prepend(newTrElem);
  const values = Object.values(obj);
  for (const key of values) {
    const newTdElem = document.createElement('td');
    newTdElem.classList.add('table__tbody-td');
    newTdElem.textContent = key;
    newTrElem.append(newTdElem);
  }
};

const goods = [
  {
    'id': 253842678,
    'title': 'Смартфон Xiaomi 11T 8/128GB',
    'category': 'mobile-phone',
    'units': 'шт',
    'count': 3,
    'price': 27000,
    'total': 81000,
    'images': '',
    'edit': '',
    'delete': '',
  },
  {
    'id': 296378448,
    'title': 'Радиоуправляемый автомобиль Cheetan',
    'category': 'toys',
    'units': 'шт',
    'count': 1,
    'price': 4000,
    'total': 4000,
    'images': '',
    'edit': '',
    'delete': '',
  },
  {
    'id': 215796548,
    'title': 'ТВ приставка MECOOL KI',
    'category': 'tv-box',
    'units': 'шт',
    'count': 4,
    'price': 12400,
    'total': 49600,
    'images': '',
    'edit': '',
    'delete': '',
  },
  {
    'id': 246258248,
    'title': 'Витая пара PROConnect 01-0043-3-25',
    'category': 'cables',
    'units': 'v',
    'count': 420,
    'price': 22,
    'total': 9240,
    'images': '',
    'edit': '',
    'delete': '',
  },
];

const renderGoods = (arr) => {
  arr.map((item) => {
    createRow(item);
  });
};

renderGoods(goods);
