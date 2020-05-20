import tabs from './tabs';
import sliderLine from './sliderLine';

const designs = () => {
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
};

export default designs;