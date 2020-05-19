import slider from './slider';

const problems = () => {
    const problemsItems = document.querySelectorAll('.problems-item');

    problemsItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('active-item');
            const popup = item.querySelector('.problems-item-popup');
            if (popup.getBoundingClientRect().y < 5) {
                popup.classList.add('problems-item-popup-bottom');
            }
        });
        item.addEventListener('mouseout', () => {
            item.classList.remove('active-item');
            const popupBottom = item.querySelector('.problems-item-popup-bottom');
            if (popupBottom) popupBottom.classList.remove('problems-item-popup-bottom');
        });
    });

    slider({
        sliderBlock        : '.problems-slider-wrap',
        sliderItems        : '.problems-slider',
        sliderItem         : '.problems-slider__slide',
        sliderItemActive   : 'active-item',
        sliderDots         : false,
        sliderNav          : '.slider-arrow',
        sliderPrev         : '#problems-arrow_left',
        sliderNext         : '#problems-arrow_right',
        sliderAutoplay     : false,
        sliderSpeed        : 10000,
        sliderCenterMode   : false,
        sliderItemsVisible : {
            0   : 1
        }
    });
};

export default problems;