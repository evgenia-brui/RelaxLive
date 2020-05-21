import slider from './slider';

const transparency = () => {
    slider({
        sliderBlock        : '.popup-transparency-slider-wrap',
        sliderItems        : '.popup-transparency-slider',
        sliderItem         : '.popup-transparency-slider__slide',
        sliderItemActive   : 'active-item',
        sliderDots         : false,
        sliderPagination   : true,
        sliderCurrentSlide : '.slider-counter-content__current',
        sliderTotalSlide   : '.slider-counter-content__total',
        sliderNav          : '.popup-arrow',
        sliderPrev         : '#transparency_left',
        sliderNext         : '#transparency_right',
        sliderAutoplay     : false,
        sliderSpeed        : 10000,
    });

    slider({
        sliderBlock        : '.transparency-slider-wrap',
        sliderItems        : '.transparency-slider',
        sliderItem         : '.transparency-item',
        sliderItemActive   : 'active-item',
        sliderDots         : false,
        sliderNav          : '.slider-arrow',
        sliderPrev         : '#transparency-arrow_left',
        sliderNext         : '#transparency-arrow_right',
        sliderAutoplay     : false,
        sliderSpeed        : 10000,
        sliderItemsVisible : {
            1100 : 3,
            0   : 1
        }
    });

    const transparencyItemImg = document.querySelectorAll('.transparency-item__img'),
        popupTransparency = document.querySelector('.popup-transparency'),
        sliderCounterContent_current = popupTransparency.querySelector('.slider-counter-content__current'),
        sliderCounterContent_total = popupTransparency.querySelector('.slider-counter-content__total');

    sliderCounterContent_total.textContent = transparencyItemImg.length / 2;

    transparencyItemImg.forEach(item => item.addEventListener('click', () => {
        popupTransparency.classList.toggle('visible');
        sliderCounterContent_current.textContent = item.getAttribute('data-image-index');
    }));
};

export default transparency;