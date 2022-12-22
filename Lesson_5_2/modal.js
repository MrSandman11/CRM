'use strict';

const activeModal = document.querySelector('.overlay-modal');

activeModal.classList.add('overlay-modal_active');

const modalTitle = document.querySelector('.modal .form__title');
// Что за кнопка возле id и сам id??? Не понятно где искать.
const form = document.querySelector('#modal');
const formDiscountCheckbox = document.querySelector('.form__checkbox');
const formDiscountDescr =
document.querySelector('.form__discount-input-wrapper .form__input');
const finalPrice = document.querySelector('.form__final-price_count');
