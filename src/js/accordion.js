export function slideToggle(event) {
    function getParent(el, elClass) {
        while ((el = el.parentElement) && !el.classList.contains(elClass));
        // while ((el = el.parentElement) && !el.hasAttribute(elClass));
        return el;
    }

    function childrenHeight(el) {
        let i;
        let elmHeight = 0;
        let elmMargin = 0;
        const elChildren = el.children;
        for (i = 0; i < elChildren.length; i++) {
            elmHeight += elChildren[i].offsetHeight;
            //elmMargin += parseInt(document.defaultView.getComputedStyle(elChildren[i], '').getPropertyValue('margin-top')) + parseInt(document.defaultView.getComputedStyle(elChildren[i], '').getPropertyValue('margin-bottom'));
        }
        return elmHeight;
        //return elmHeight + elmMargin;
    }

    const elParent = getParent(event.target, 'js-slide-toggle');
    //const elParent = getParent(event.target, 'data-accordion="parent"');

    const targetBody = elParent.querySelector('.js-slide-toggle-body');
    //const targetBody = elParent.querySelector('[data-accordion="content"]');

    if (event.target.classList.contains('js-slide-toggle-title')) {
    //if (event.target.hasAttribute('data-accordion="link"')) {
        var targetTitle = event.target;
    } else {
        var targetTitle = getParent(event.target, 'js-slide-toggle-title');
        // var targetTitle = getParent(event.target, 'data-accordion="link"');
    }
    if (targetTitle.classList.contains('closed')) {
        targetTitle.classList.remove('closed');
        targetBody.style.height = `${0}px`;
        targetBody.classList.remove('d-none');

        const targetBodyHeight = childrenHeight(targetBody);

        targetBody.style.height = `${targetBodyHeight}px`;

        setTimeout(() => {
            targetBody.removeAttribute('style');
        }, 400);
    } else {
        const targetBodyInitHeight = `${targetBody.offsetHeight}px`;
        targetTitle.classList.add('closed');
        targetBody.style.height = targetBodyInitHeight;

        setTimeout(() => {
            targetBody.style.height = 0;
        }, 20);
    }
}
