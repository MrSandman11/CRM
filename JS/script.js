import goods from './modules/data.js';
import getPageElements from './modules/pageElements.js';

import createElements from './modules/createElements.js';
const {
  renderGoods,
} = createElements;

import control from './modules/control.js';
const {
  modalControl,
  totalPriceUpdate,
  deleteControl,
  editIdControl,
  totalPriceFormUpdate,
  formControl,
  checkboxDiscountControl,
} = control;

{
  const init = () => {
    const {
      modalOverlay,
      table,
      addGoodBtn,
      totalPriceValue,
      form,
      checkbox,
      discountInput,
    } = getPageElements();
    renderGoods(goods, table);
    totalPriceUpdate(goods, totalPriceValue);
    deleteControl(table, goods, totalPriceValue);
    editIdControl(table, goods);
    totalPriceFormUpdate(form);
    const {closeModal} = modalControl(modalOverlay, addGoodBtn);
    formControl(closeModal, form, checkbox,
        table, goods, modalOverlay, totalPriceValue);
    checkboxDiscountControl(checkbox, discountInput);
  };

  window.init = init;
}
