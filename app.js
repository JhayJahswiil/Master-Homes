// DOM ELEMENTS
const navMenu = document.querySelector('.nav__menu');
const bars = document.querySelector('.fa-bars');

// HAMBURGER DOM IMPLEMENTATION
bars.addEventListener('click', (e) => {
    navMenu.classList.toggle("open");
})





