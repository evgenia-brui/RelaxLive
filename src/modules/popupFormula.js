import slider from './slider';

const popupFormula = () => {
    const formula = document.querySelectorAll('.formula-item');

    formula.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('active-item');
            const popup = item.querySelector('.formula-item-popup');
            if (popup.getBoundingClientRect().y < 5) {
                popup.classList.add('formula-item-popup-bottom');
            }
        });
        item.addEventListener('mouseout', () => {
            item.classList.remove('active-item');
            const popupBottom = item.querySelector('.formula-item-popup-bottom');
            if (popupBottom) popupBottom.classList.remove('formula-item-popup-bottom');
        });
    });

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
};

export default popupFormula;