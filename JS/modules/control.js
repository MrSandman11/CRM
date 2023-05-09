import createElements from './createElements.js';
const {
  // addGoodData,
  createRow,
} = createElements;

import loadData from './loadData.js';
const {
  fetchRequest,
} = loadData;

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

const modalErrorControl = (modalErrorOverlay) => {
  const openErrorModal = () =>
    modalErrorOverlay.classList.add('overlay-modal_error_active');

  openErrorModal();

  const closeErrorModal = () =>
    modalErrorOverlay.classList.remove('overlay-modal_error_active');

  modalErrorOverlay.addEventListener('click', e => {
    const target = e.target;
    if (target === modalErrorOverlay ||
      target.closest('.modal__close_error')) {
      closeErrorModal();
    }
  });
};

// const totalPriceUpdate = (arr, totalPriceValue) => {
//   let totalPrice = 0;
//   for (const good of arr) {
//     totalPrice +=
//       good.count * good.price - (good.count * good.price * good.discount / 100);
//   }
//   totalPriceValue.textContent = `$ ${totalPrice}`;
// };

// const deleteControl = (table, goods, totalPriceValue) => {
//   table.addEventListener('click', e => {
//     const target = e.target;
//     if (target.closest('.table__tbody-td_del')) {
//       const deletedTr = target.closest('.table__tbody-tr');
//       for (let i = goods.length; i--;) {
//         if (goods[i].id === Number(deletedTr.firstChild.textContent)) {
//           goods.splice(i, 1);
//         }
//       }
//       target.closest('.table__tbody-tr').remove();
//       totalPriceUpdate(goods, totalPriceValue);
//     }
//   });
// };

// const editIdControl = (table, goods) => {
//   table.addEventListener('click', e => {
//     const target = e.target;
//     const editedId = target.parentElement.firstChild;
//     if (target.closest('.table__tbody-td_edit')) {
//       let previousId;
//       for (let i = goods.length; i--;) {
//         if (goods[i].id === Number(editedId.textContent)) {
//           previousId = goods[i].id;
//         }
//       }
//       editedId.setAttribute('contenteditable', true);
//       editedId.style.color = 'red';
//       editedId.focus();
//       editedId.addEventListener('blur', () => {
//         editedId.style.color = '#25213B';
//         editedId.setAttribute('contenteditable', false);
//         for (let i = goods.length; i--;) {
//           if (goods[i].id === previousId) {
//             goods[i].id = Number(editedId.textContent);
//             console.log(goods);
//           }
//         }
//       });
//     }
//   });
// };

const picControl = (table) => {
  table.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.table__tbody-td_img')) {
      const picUrl = target.dataset.pic;
      const pic = open(picUrl, '', 'width=600, height=600');
      pic.moveTo(screen.width / 2 - 300, screen.height / 2 - 300);
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

const formControl = (form, closeModal, checkbox, modalErrorControl
    , modalErrorOverlay, errorText) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    // const formData = new FormData(e.target);
    // const newGood = Object.fromEntries(formData);
    const {title, category, units, discount, description, count, price} = form;

    if (!title.value || !category.value || !units.value ||
      !discount.value || !description.value || !count.value || !price.value) {
      alert('Заполните все поля');
    } else {
      const URL = 'https://violet-western-swordfish.glitch.me/api/goods';
      fetchRequest(URL, {
        method: 'POST',
        body: {
          title: form.title.value,
          body: form.description.value,
          price: form.price.value,
          category: form.category.value,
          count: form.count.value,
          discount: form.discount.value,
          units: form.units.value,
          description: form.description.value,
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
              form.reset();
              checkbox.toggleAttribute('checked');
              closeModal();
              createRow(data);
            }
          }
          // form.textContent = `Заявка успешно отправлена, номер заявки ${data.id}`;
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // createRow(newGood);
      // addGoodData(newGood);
      // totalPriceUpdate(goods, totalPriceValue);
      // form.reset();
      // checkbox.toggleAttribute('checked');
      // closeModal();
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
  modalErrorControl,
  // totalPriceUpdate,
  // deleteControl,
  // editIdControl,
  picControl,
  totalPriceFormUpdate,
  formControl,
  checkboxDiscountControl,
};
