import tabs from './tabs';

const scheme = () => {
    const schemeList = document.getElementById("scheme-list"),
        schemeNav = document.querySelector(".nav"),
        schemeButtons = schemeList.querySelectorAll("button"),
        schemeBtnLeft = document.getElementById("nav-arrow-scheme_left"),
        schemeBtnRight = document.getElementById("nav-arrow-scheme_right");

    let schemeBtnWidth = (schemeList.clientWidth - schemeNav.clientWidth) / schemeButtons.length,
        schemeStep = 0;

    tabs({
        classMainTabs     : '#scheme',
        classButtons      : '#scheme-list',
        classButton       : '.scheme-nav__item',
        classButtonActive : 'active',
        classContents     : '.scheme-slider',
        classContent      : '.scheme-slider__slide',
        classContentActive: 'visible-content-block',
    });

    schemeBtnLeft.addEventListener("click", (function() {
        if (schemeStep !== 0) {
            schemeStep--;
            schemeList.style.transform = `translateX(-${schemeBtnWidth * schemeStep}px)`;
        }
    }));
    schemeBtnRight.addEventListener("click", (function() {
        if (schemeStep !== schemeButtons.length) {
            schemeStep++;
            schemeList.style.transform = `translateX(-${schemeBtnWidth * schemeStep}px)`;
        }
    }));
    window.addEventListener('resize', () => {
        schemeBtnWidth = (schemeList.clientWidth - schemeNav.clientWidth) / schemeButtons.length;
    });
};

export default scheme;