import tabs from './tabs';
import slider from './slider';
import sliderLine from './sliderLine';

const designs = () => {
    const designsSlider = document.querySelector('.designs-slider').children;
    const linkListDesigns = document.querySelector('.link-list-designs');
    const popupDesigns = document.querySelector('.popup-design');

    tabs({
        classMainTabs     : '#designs',
        classButtons      : '#designs-list',
        classButton       : '.designs-nav__item_base',
        classButtonActive : 'active',
        classContents     : '.designs-slider',
        classContent      : '.designs-slider__style',
        classContentActive: 'active',
        dataAdditional    : 'thumbnail',
        dataAdditionalActive: 'visible',
    });

    sliderLine({
        classList       : '#designs-list',
        classNav        : '.nav-designs',
        classButton     : 'button',
        classButtonLeft : '#nav-arrow-designs_left',
        classButtonRight: '#nav-arrow-designs_right',
    });

    for (let i = 1; i <= designsSlider.length; i++) {
        slider({
            sliderBlock        : '#designs',
            sliderItems        : '.designs-slider__style' + i,
            sliderItem         : '.designs-slider__style-slide',
            sliderItemActive   : 'active-item',
            sliderThumbnail    : '.preview-block__item',
            sliderPagination   : true,
            sliderCurrentSlide : '.slider-counter-content__current',
            sliderTotalSlide   : '.slider-counter-content__total',
            sliderNav          : '.slider-arrow-tablet-mobile',
            sliderPrev         : '#design_left',
            sliderNext         : '#design_right',
        });
    }

    linkListDesigns.addEventListener('click', () => {
        popupDesigns.classList.toggle('visible');
    });

    tabs({
        classMainTabs     : '.popup-dialog-design',
        classButtons      : '#nav-list-popup-designs',
        classButton       : '.designs-nav__item_popup',
        classButtonActive : 'active',
        classContents     : '.popup-design-tab',
        classContent      : '.popup-design-tab__item',
        classContentActive: 'active',
    });

    sliderLine({
        classList       : '#nav-list-popup-designs',
        classNav        : '.nav-designs',
        classButton     : 'button',
        classButtonLeft : '#nav-arrow-popup-designs_left',
        classButtonRight: '#nav-arrow-popup-designs_right',
    });

    for (let i = 1; i <= designsSlider.length; i++) {
        slider({
            sliderBlock        : '.popup-design-slider-wrap' + i,
            sliderItems        : '.popup-designs-slider__style' + i,
            sliderItem         : '.popup-design-slider__style-slide',
            sliderItemActive   : 'active-item',
            sliderDots         : false,
            sliderPagination   : true,
            sliderCurrentSlide : '#popup-designs-counter-' + i + ' .slider-counter-content__current',
            sliderTotalSlide   : '#popup-designs-counter-' + i + ' .slider-counter-content__total',
            sliderNav          : '.popup-arrow',
            sliderPrev         : '#popup_design_left-' + i,
            sliderNext         : '#popup_design_right-' + i,
            sliderAutoplay     : false,
            sliderSpeed        : 10000,
        });
    }
};

export default designs;