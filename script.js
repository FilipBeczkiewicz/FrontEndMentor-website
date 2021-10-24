const btnHamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav__items');

const openMenu = () => {
    menu.classList.toggle('nav__items-active')
}


btnHamburger.addEventListener('click', openMenu)