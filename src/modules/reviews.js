import slider from './slider';

const reviews = () => {
    slider({
        sliderBlock        : '.reviews-slider-wrap',
        sliderItems        : '.reviews-slider',
        sliderItem         : '.reviews-slider__slide',
        sliderItemActive   : 'active-item',
        sliderNav          : '.slider-arrow',
        sliderPrev         : '#reviews-arrow_left',
        sliderNext         : '#reviews-arrow_right',
    });
};

export default reviews;