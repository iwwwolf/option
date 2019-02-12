function slideToggle(event) {
    function childrenHeight(el) {
        let i;
        let elmHeight = 0;
        let elmMargin = 0;
        let elChildren = el.children;

        for (i = 0; i < elChildren.length; i++) {
            elmHeight += elChildren[i].offsetHeight;
            //elmMargin += parseInt(document.defaultView.getComputedStyle(elChildren[i], '').getPropertyValue('margin-top')) + parseInt(document.defaultView.getComputedStyle(elChildren[i], '').getPropertyValue('margin-bottom'));
        }
        //return elmHeight;
        return elmHeight + elmMargin;
    }

    let elParent = event.currentTarget.closest('[data-accordion="parent"]');
    let targetBody = elParent.querySelector('[data-accordion="content"]');
    let targetTitle = event.currentTarget.closest('[data-accordion="link"]');

    
    if (targetTitle.classList.contains('closed')) {
        targetTitle.classList.remove('closed');
        targetBody.style.height = `${0}px`;
        targetBody.classList.add('opened');

        let targetBodyHeight = childrenHeight(targetBody);

        targetBody.style.height = `${targetBodyHeight}px`;

        setTimeout(() => {
            targetBody.removeAttribute('style');
        }, 400);
    } else {
        let targetBodyInitHeight = `${targetBody.offsetHeight}px`;
        targetTitle.classList.add('closed');
        targetBody.style.height = targetBodyInitHeight;
        targetBody.classList.remove('opened');

        setTimeout(() => {
            targetBody.style.height = 0;
        }, 20);
    }
}

export function accordion(){
    let accordionLink = document.querySelectorAll('[data-accordion="link"]');
    console.log(accordionLink);
    
    for (let i = 0; i < accordionLink.length; i++) {
        accordionLink[i].addEventListener('click', function () { slideToggle(event) }, false);
    }
}

