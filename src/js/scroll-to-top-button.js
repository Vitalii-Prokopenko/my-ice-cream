const scrollTop = function () {
  const scrollBtn = document.querySelector('#scroll-btn');
  // hide/show button based on scroll distance
  const scrollBtnDisplay = function () {
    window.scrollY > window.innerHeight
      ? scrollBtn.classList.add('show')
      : scrollBtn.classList.remove('show');
  };
  window.addEventListener('scroll', scrollBtnDisplay);
  // scroll to top when button clicked
  const scrollWindow = function () {
    if (window.scrollY != 0) {
      setTimeout(function () {
        window.scrollTo(0, window.scrollY - 50);
        scrollWindow();
      }, 10);
    }
  };
  scrollBtn.addEventListener('click', scrollWindow);
};
scrollTop();
