import {
  enableBodyScroll,
  disableBodyScroll,
} from 'body-scroll-lock';

const targetElement = document.querySelector('.js-menu-container');

(() => {
  // Mobile menu container
  const mobileMenu = document.querySelector('.js-menu-container');
  // Open mobile menu button (burger)
  const openMenuBtn = document.querySelector('.js-open-menu');
  // Close mobile menu button (cross)
  const closeMenuBtn = document.querySelector('.js-close-menu');
  // Menu link HOME with mobile menu close function
  const menuLinkHome = document.querySelector('.js-menu-link-home');
  // Menu link HOW IT'S MADE with mobile menu close function
  const menuLinkAbout = document.querySelector('.js-menu-link-about');
  // Menu link PRODUCTS with mobile menu close function
  const menuLinkProducts = document.querySelector('.js-menu-link-products');
  // Menu link CONTACTS with mobile menu close function
  const menuLinkContacts = document.querySelector('.js-menu-link-contacts');
  // Menu BUY NOW BUTTON
  const menuBuyNowBtn = document.querySelector('.js-menu-buy-now-btn');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    if (!isMenuOpen) {
      disableBodyScroll(targetElement);
    } else {
      enableBodyScroll(targetElement);
    }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  menuLinkHome.addEventListener('click', toggleMenu);
  menuLinkAbout.addEventListener('click', toggleMenu);
  menuLinkProducts.addEventListener('click', toggleMenu);
  menuLinkContacts.addEventListener('click', toggleMenu);

  menuBuyNowBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    enableBodyScroll(document.body);
  });
})();
