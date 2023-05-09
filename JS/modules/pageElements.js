const getPageElements = () => {
  const modalOverlay = document.querySelector('.overlay-modal');
  const modalErrorOverlay = document.querySelector('.overlay-modal_error');
  const errorText = document.querySelector('.modal__text_error');
  const table = document.querySelector('.table__tbody');
  const addGoodBtn = document.querySelector('.table__add-btn');
  const totalPriceValue =
    document.querySelector('.table__header-final-price_count');
  const form = document.querySelector('.form__box');
  const checkbox = document.querySelector('.form__checkbox-input');
  const discountInput = document.querySelector('.form__input-discount');

  return {
    modalOverlay,
    modalErrorOverlay,
    errorText,
    table,
    addGoodBtn,
    totalPriceValue,
    form,
    checkbox,
    discountInput,
  };
};

export default getPageElements;
