const menu_close = document.querySelector('.menu-close');
const menu_burger = document.querySelector('.menu-burger');
const navbar = document.querySelector('header > nav');

menu_burger.addEventListener('click', (event) => {
  navbar.classList.add('open')
})
menu_close.addEventListener('click', (event) => {
  navbar.classList.remove('open')
})