
let header = document.querySelector('header');

window.addEventListener('scroll', ()=> {
    header.classList.toggle('sticky', window.scrollY > 0)
})

let menu = document.querySelector('#menu');
let nav = document.querySelector('.nav');


menu.addEventListener('click', ()=> {
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active')
})