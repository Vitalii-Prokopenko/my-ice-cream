// BodyScrollLock
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock';

// Script for modals - https://medium.com/@dan.postnov/%D0%BC%D0%BE%D0%B4%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BE%D0%BA%D0%BD%D0%B0-%D0%BD%D0%B0-javascript-30-%D1%81%D1%82%D1%80%D0%BE%D0%BA-%D0%BA%D0%BE%D0%B4%D0%B0-dbbb599649f3
// Closest is replaced by data-modal identification

// DOMContentLoaded - when when the HTML document has been completely parsed,
//  and all deferred scripts (<script defer src="…"> and <script type="module">)
//  have downloaded and executed
document.addEventListener('DOMContentLoaded', function () {
  /* Write an array of button elements and a background to variables */
  const modalButtons = document.querySelectorAll('.js-open-modal');
  const overlay = document.querySelector('.js-overlay-modal');
  const closeButtons = document.querySelectorAll('.js-modal-close');

  /* Loop through an array of buttons */
  modalButtons.forEach(function (item) {
    /* Assign a click handler to each button */
    item.addEventListener('click', function (e) {
      e.preventDefault();
      /* Each time the button is clicked, we will fetch the contents of the data-modal attribute and
      look for a modal window with the same attribute */
      const modalId = this.getAttribute('data-modal');
      const modalElem = document.querySelector(
        '.modal[data-modal="' + modalId + '"]'
      );

      /* After we have found the desired modal window, add classes
      for overlay and modal window to show them */
      modalElem.classList.add('active');
      overlay.classList.add('active');

      // disables body scroll when modal window is open
      disableBodyScroll(modalElem);
    }); // end click
  }); // end foreach

  // Close modal windows

  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      // const parentModal = this.closest('.modal');

      const modalIdClose = this.getAttribute('data-modal');
      const parentModal = document.querySelector(
        '.modal[data-modal="' + modalIdClose + '"]'
      );

      parentModal.classList.remove('active');
      overlay.classList.remove('active');

      // enables body scroll when modal window is closed
      enableBodyScroll(parentModal);
      // Stops video from youtube when modal is closed

      if (modalIdClose === '2') {
        const videoEmbed = document.querySelector('.modal-about__video');
        videoEmbed.setAttribute('src', '');
      }
    });
  }); // end foreach

  document.body.addEventListener(
    'keydown',
    function (e) {
      const key = e.code;

      if (key == 27) {
        document.querySelector('.modal.active').classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
      }
    },
    false
  );

  overlay.addEventListener('click', function () {
    document.querySelector('.modal.active').classList.remove('active');
    this.classList.remove('active');
  });
});
// end ready
