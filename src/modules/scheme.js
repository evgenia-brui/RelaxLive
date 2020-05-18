import tabs from './tabs';
import sliderLine from './sliderLine';

const scheme = () => {
    tabs({
        classMainTabs     : '#scheme',
        classButtons      : '#scheme-list',
        classButton       : '.scheme-nav__item',
        classButtonActive : 'active',
        classContents     : '.scheme-slider',
        classContent      : '.scheme-slider__slide',
        classContentActive: 'visible-content-block',
    });

    sliderLine({
        classList       : '#scheme-list',
        classNav        : '.nav',
        classButton     : 'button',
        classButtonLeft : '#nav-arrow-scheme_left',
        classButtonRight: '#nav-arrow-scheme_right',
    });
};

export default scheme;