const menu = document.querySelector('.menu');
const submenu = document.querySelector('.submenu');


menu.addEventListener('mouseover', (e) => {
    e.preventDefault();
    submenu.classList.add('submenu-show');


});