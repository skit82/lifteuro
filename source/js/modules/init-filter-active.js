function initFilterActive() {

  let filter = document.querySelector('.filter');
  // var filterOpen = document.querySelector(".filter__open");
  let filterOptions = document.querySelectorAll('.filter__list');
  let filterButtons = document.querySelectorAll('.filter__button');
  let filterTitles = document.querySelectorAll('.filter__form-name p');
  let mediaTablet = window.matchMedia('(max-width: 1023px');

  let toggleClass = function (element, selector) {
    element.classList.toggle(selector);
  };

  let removeClass = function (element, selector) {
    element.classList.remove(selector);
  };

  let addClass = function (element, selector) {
    element.classList.add(selector);
  };

  // if (filter) {
  // if (mediaTablet.matches) {
  // addClass(filter, "filter--disable");
  // }

  // if (filterOpen) {
  // filterOpen.addEventListener("click", e => {
  // e.preventDefault();
  // toggleClass(filter, "filter--disable");
  // });
  // }
  // }

  let hideOptions = function () {
    for (let i = 1; i < filterOptions.length; i++) {
      removeClass(filterButtons[i], 'filter__button--active');
      removeClass(filterOptions[i], 'filter__list--active');
    }
  };

  if (filter) {
    hideOptions();
  }

  if (filter) {
    filterTitles.forEach(function (title, i) {
      title.addEventListener('click', function () {
        toggleClass(filterOptions[i], 'filter__list--active');
        toggleClass(filterButtons[i], 'filter__button--active');
      });
    });

    filterButtons.forEach(function (button, i) {
      button.addEventListener('click', function () {
        toggleClass(button, 'filter__button--active');
        toggleClass(filterOptions[i], 'filter__list--active');
      });
    });
  }
}

export {initFilterActive};
