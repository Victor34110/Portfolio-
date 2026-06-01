document.addEventListener('DOMContentLoaded', function () {
  if (typeof Swiper !== 'undefined') {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  // Menu responsive
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.querySelector('.nav-links');
  const header = document.querySelector('header');

  if (!menuIcon || !navLinks || !header) {
    return;
  }

  const closeMenu = () => {
    navLinks.classList.remove('active');
    menuIcon.classList.remove('active');
    menuIcon.setAttribute('aria-expanded', 'false');
    menuIcon.setAttribute('aria-label', 'Open navigation menu');
  };

  const openMenu = () => {
    navLinks.classList.add('active');
    menuIcon.classList.add('active');
    menuIcon.setAttribute('aria-expanded', 'true');
    menuIcon.setAttribute('aria-label', 'Close navigation menu');
  };

  menuIcon.addEventListener('click', (event) => {
    event.stopPropagation();

    if (navLinks.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (!header.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
});
