const sliderLine = params => {
    const {
        classList,
        classNav,
        classButton,
        classButtonLeft,
        classButtonRight,
    } = params;
    
    const list = document.querySelector(classList),
        nav = document.querySelector(classNav),
        buttons = list.querySelectorAll(classButton),
        buttonLeft = document.querySelector(classButtonLeft),
        buttonRight = document.querySelector(classButtonRight);

    let buttonWidth = (list.clientWidth - nav.clientWidth) / buttons.length,
        step = 0;

    buttonLeft.addEventListener("click", (function() {
        if (step !== 0) {
            step--;
            list.style.transform = `translateX(-${buttonWidth * step}px)`;
        }
    }));
    buttonRight.addEventListener("click", (function() {
        if (step !== buttons.length) {
            step++;
            list.style.transform = `translateX(-${buttonWidth * step}px)`;
        }
    }));
    window.addEventListener('resize', () => {
        buttonWidth = (list.clientWidth - nav.clientWidth) / buttons.length;
    });
};

export default sliderLine;