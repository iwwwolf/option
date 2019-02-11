export function tabs(){
    let tabsLinks = document.querySelectorAll('[data-tabs="link"]'),
        tabsOuterLinks = document.querySelectorAll('[data-tabs="outer-link"]'),
        i;

    function myTabClicks(event) {
        let $this = event.currentTarget;
        
        if(!$this.classList.contains('active')) {
            let clickedTabLinkParent = $this.closest('[data-tabs="links-parent"]'),
                tabsList = clickedTabLinkParent.querySelectorAll('[data-tabs="link"]'),
                clickedTab = $this,
                activePaneId = $this.getAttribute("href"),
                activePane = document.querySelector(activePaneId),
                tabContentParent = activePane.closest('[data-tabs="parent"]'),
                myContentPanes = tabContentParent.querySelectorAll('[data-tabs="content"]');
            
            event.preventDefault();

            for (i = 0; i < tabsList.length; i++) {
                tabsList[i].classList.remove('active');
            }

            clickedTab.classList.add('active');

            for (i = 0; i < myContentPanes.length; i++) {
                myContentPanes[i].classList.remove('showed');
            }

            activePane.classList.add('showed');

            let activePaneTopPos = activePane.getBoundingClientRect().top;

            window.scrollTo({
                top: activePaneTopPos + window.pageYOffset - clickedTabLinkParent.getBoundingClientRect().height,
                behavior: "smooth"
            });
            

        } else {
            event.preventDefault();
        }
    }

   

    function addClick(event) {
        let $this = event.currentTarget,
            link = document.querySelector('[href="' + $this.getAttribute('href') + '"][data-tabs="link"]');
        
            event.preventDefault();
        link.click();
        
    }

    for (i = 0; i < tabsOuterLinks.length; i++) {
        tabsOuterLinks[i].addEventListener('click', function () { addClick(event) });
    }
    
    for (i = 0; i < tabsLinks.length; i++) {
        tabsLinks[i].addEventListener('click', function() { myTabClicks(event) });
    }

    
}