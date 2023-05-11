import getRandomNum from './serviceFunc.js';
import getPageElements from './pageElements.js';

const createRow = (obj) => {
  const {
    table,
  } = getPageElements();
  const newTrElem = document.createElement('tr');
  newTrElem.classList.add('table__tbody-tr');
  table.append(newTrElem);

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
  nameTdElem.textContent = obj.title;
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
  let price;
  if (obj.discount) {
    price = Math.round(obj.price - (obj.price * obj.discount / 100));
    priceTdElem.textContent = price;
  } else {
    price = obj.price;
    priceTdElem.textContent = price;
  }
  newTrElem.append(priceTdElem);

  const totalPriceTdElem = document.createElement('td');
  totalPriceTdElem.classList.add('table__tbody-td'
      , 'table__tbody-td_total-price');
  totalPriceTdElem.textContent = Math.round(price * obj.count);
  newTrElem.append(totalPriceTdElem);

  const imgTdElem = document.createElement('td');
  imgTdElem.classList.add('table__tbody-td', 'table__tbody-td_img');
  imgTdElem.dataset.pic = 'https://media.lpgenerator.ru/uploads/2015/10/03/image28.jpg';
  newTrElem.append(imgTdElem);

  const editTdElem = document.createElement('td');
  editTdElem.classList.add('table__tbody-td', 'table__tbody-td_edit');
  newTrElem.append(editTdElem);

  const delTdElem = document.createElement('td');
  delTdElem.classList.add('table__tbody-td', 'table__tbody-td_del');
  newTrElem.append(delTdElem);
};

const renderGoods = (err, data) => {
  if (err) {
    console.warn(err, data);
    const h2 = document.createElement('h2');
    h2.style.color = 'red';
    h2.textContent = err;
    document.body.prepend(h2);
    return;
  }
  data.map((item) => {
    createRow(item);
  });
};

export default {
  createRow,
  renderGoods,
};
