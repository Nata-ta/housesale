const btnMenu = document.querySelector('.hero__header-btn-menu');
const menu = document.querySelector('.hero__menu');

function toggleMobileMenu() {
    btnMenu.classList.toggle('hero__header-btn-menu--open');
    menu.classList.toggle('hero__menu--open');
}

btnMenu.addEventListener('click', toggleMobileMenu);