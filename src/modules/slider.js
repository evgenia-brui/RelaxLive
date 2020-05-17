const slider = params => {
    const {
        sliderBlock,
        sliderItems,
        sliderItem,
        sliderItemActive,
        sliderItemsVisible,
        sliderDots = false,
        sliderNav,
        sliderPrev,
        sliderNext,
        sliderAutoplay,
        sliderSpeed
    } = params;

    const slider = document.querySelector(sliderBlock),
        slideItems = document.querySelector(sliderItems),
        slide = document.querySelectorAll(sliderItem),
        slideLength = slide.length,
        slideCloneLength = 2;

    let currentSlide = 0,
        visibleSlide = 1,
        slideWidth,
        interval,
        pageWidth = document.documentElement.clientWidth;

    slideItems.append(slide[0].cloneNode(true)); // склонируем первый элемент в конец
    slideItems.prepend(slide[slideLength - 1].cloneNode(true)); // склонируем последний элемент в начало
    
    const slideAll = document.querySelectorAll(sliderItem);

    const responsive = () => {
        pageWidth = document.documentElement.clientWidth;
        for (let breakpoint in sliderItemsVisible) {
            if (pageWidth > breakpoint) {
                visibleSlide = sliderItemsVisible[breakpoint];
                init();
            }
        }
    };

    const init = () => {
        // получим ширину слайдера formula-slider-wrap
        const sliderWidth = slider.clientWidth;
        // эту ширину делем на количесто слайдов видимых
        slideWidth = sliderWidth / visibleSlide;
        // получаем ширину слайда в px
        // количество слайдов * на ширину и записываем ширину formula-slider
        slideItems.style.width = slideWidth * (slideLength + slideCloneLength) + 'px';
        slideAll.forEach(item => {
            item.style.width = slideWidth + 'px';
            item.classList.remove(sliderItemActive);
        });

        //slideItems.style.transform = `translate3d(${0 - slideWidth * (currentSlide - Math.floor(visibleSlide / 2))}px, 0px, 0px)`;
        if (visibleSlide < 3) {
            // отменим слайд активным
            slideAll[currentSlide + slideCloneLength / 2].classList.add(sliderItemActive);
            slideItems.style.transform = `translate3d(${0 - slideWidth * (currentSlide + slideCloneLength / 2)}px, 0px, 0px)`;
        } else {
            // отменим слайд по центру активным
            slideAll[currentSlide + Math.floor(visibleSlide / 2)].classList.add(sliderItemActive);
            slideItems.style.transform = `translate3d(${0 - slideWidth * currentSlide}px, 0px, 0px)`;
        }
    };

    if (sliderDots) {
        const portfolioDots = document.querySelector(sliderDots);

        const addPagination = () => {
            slide.forEach((item, index) => {
                const li = document.createElement('li');
                li.classList.add('dot');
                if (index === 0) li.classList.add('dot-active');
                portfolioDots.append(li);
            });
        };
        addPagination();

        const dot = document.querySelectorAll('.dot');
    }

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
        //slideItems.style.transform = `translate3d(${0 - slideWidth * (currentSlide - Math.floor(visibleSlide / 2))}px, 0px, 0px)`;
        if (visibleSlide < 3) {
            slideItems.style.transform = `translate3d(${0 - slideWidth * (currentSlide + slideCloneLength / 2)}px, 0px, 0px)`;
        } else {
            slideItems.style.transform = `translate3d(${0 - slideWidth * currentSlide}px, 0px, 0px)`;
        }
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target;

        if (!target.matches(sliderNav + ', .dot, ' + sliderItem)) {
            return;
        }

        prevSlide(slide, currentSlide, sliderItemActive);
        if (sliderDots) prevSlide(dot, currentSlide, 'dot-active');

        if (target.matches(sliderNext)) {
            currentSlide++;
        } else if (target.matches(sliderPrev)) {
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
                        currentSlide = index - slideCloneLength / 2;
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

    responsive();
    window.addEventListener('resize', () => responsive());
};

slider({
    sliderBlock        : '.formula-slider-wrap',
    sliderItems        : '.formula-slider',
    sliderItem         : '.formula-slider__slide',
    sliderItemActive   : 'active-item',
    sliderDots         : false,
    sliderNav          : '.slider-arrow',
    sliderPrev         : '#formula-arrow_left',
    sliderNext         : '#formula-arrow_right',
    sliderAutoplay     : false,
    sliderSpeed        : 10000,
    sliderItemsVisible : {
        900 : 3,
        0   : 1
    }
});

export default slider;