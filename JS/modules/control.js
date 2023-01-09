import createElements from './createElements.js';
const {
  addGoodData,
  createRow,
} = createElements;

const modalControl = (modalOverlay, addGoodBtn) => {
  const openModal = () =>
    modalOverlay.classList.add('overlay-modal_active');

  const closeModal = () =>
    modalOverlay.classList.remove('overlay-modal_active');

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

const totalPriceUpdate = (arr, totalPriceValue) => {
  let totalPrice = 0;
  for (const good of arr) {
    totalPrice +=
      good.count * good.price - (good.count * good.price * good.discount / 100);
  }
  totalPriceValue.textContent = `$ ${totalPrice}`;
};

const deleteControl = (table, goods, totalPriceValue) => {
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
      totalPriceUpdate(goods, totalPriceValue);
    }
  });
};

const editIdControl = (table, goods) => {
  table.addEventListener('click', e => {
    const target = e.target;
    const editedId = target.parentElement.firstChild;
    if (target.closest('.table__tbody-td_edit')) {
      let previousId;
      for (let i = goods.length; i--;) {
        if (goods[i].id === Number(editedId.textContent)) {
          previousId = goods[i].id;
        }
      }
      editedId.setAttribute('contenteditable', true);
      editedId.style.color = 'red';
      editedId.focus();
      editedId.addEventListener('blur', () => {
        editedId.style.color = '#25213B';
        editedId.setAttribute('contenteditable', false);
        for (let i = goods.length; i--;) {
          if (goods[i].id === previousId) {
            goods[i].id = Number(editedId.textContent);
            console.log(goods);
          }
        }
      });
    }
  });
};

const totalPriceFormUpdate = (form) => {
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

const formControl = (closeModal, form, checkbox,
    table, goods, totalPriceValue) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newGood = Object.fromEntries(formData);
    const {name, category, units, discount, description, count, price} = form;

    if (!name.value || !category.value || !units.value ||
      !discount.value || !description.value || !count.value || !price.value) {
      alert('Заполните все поля');
    } else {
      createRow(newGood, table);
      addGoodData(newGood);
      totalPriceUpdate(goods, totalPriceValue);
      form.reset();
      checkbox.toggleAttribute('checked');
      closeModal();
    }
  });
};

const checkboxDiscountControl = (checkbox, discountInput) => {
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

export default {
  modalControl,
  totalPriceUpdate,
  deleteControl,
  editIdControl,
  totalPriceFormUpdate,
  formControl,
  checkboxDiscountControl,
};
