(() => {
  const refs = {
    openModalBtn: document.querySelector('.menu-open'),
    modal: document.querySelector('.menu'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
