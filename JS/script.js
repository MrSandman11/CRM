// import goods from './modules/data.js';
import getPageElements from './modules/pageElements.js';

import createElements from './modules/createElements.js';
const {
  renderGoods,
} = createElements;

import control from './modules/control.js';
const {
  modalControl,
  modalErrorControl,
  // totalPriceUpdate,
  // deleteControl,
  // editIdControl,
  picControl,
  totalPriceFormUpdate,
  formControl,
  checkboxDiscountControl,
} = control;

import loadData from './modules/loadData.js';
const {
  fetchRequest,
} = loadData;

{
  const init = () => {
    const {
      modalOverlay,
      modalErrorOverlay,
      errorText,
      table,
      addGoodBtn,
      // totalPriceValue,
      form,
      checkbox,
      discountInput,
    } = getPageElements();
    const URL = 'https://violet-western-swordfish.glitch.me/api/goods';
    fetchRequest(URL, {
      method: 'get',
      callback: renderGoods,
    });
    // renderGoods(goods, table);
    // totalPriceUpdate(goods, totalPriceValue);
    // deleteControl(table, goods, totalPriceValue);
    // editIdControl(table, goods);
    picControl(table);
    totalPriceFormUpdate(form);
    const {closeModal} = modalControl(modalOverlay, addGoodBtn);
    formControl(form, closeModal, checkbox, modalErrorControl, modalErrorOverlay
        , errorText);
    checkboxDiscountControl(checkbox, discountInput);
  };

  window.init = init;
}
