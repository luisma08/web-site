'use strict';

const header = document.getElementById('header');

document.addEventListener('scroll', () => {
    header.classList.toggle('scroll', window.scrollY > 0);
});