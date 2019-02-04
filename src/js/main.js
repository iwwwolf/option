
let burgerLink = document.querySelector('.header__burger-link'),
    headLinks = document.querySelector('.head-links');

burgerLink.onclick = (e) => {
    e.preventDefault();
    if(!burgerLink.classList.contains('active')) {
        burgerLink.classList.add('active');
        headLinks.classList.add('visible');
    } else {
        burgerLink.classList.remove('active');
        headLinks.classList.remove('visible');
    }
};


//accordion

// let accordionLink = document.querySelectorAll('[data-accordion="link"]');

// for (let i = 0; i < accordionLink.length; i++) {
//     accordionLink[i].addEventListener('click', toggleItem, false);
// }
// function toggleItem(e) {
//     let parent = this.parentNode;
//     let target = parent.querySelector('[data-accordion="target"]');

//     e.preventDefault();

//     if (this.classList.contains('active')) {
//         this.classList.remove('active');
//         target.classList.remove('visible');
//     } else {
//         this.classList.add('active');
//         target.classList.add('visible');
//     }
// }


// Background video

let sources = document.querySelectorAll('#backgroundVideo source');
// Define the video object this source is contained inside
let video = document.querySelector('#backgroundVideo');
for (let i = 0; i < sources.length; i++) {
    sources[i].setAttribute('src', sources[i].getAttribute('data-src'));
}

// If for some reason we do want to load the video after, for desktop as opposed to mobile (I'd imagine), use videojs API to load
if(window.innerWidth >= 980) {
    video.load();
}

import {slideToggle} from './accordion';

let accordionLink = document.querySelectorAll('[data-accordion="link"]');

for (let i = 0; i < accordionLink.length; i++) {
    accordionLink[i].addEventListener('click', function () {slideToggle(event)}, false);
}
console.log($);

