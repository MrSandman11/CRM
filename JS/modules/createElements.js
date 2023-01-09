import goods from './data.js';
import getRandomNum from './serviceFunc.js';

const addGoodData = newGood => {
  goods.push(newGood);
};

const createRow = (obj, table) => {
  const newTrElem = document.createElement('tr');
  newTrElem.classList.add('table__tbody-tr');
  table.prepend(newTrElem);

  const idTdElem = document.createElement('td');
  idTdElem.classList.add('table__tbody-td', 'table__tbody-td_id');
  if (obj.id) {
    idTdElem.textContent = obj.id;
    newTrElem.append(idTdElem);
  } else {
    obj.id = getRandomNum(1, 999999999);
    idTdElem.textContent = obj.id;
    newTrElem.append(idTdElem);
  }

  const nameTdElem = document.createElement('td');
  nameTdElem.classList.add('table__tbody-td', 'table__tbody-td_name');
  nameTdElem.textContent = obj.name;
  newTrElem.append(nameTdElem);

  const categoryTdElem = document.createElement('td');
  categoryTdElem.classList.add('table__tbody-td', 'table__tbody-td_category');
  categoryTdElem.textContent = obj.category;
  newTrElem.append(categoryTdElem);

  const unitsTdElem = document.createElement('td');
  unitsTdElem.classList.add('table__tbody-td', 'table__tbody-td_units');
  unitsTdElem.textContent = obj.units;
  newTrElem.append(unitsTdElem);

  const countTdElem = document.createElement('td');
  countTdElem.classList.add('table__tbody-td', 'table__tbody-td_count');
  countTdElem.textContent = obj.count;
  newTrElem.append(countTdElem);

  const priceTdElem = document.createElement('td');
  priceTdElem.classList.add('table__tbody-td', 'table__tbody-td_price');
  if (obj.discount) {
    obj.price -= obj.price * obj.discount / 100;
  }
  priceTdElem.textContent = obj.price;
  newTrElem.append(priceTdElem);

  const totalPriceTdElem = document.createElement('td');
  totalPriceTdElem.classList.add('table__tbody-td'
      , 'table__tbody-td_total-price');
  totalPriceTdElem.textContent = obj.price * obj.count;
  newTrElem.append(totalPriceTdElem);

  const imgTdElem = document.createElement('td');
  imgTdElem.classList.add('table__tbody-td', 'table__tbody-td_img');
  newTrElem.append(imgTdElem);

  const editTdElem = document.createElement('td');
  editTdElem.classList.add('table__tbody-td', 'table__tbody-td_edit');
  newTrElem.append(editTdElem);

  const delTdElem = document.createElement('td');
  delTdElem.classList.add('table__tbody-td', 'table__tbody-td_del');
  newTrElem.append(delTdElem);
};

const renderGoods = (arr, table) => {
  arr.map((item) => {
    createRow(item, table);
  });
};

export default {
  addGoodData,
  createRow,
  renderGoods,
};
