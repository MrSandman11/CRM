const getPageElements = () => {
  const modalOverlay = document.querySelector('.overlay-modal');
  const table = document.querySelector('.table__tbody');
  const addGoodBtn = document.querySelector('.table__add-btn');
  const totalPriceValue =
    document.querySelector('.table__header-final-price_count');
  const form = document.querySelector('.form__box');
  const checkbox = document.querySelector('.form__checkbox-input');
  const discountInput = document.querySelector('.form__input-discount');

  return {
    modalOverlay,
    table,
    addGoodBtn,
    totalPriceValue,
    form,
    checkbox,
    discountInput,
  };
};

export default getPageElements;
