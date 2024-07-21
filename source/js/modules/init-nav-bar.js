const initNavBar = () => {
  const catalog = document.querySelector('.catalog-header');
  const links = document.querySelectorAll('.catalog-header__link');
  const buttonCatalog = document.querySelector('.menu__button-catalog');
  const burger = document.querySelector('.menu__burger');
  const panel = document.querySelector('.catalog-header__panel');

  let isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    }
  };

  let bodyLockStatus = true;
  let bodyLockToggle = (delay = 500) => {
    if (document.documentElement.classList.contains('lock')) {
      bodyUnlock(delay);
    } else {
      bodyLock(delay);
    }
  };

  let bodyUnlock = (delay = 500) => {
    let body = document.querySelector('body');
    if (bodyLockStatus) {
        let lock_padding = document.querySelectorAll('[data-lp]');
        setTimeout(() => {
        for (let index = 0; index < lock_padding.length; index++) {
          const el = lock_padding[index];
          el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        document.documentElement.classList.remove('lock');
      }, delay);
      bodyLockStatus = false;
      setTimeout(function () {
      bodyLockStatus = true;
      }, delay);
    }
  };

  let bodyLock = (delay = 500) => {
    let body = document.querySelector('body');
    if (bodyLockStatus) {
      let lock_padding = document.querySelectorAll('[data-lp]');
      for (let index = 0; index < lock_padding.length; index++) {
        const el = lock_padding[index];
        el.style.paddingRight =
          window.innerWidth -
          document.querySelector('.wrapper').offsetWidth +
          'px';
       }
      body.style.paddingRight =
      window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
      document.documentElement.classList.add('lock');

      bodyLockStatus = false;
      setTimeout(function () {
        bodyLockStatus = true;
      }, delay);
    }
  };

  if(buttonCatalog) {
    buttonCatalog.addEventListener('click', function (e) {
      if(isMobile.any()) {
        bodyLockToggle();
      }
      this.classList.toggle('active');
      catalog.classList.toggle('show');
      showFirstSubMenu();
    });
  }
  if(burger) {
    burger.addEventListener('click', function (e) {
      if(isMobile.any()) {
        bodyLockToggle();
      }
      this.classList.toggle('active');
      catalog.classList.toggle('show');
      showFirstSubMenu();
    });
  }

  if(links.length && !isMobile.any()) {
    links.forEach(link => {
      link.addEventListener('mouseover', showSubMenu);
    });
  }

  if(links.length && isMobile.any()) {
    links.forEach(link => {
      link.addEventListener('click', showSubMenu);
    });
  }

  if (catalog) {
    window.addEventListener('click', e => {
      if (
        !e.target.closest(
          '.catalog-header__item.menu-item-has-children .catalog-header__link',
        ) &&
        !e.target.closest('.menu__button-catalog') &&
        !e.target.closest('.menu__burger') &&
        !e.target.closest('.catalog-header__sub-menu-return') &&
        catalog.classList.contains('show')
      ) {
        buttonCatalog.classList.remove('active');
        burger.classList.remove('active');
        catalog.classList.remove('show');
        if(isMobile.any()) {
          bodyUnlock(300);
        }
        removeActive();
        hiddenPanel();
      }
      if (e.target.closest('.catalog-header__sub-menu-return')) {
        removeActive();
        hiddenPanel();
      }
    });
  }
  function showSubMenu() {
    const target = this;
    const nextElement = this.nextElementSibling;
    removeActive();
    if(nextElement) {
      clearPanel();
      target.classList.toggle('active');
      let clone = nextElement.cloneNode( true);
      panel.appendChild(clone);
      showPanel();
    }
    if(!nextElement) {
      hiddenPanel();
    }
  }
  function showFirstSubMenu() {
    if(links.length && !isMobile.any()) {
      clearPanel();
      removeActive();
      const firstElement = links[0];
      firstElement.classList.toggle('active');
      let clone = firstElement.nextElementSibling.cloneNode( true);
      panel.appendChild(clone);
      showPanel();
    }
  }
  function showPanel() {
    if(!panel.classList.contains('show')) {
      panel.classList.add('show');
    }
  }
  function hiddenPanel() {
    if(panel.classList.contains('show')) {
      panel.classList.remove('show');
    }
  }
  function clearPanel() {
    panel.innerHTML = "";
  }
  function removeActive() {
    links.forEach(link => {
      link.classList.remove('active');
    });
  }
}

export {initNavBar}
