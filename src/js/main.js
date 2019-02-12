import { accordion } from './accordion';
import { tabs } from './tabs';


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

accordion();

tabs();




