import slider from './slider';
import tabs from './tabs';

const repairTypes = () => {
    const repairTypesSlider = document.querySelector('.repair-types-slider');

    for (let elem of repairTypesSlider.children) {
        slider({
            sliderBlock        : '.repair-types-slider-wrap',
            sliderItems        : '.' + elem.classList[0],
            sliderItem         : '.repair-types-slider__slide',
            sliderItemActive   : 'active-item',
            sliderDots         : false,
            sliderNav          : '.slider-arrow',
            sliderPrev         : '#repair-types-arrow_left',
            sliderNext         : '#repair-types-arrow_right',
            sliderAutoplay     : false,
            sliderSpeed        : 10000,
        });
    }

    tabs({
        classButtons      : '.nav-list-repair',
        classButton       : '.repair-types-nav__item',
        classButtonActive : 'active',
        classContents     : '.repair-types-slider',
        classContent      : '.types-repair',
        classContentActive: 'active',
    });
};

export default repairTypes;