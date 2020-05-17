import slider from './slider';

const partners = () => {
    slider({
        sliderBlock        : '#partners .wrapper',
        sliderItems        : '.partners-slider',
        sliderItem         : '.partners-slider__slide',
        sliderItemActive   : 'active-item',
        sliderNav          : '.slider-arrow',
        sliderPrev         : '#partners-arrow_left',
        sliderNext         : '#partners-arrow_right',
        sliderItemsVisible : {
            900 : 3,
            0   : 1
        }
    });
};

export default partners;