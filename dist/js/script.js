let menuBtn = document.querySelector('.menu__btn');
let menu = document.querySelector('.menu');
let menuBrand = document.querySelector('.menu__branding');
let menuNav = document.querySelector('.menu__nav');
let navItems = document.querySelectorAll('.nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuBrand.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        showMenu = true;
    }
    else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuBrand.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        showMenu = false;
    }
}