// seleziono i nodi dal DOM
const sfondo = document.querySelector('.sfondoAperturaMenu');
const closeButton = document.querySelector('.closeMenu');
const menu = document.querySelector('#menuMobile')
const openButton= document.querySelector('.burger')

// ****** event listeners **********

openButton.addEventListener('click',toggleMenu)
closeButton.addEventListener('click',toggleMenu)

// functions

function toggleMenu () {
    sfondo.classList.toggle("show");
    closeButton.classList.toggle("show");
    menu.classList.toggle("show");
}