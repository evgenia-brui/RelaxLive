import tabs from './tabs';
import slider from './slider';
import sliderLine from './sliderLine';

const portfolio = () => {
    const sliderPortfolio = document.querySelector('.portfolio-slider');
    const linkPhotoPortfolio = sliderPortfolio.querySelectorAll('.portfolio-slider__slide-frame');
    const popupPortfolio = document.querySelector('.popup-portfolio');
    const portfolio = document.querySelectorAll('.popup-portfolio-text');
    portfolio[0].classList.add('active-text');

    linkPhotoPortfolio.forEach((item, index) => item.addEventListener('click', () => {
        sliderPortfolio.setAttribute('data-slide-click', index);
        popupPortfolio.classList.toggle('visible');
        popupPortfolio.querySelector('.active-text').classList.remove('active-text');
        portfolio[index].classList.add('active-text');
    }));
    
    slider({
        sliderBlock        : '.popup-portfolio-slider-wrap',
        sliderItems        : '.popup-portfolio-slider',
        sliderItem         : '.popup-portfolio-slider__slide',
        sliderItemActive   : 'active-item',
        sliderPagination   : true,
        sliderCurrentSlide : '.slider-counter-content__current',
        sliderTotalSlide   : '.slider-counter-content__total',
        sliderNav          : '.popup-arrow',
        sliderPrev         : '#popup_portfolio_left',
        sliderNext         : '#popup_portfolio_right',
        sliderPortfolio    : true,
    });

    /*
    const designsSlider = document.querySelector('.designs-slider').children;

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
            sliderNav          : '.slider-arrow',
            sliderPrev         : '#partners-arrow_left',
            sliderNext         : '#partners-arrow_right',
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
    */
};

export default portfolio;