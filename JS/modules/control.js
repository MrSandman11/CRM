import showModal from './modal.js';

const modalControl = (addGoodBtn) => {
  addGoodBtn.addEventListener('click', showModal);
};

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

export default {
  modalControl,
  picControl,
};
