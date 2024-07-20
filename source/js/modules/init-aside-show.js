function initAsideShow() {
  const buttonShow = document.querySelector('[data-aside-show]');
  const aside = document.querySelector('[data-aside]');
  const buttonClose = document.querySelector('[data-aside-close]');

  if (buttonShow && aside) {
    buttonShow.addEventListener('click', e => {
      e.preventDefault();
      // bodyLock();
      aside.classList.toggle('show');
    });

    aside.addEventListener('click', e => {
      if (
        !e.target.closest('.filter__box') &&
        !e.target.classList.contains('filter__box')
      ) {
        // bodyUnlock(300);
        aside.classList.remove('show');
      }
    });
  }

  if (buttonClose) {
    buttonClose.addEventListener('click', e => {
      e.preventDefault();
      // bodyUnlock(300);
      aside.classList.remove('show');
    });
  }
}

export {initAsideShow}
