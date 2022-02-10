window.addEventListener('DOMContentLoaded', ()=>{
'use strict';

let menuBtn = document.querySelector('.nav_btn');
let menuFrame = document.querySelector('.menu_mobile');
let menuLink = document.querySelectorAll('.link');


menuBtn.addEventListener('click', () => {
    if (menuFrame.classList.contains('menu_active')) {
        menuFrame.classList.remove('menu_active');
        menuFrame.classList.add('menu_hide');
    }   else {
        menuFrame.classList.remove('menu_hide');
        menuFrame.classList.add('menu_active');
        document.body.style.overflow = 'hidden';
    }
});
menuFrame.addEventListener('click', (event) => {
    if (event.target == menuFrame){
        menuFrame.classList.remove('menu_active');
        menuFrame.classList.add('menu_hide');
        document.body.style.overflow = '';
    }   
    else if (event.target == menuLink[0] || event.target == menuLink[1] || event.target == menuLink[2] || event.target == menuLink[3]){
        console.log(event.target);
        menuFrame.classList.remove('menu_active');
        menuFrame.classList.add('menu_hide');
        document.body.style.overflow = '';
    }
});

});