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

export default modalErrorControl;
