const initSideMenu = () => {
  const sideMenuToggle = document.querySelector('[data-side-menu="current-item"]');
  const sideMenuItems = document.querySelectorAll('[data-side-menu="item"]');

  if (sideMenuToggle) {
    sideMenuToggle.addEventListener('click', () => {
      sideMenuItems.forEach((item) => {
        item.classList.toggle('is-visible');
      });
    });
  }
};

export {initSideMenu};
