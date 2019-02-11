function slideToggle(event) {
    function childrenHeight(el) {
        let i;
        let elmHeight = 0;
        let elmMargin = 0;
        const elChildren = el.children;

        for (i = 0; i < elChildren.length; i++) {
            elmHeight += elChildren[i].offsetHeight;
            //elmMargin += parseInt(document.defaultView.getComputedStyle(elChildren[i], '').getPropertyValue('margin-top')) + parseInt(document.defaultView.getComputedStyle(elChildren[i], '').getPropertyValue('margin-bottom'));
        }
        //return elmHeight;
        return elmHeight + elmMargin;
    }

    const elParent = event.currentTarget.closest('[data-accordion="parent"]');
    const targetBody = elParent.querySelector('[data-accordion="content"]');

    if (event.target.hasAttribute('data-accordion', '[data-accordion="link"]')) {
        var targetTitle = event.target;
    } else {
        var targetTitle = event.currentTarget.closest('[data-accordion="link"]');
    }

    if (targetTitle.classList.contains('closed')) {
        targetTitle.classList.remove('closed');
        targetBody.style.height = `${0}px`;
        targetBody.classList.add('opened');

        const targetBodyHeight = childrenHeight(targetBody);

        targetBody.style.height = `${targetBodyHeight}px`;

        setTimeout(() => {
            targetBody.removeAttribute('style');
        }, 400);
    } else {
        const targetBodyInitHeight = `${targetBody.offsetHeight}px`;
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

    for (let i = 0; i < accordionLink.length; i++) {
        accordionLink[i].addEventListener('click', function () { slideToggle(event) }, false);
    }
}

