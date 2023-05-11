import loadStyle from './loadStyle.js';
import fetchRequest from './loadData.js';

import modalErrorControl from './modalError.js';

import getPageElements from './pageElements.js';
const {
  modalErrorOverlay,
  errorText,
} = getPageElements();

import createElements from './createElements.js';
const {
  createRow,
} = createElements;

const showModal = async (err, data) => {
  await loadStyle('css/modal.css');

  const overlay = document.createElement('div');
  const modalWindow = document.createElement('div');
  const modalContainer = document.createElement('div');
  const form = document.createElement('form');
  const close = document.createElement('button');

  overlay.classList.add('overlay-modal', 'overlay-modal_active');
  modalWindow.classList.add('modal');
  modalContainer.classList.add('modal__container');
  form.classList.add('form__box');
  form.id = 'form__box';
  close.classList.add('modal__close');
  close.innerHTML = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L22 22" stroke="#6E6893" stroke-width="3" stroke-linecap="round"/>
    <path d="M2 22L22 2" stroke="#6E6893" stroke-width="3" stroke-linecap="round"/>
  </svg>
  `;

  overlay.append(modalWindow);
  modalWindow.append(modalContainer);
  modalContainer.append(form);
  form.append(close);
  form.insertAdjacentHTML('beforeend', `
  <fieldset class="form__fieldset">

    <legend class="form__title">Добавить ТОВАР</legend>

    <div class="form__line"></div>

    <div class="form__inner-box">
      <div class="form__name">
        <label class="form__label" for="title">Наименование</label>
        <input 
            class="form__input" 
            id="title"
            type="text" 
            name="title">  
      </div>

      <div class="form__category">
        <label class="form__label" for="category">Категория</label>
        <input 
            class="form__input" 
            id="category"
            type="text" 
            name="category">
      </div>

      <div class="form__units">
        <label class="form__label" for="units">Единицы измерения</label>
        <input 
            class="form__input" 
            id="units"
            type="text"
            name="units">
      </div>

      <fieldset class="form__discount-wrapper">
        <legend class="form__label">Дисконт</legend>

        <div class="form__discount-input-wrapper">
          <label class="form__checkbox">
            <input 
              class="form__checkbox-input" 
              type="checkbox"
              name="discountCheckbox"
              value="yes">
          </label>

            <input 
              class="form__input form__input-discount" 
              type="number"
              name="discount"
              disabled>
        </div>
      </fieldset>

      <div class="form__descr">
        <label class="form__label" for="descr">Описание</label>
        <textarea 
            class="form__textarea" 
            id="descr"
            name="description"
            type="text">
        </textarea>
      </div>

      <div class="form__count">
        <label class="form__label" for="count">Количество</label>
        <input 
            class="form__input" 
            id="count"
            type="number"
            name="count">
      </div>

      <div class="form__price">
        <div class="form__label_price">
          <label class="form__label" for="price">Цена</label>
          <input 
              class="form__input" 
              id="price"
              type="number"
              name="price">
        </div>
        <button type="button" class="form__image-btn" onclick="file.click()">Добавить изображение</button>
        <input 
          id="file"
          class="form__image-input" 
          type="file"
          name="img">
      </div>
    </div>
  </fieldset>

  <div class="form__under-wrapper">
    <p class="form__final-price">Итоговая стоимость: <span class="form__final-price_count">$ 0</span></p>

    <button 
      type="submit"
      form="form__box"
      class="form__button" 
      formtarget="_blank">
      Добавить товар
    </button>
  </div>
  `);

  document.body.append(overlay);

  const {title, category, units, count, description, price,
    discount, discountCheckbox} = form;
  const totalPriceForm = document.querySelector('.form__final-price_count');

  if (data) {
    title.value = data.title;
    category.value = data.category;
    count.value = data.count;
    description.value = data.description;
    if (data.discount > 0) {
      discountCheckbox.checked = true;
      discount.disabled = false;
      discount.value = data.discount;
    }
    price.value = data.price;
    units.value = data.units;
    totalPriceForm.textContent =
      `$ ${count.value * price.value -
      (count.value * price.value * discount.value / 100)}`;
  }

  return new Promise(resolve => {
    discountCheckbox.addEventListener('change', () => {
      discountCheckbox.toggleAttribute('checked');
      if (discountCheckbox.checked) {
        discount.disabled = false;
      } else {
        discount.disabled = true;
        discount.value = '';
      }
    });

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

    overlay.addEventListener('click', e => {
      const target = e.target;
      if (target === overlay ||
        target.closest('.modal__close')) {
        overlay.remove();
        resolve(console.log('Модальное окно закрыто'));
      }
    });

    form.addEventListener('submit', e => {
      e.preventDefault();

      if (!title.value || !category.value || !units.value ||
        !discount.value || !description.value ||
        !count.value || !price.value) {
        alert('Заполните все поля');
      } else {
        const URL = 'https://violet-western-swordfish.glitch.me/api/goods';
        fetchRequest(URL, {
          method: 'POST',
          body: {
            title: title.value,
            body: description.value,
            price: price.value,
            category: category.value,
            count: count.value,
            discount: discount.value,
            units: units.value,
            description: description.value,
          },
          callback(err, data, response) {
            if (err) {
              console.warn(err, data);
              console.log(err.message);
              if (err.message !== '') {
                errorText.textContent = err;
              } else {
                errorText.textContent = 'Что-то пошло не так';
              }
              modalErrorControl(modalErrorOverlay);
            } else {
              if (response.status === 200 || response.status === 201) {
                console.log(response.status);
                overlay.remove();
                createRow(data);
                resolve('Данные отправлены на сервер');
              }
            }
          },
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }
    });
  });
};

export default showModal;
