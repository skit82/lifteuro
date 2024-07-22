const initFixedHeader = () => {
  let lastScroll = 0;
  const header = document.querySelector('.header');
  const defaultOffset = header.offsetHeight;
  const scrollPosition = () =>
    window.pageYOffset || document.documentElement.scrollTop;
  const containHide = () => header.classList.contains('hide');

  window.addEventListener('scroll', (e) => {
    if (
      scrollPosition() > lastScroll &&
      !containHide() &&
      scrollPosition() > defaultOffset
    ) {
      header.classList.add('hide');
    } else if (scrollPosition() < lastScroll && containHide()) {
      header.classList.remove('hide');
    }

    lastScroll = scrollPosition();
  });
};

export {initFixedHeader};
