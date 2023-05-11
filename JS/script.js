import getPageElements from './modules/pageElements.js';
import showModal from './modules/modal.js';

import createElements from './modules/createElements.js';
const {
  renderGoods,
} = createElements;

import control from './modules/control.js';
const {
  modalControl,
  picControl,
} = control;

import fetchRequest from './modules/loadData.js';

{
  const init = () => {
    const {
      table,
      addGoodBtn,
    } = getPageElements();
    const URL = 'https://violet-western-swordfish.glitch.me/api/goods';
    fetchRequest(URL, {
      method: 'get',
      callback: renderGoods,
    });
    modalControl(addGoodBtn);
    table.addEventListener('click', async ({target}) => {
      if (target.classList.contains('table__tbody-td_edit')) {
        const id = target.parentElement.firstChild.textContent;
        const URL = 'https://violet-western-swordfish.glitch.me/api/goods';
        fetchRequest(`${URL}/${id}`, {
          callback: showModal,
        });
      }
    });
    picControl(table);
  };

  window.init = init;
}
