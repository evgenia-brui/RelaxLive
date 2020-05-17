const slider = params => {
    console.log(params);
    const {
        sliderBlock,
        sliderItems,
        sliderItem,
        sliderItemActive,
        sliderItemsVisible,
        sliderDots = false,
        sliderPagination = false,
        sliderCurrentSlide,
        sliderTotalSlide,
        sliderNav,
        sliderPrev,
        sliderNext,
        sliderAutoplay = false,
        sliderSpeed,
        sliderCenterMode = false,
        sliderLoop = true,
        sliderMulti = false,
    } = params;

    const slider = document.querySelector(sliderBlock),
        slideItems = document.querySelector(`${sliderBlock} ${sliderItems}`),
        slide = document.querySelectorAll(`${sliderItems} ${sliderItem}`),
        slideLength = slide.length,
        slideLengthHalf = slideLength / 2;

    let currentSlide = 0,
        visibleSlide = 1,
        slideCloneLength = 0,
        slideWidth,
        interval,
        pageWidth = document.documentElement.clientWidth,
        slideAll = document.querySelectorAll(`${sliderItems} ${sliderItem}`);

    const getVisibleSlide = () => {
        if (sliderItemsVisible) {
            for (let breakpoint in sliderItemsVisible) {
                if (pageWidth > breakpoint) {
                    visibleSlide = sliderItemsVisible[breakpoint];
                }
            }
        }
    };

    const responsive = () => {
        pageWidth = document.documentElement.clientWidth;
        getVisibleSlide();
        renderSlide();
    };

    const renderSlide = () => {
        // получим ширину слайдера formula-slider-wrap
        const sliderWidth = slider.clientWidth;
        // эту ширину делем на количесто слайдов видимых
        slideWidth = sliderWidth / visibleSlide;
        // получаем ширину слайда в px
        // количество слайдов * на ширину и записываем ширину formula-slider
        slideItems.style.width = slideWidth * (slideLength + slideCloneLength) + 'px';
        slideItems.style.transition = 'all 0.25s ease 0s';
        slideAll.forEach(item => {
            item.style.float = 'left';
            item.style.width = slideWidth + 'px';
            item.classList.remove(sliderItemActive);
        });

        if (visibleSlide < 3) {
            // отметим слайд активным
            slideAll[currentSlide + Math.floor(slideLengthHalf)].classList.add(sliderItemActive);
            slideItems.style.transform = `translate3d(${0 - slideWidth * (currentSlide + Math.floor(slideLengthHalf))}px, 0px, 0px)`;
        } else {
            // отметим слайд по центру активным
            slideAll[currentSlide + Math.floor(slideLengthHalf)].classList.add(sliderItemActive);
            slideItems.style.transform = `translate3d(${0 - slideWidth * (currentSlide + Math.floor(visibleSlide / 2) + 1)}px, 0px, 0px)`;
        }
    };

    const loop = () => {
        console.log(slideLength, slideLengthHalf);

        for (let i = 0; i < slideLengthHalf; i++) {
            const clone = slide[i].cloneNode(true);
            clone.classList.add('clone');
            clone.classList.remove(sliderItemActive);
            slideItems.append(clone);
            slideCloneLength++;
        }
        for (let i = slideLength - 1; i >= slideLengthHalf; i--) {
            const clone = slide[i].cloneNode(true);
            clone.classList.add('clone');
            clone.classList.remove(sliderItemActive);
            slideItems.prepend(clone);
            slideCloneLength++;
        }

        slideAll = document.querySelectorAll(`${sliderItems} ${sliderItem}`);
    };

    const pagination = () => {
        const currentSlideText = document.querySelector(`${sliderBlock} ${sliderCurrentSlide}`),
            totalSlideText = document.querySelector(`${sliderBlock} ${sliderTotalSlide}`);

        currentSlideText.textContent = currentSlide + 1;
        totalSlideText.textContent = slideLength;
    };

    if (sliderDots) {
        const portfolioDots = document.querySelector(sliderDots);

        const addDots = () => {
            slide.forEach((item, index) => {
                const li = document.createElement('li');
                li.classList.add('dot');
                if (index === 0) li.classList.add('dot-active');
                portfolioDots.append(li);
            });
        };
        addDots();

        const dot = document.querySelectorAll('.dot');
    }

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        if (sliderPagination) pagination();
        elem[index].classList.add(strClass);
        //slideItems.style.transform = `translate3d(${0 - slideWidth * (currentSlide - Math.floor(visibleSlide / 2))}px, 0px, 0px)`;
        if (visibleSlide < 3) {
            slideItems.style.transform = `translate3d(${0 - slideWidth * (currentSlide + Math.floor(slideLengthHalf))}px, 0px, 0px)`;
        } else {
            slideItems.style.transform = `translate3d(${0 - slideWidth * (currentSlide + Math.floor(visibleSlide / 2) + 1)}px, 0px, 0px)`;
        }
        console.log('nextSlide' + currentSlide);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target;
        console.log(event);

        // Переменная для слайдеров в табах
        let sliderNavDinamic = '';

        if (sliderMulti) sliderNavDinamic = `[data-current-tab="${slider.getAttribute('data-current-tab')}"] `;

        if (!target.matches(sliderNavDinamic + sliderNav + ', .dot, ' + sliderItem)) {
            return;
        }

        //console.log(sliderItems + ' ' + sliderNav);
        //console.log(sliderNavDinamic);

        prevSlide(slide, currentSlide, sliderItemActive);
        if (sliderDots) prevSlide(dot, currentSlide, 'dot-active');

        if (target.matches(sliderNavDinamic + sliderNext)) {
            currentSlide++;
        } else if (target.matches(sliderNavDinamic + sliderPrev)) {
            currentSlide--;
        } else if (sliderDots && target.matches('.dot')) {
            dot.forEach((elem, index) => {
                if (elem === target) {
                    currentSlide = index;
                }
            });
        } else if (target.matches(sliderItem)) {
            slideAll.forEach((elem, index) => {
                if (elem === target) {
                    if (visibleSlide < 3) {
                        currentSlide = index;
                    } else {
                        currentSlide = index - slideCloneLength;
                    }
                }
            });
        }

        if (currentSlide >= slideLength) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slideLength - 1;
        }

        nextSlide(slide, currentSlide, sliderItemActive);
        if (sliderDots) nextSlide(dot, currentSlide, 'dot-active');
    });

    if (sliderAutoplay) {
        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, sliderItemActive);
            if (sliderDots) prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slideLength) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, sliderItemActive);
            if (sliderDots) nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        slider.addEventListener('mouseover', event => {
            if (event.target.matches(sliderNav) || event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', event => {
            if (event.target.matches(sliderNav) || event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide(sliderSpeed);
    }

    const init = () => {
        if (sliderPagination) pagination();
        if (sliderLoop) loop();
        responsive();
    };

    console.log();

    init();
    window.addEventListener('resize', () => responsive());
};

export default slider;