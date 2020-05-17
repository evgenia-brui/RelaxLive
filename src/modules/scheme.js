import tabs from './tabs';

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
};

export default scheme;