'use strict';

const goods = [
  {
    'id': 253842678,
    'name': 'Смартфон Xiaomi 11T 8/128GB',
    'category': 'mobile-phone',
    'units': 'шт',
    'discount': 0,
    'count': 3,
    'price': 27000,
  },
  {
    'id': 296378448,
    'name': 'Радиоуправляемый автомобиль Cheetan',
    'category': 'toys',
    'units': 'шт',
    'discount': 0,
    'count': 1,
    'price': 4000,
  },
  {
    'id': 215796548,
    'name': 'ТВ приставка MECOOL KI',
    'category': 'tv-box',
    'units': 'шт',
    'discount': 0,
    'count': 4,
    'price': 12400,
  },
  {
    'id': 246258248,
    'name': 'Витая пара PROConnect 01-0043-3-25',
    'category': 'cables',
    'units': 'v',
    'discount': 0,
    'count': 420,
    'price': 22,
  },
];

const addGoodData = newGood => {
  goods.push(newGood);
};

const modalOverlay = document.querySelector('.overlay-modal');
const table = document.querySelector('.table__tbody');
const addGoodBtn = document.querySelector('.table__add-btn');
const totalPriceValue =
  document.querySelector('.table__header-final-price_count');
const form = document.querySelector('.form__box');
const checkbox = document.querySelector('.form__checkbox-input');
const discountInput = document.querySelector('.form__input-discount');

const getRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const modalControl = () => {
  const openModal = () => {
    modalOverlay.classList.add('overlay-modal_active');
  };

  const closeModal = () => {
    modalOverlay.classList.remove('overlay-modal_active');
  };

  addGoodBtn.addEventListener('click', openModal);

  modalOverlay.addEventListener('click', e => {
    const target = e.target;
    if (target === modalOverlay ||
      target.closest('.modal__close')) {
      closeModal();
    }
  });

  return {
    closeModal,
  };
};

const createRow = (obj) => {
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

const renderGoods = (arr) => {
  arr.map((item) => {
    createRow(item);
  });
};

renderGoods(goods);

const totalPriceUpdate = arr => {
  let totalPrice = 0;
  for (const good of arr) {
    totalPrice +=
      good.count * good.price - (good.count * good.price * good.discount / 100);
  }
  totalPriceValue.textContent = `$ ${totalPrice}`;
};

totalPriceUpdate(goods);

const deleteControl = () => {
  table.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.table__tbody-td_del')) {
      const deletedTr = target.closest('.table__tbody-tr');
      for (let i = goods.length; i--;) {
        if (goods[i].id === Number(deletedTr.firstChild.textContent)) {
          goods.splice(i, 1);
        }
      }
      target.closest('.table__tbody-tr').remove();
      totalPriceUpdate(goods);
    }
  });
};

deleteControl();

const totalPriceFormUpdate = () => {
  const totalPriceForm = document.querySelector('.form__final-price_count');
  const {count, price, discount} = form;
  form.addEventListener('focusout', e => {
    const target = e.target;
    if (target.name === 'count' ||
      target.name === 'price' ||
      target.name === 'discount') {
      totalPriceForm.textContent =
        `$ ${count.value * price.value -
        (count.value * price.value * discount.value / 100)}`;
    }
  });
};

totalPriceFormUpdate();

const formControl = (closeModal) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newGood = Object.fromEntries(formData);
    createRow(newGood);
    addGoodData(newGood);
    totalPriceUpdate(goods);
    form.reset();
    checkbox.toggleAttribute('checked');
    closeModal();
  });
};

const {closeModal} = modalControl();

formControl(closeModal);

const checkboxDiscountControl = () => {
  checkbox.addEventListener('change', () => {
    checkbox.toggleAttribute('checked');
    if (checkbox.checked) {
      discountInput.disabled = false;
    } else {
      discountInput.disabled = true;
      discountInput.value = '';
    }
  });
};

checkboxDiscountControl();
