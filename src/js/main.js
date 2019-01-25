
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

let accordionLink = document.querySelectorAll('[data-accordion="link"]');

for (let i = 0; i < accordionLink.length; i++) {
    accordionLink[i].addEventListener('click', toggleItem, false);
}
function toggleItem(e) {
    let parent = this.parentNode;
    let target = parent.querySelector('[data-accordion="target"]');

    e.preventDefault();

    if (this.classList.contains('active')) {
        this.classList.remove('active');
        target.classList.remove('visible');
    } else {
        this.classList.add('active');
        target.classList.add('visible');
    }
}
