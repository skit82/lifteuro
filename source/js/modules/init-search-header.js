const initSearchHeader = () => {
  const buttonShow = document.querySelector('.search-header__button-show');
  const buttonClose = document.querySelector('.search-header__button-close');
  const headerForm = document.querySelector('.search-header__form');

  if (buttonShow && headerForm) {
    buttonShow.addEventListener('click', function (e) {
      headerForm.classList.add('show');
    });
  }

  if (buttonClose) {
    buttonClose.addEventListener('click', function (e) {
      headerForm.classList.remove('show');
    });
  }

  if (headerForm) {
    window.addEventListener('click', function (e) {
      if (!e.target.closest('.search-header__button-show') && !e.target.closest('.search-header__form') && headerForm.classList.contains('show')) {
        headerForm.classList.remove('show');
      }
    });
  }
};

export {initSearchHeader};
