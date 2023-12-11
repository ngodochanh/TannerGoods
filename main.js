const headerMenu = document.querySelector('.js-header-menu');
const navMenu = document.querySelector('.js-nav-menu');

document.addEventListener('click', (e) => {
  if (headerMenu.contains(e.target)) {
    navMenu.classList.toggle('active');
  } else {
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    }
  }
});
