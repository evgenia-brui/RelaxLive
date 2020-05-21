import tabs from './tabs';
import slider from './slider';
import sliderLine from './sliderLine';

const portfolio = () => {
    const sliderPortfolioWrap = document.querySelector('.portfolio-slider-wrap');
    const sliderPortfolio = sliderPortfolioWrap.querySelector('.portfolio-slider');
    const portfolioSliderSlide = sliderPortfolio.querySelectorAll('.portfolio-slider__slide');
    const linkPhotoPortfolio = sliderPortfolio.querySelectorAll('.portfolio-slider__slide-frame');
    const portfolioSliderNavLeft = sliderPortfolioWrap.querySelector('#portfolio-arrow_left');
    const portfolioSliderNavRight = sliderPortfolioWrap.querySelector('#portfolio-arrow_right');
    const popupPortfolio = document.querySelector('.popup-portfolio');
    const portfolio = document.querySelectorAll('.popup-portfolio-text');

    let pageWidth, slideWidth, visibleSlide = 3, currentSlide = 0;

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
    
    slider({
        sliderBlock        : '.portfolio-slider-wrap',
        sliderItems        : '.portfolio-slider-mobile',
        sliderItem         : '.portfolio-slider__slide-frame',
        sliderItemActive   : 'active-item',
        sliderPagination   : true,
        sliderCurrentSlide : '.slider-counter-content__current',
        sliderTotalSlide   : '.slider-counter-content__total',
        sliderNav          : '.slider-arrow-tablet-mobile',
        sliderPrev         : '#portfolio-arrow-mobile_left',
        sliderNext         : '#portfolio-arrow-mobile_right',
    });

    // Мой слайдер не очень подходит, много нужно разбираться, переделывать

    const getVisibleSlide = () => {
        if (pageWidth > 900) {
            visibleSlide = 3;
        } else if (pageWidth > 800) {
            visibleSlide = 2;
        } else {
            visibleSlide = 1;
        }
        console.log(visibleSlide);
    };

    const renderSlide = () => {
        // получим ширину слайдера formula-slider-wrap
        const sliderWidth = sliderPortfolioWrap.clientWidth;
        // эту ширину делем на количесто слайдов видимых
        slideWidth = sliderWidth / visibleSlide;
        // получаем ширину слайда в px
        // количество слайдов * на ширину и записываем ширину formula-slider
        sliderPortfolio.style.width = slideWidth * portfolioSliderSlide.length + 'px';
        sliderPortfolio.style.transition = 'all 0.25s ease 0s';
        portfolioSliderSlide.forEach(item => {
            item.style.float = 'left';
            item.style.width = slideWidth + 'px';
        });
    };

    const correctCurrentSlide = () => {
        if (currentSlide >= portfolioSliderSlide.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = portfolioSliderSlide.length - 1;
        }

        if (visibleSlide + currentSlide === portfolioSliderSlide.length) {
            portfolioSliderNavRight.classList.add('hide');
        } else {
            portfolioSliderNavRight.classList.remove('hide');
        }

        if (currentSlide > 0) {
            portfolioSliderNavLeft.classList.add('show');
        } else {
            portfolioSliderNavLeft.classList.remove('show');
        }
        console.log(currentSlide, portfolioSliderSlide.length);
    };

    const nextSlide = () => {
        sliderPortfolio.style.transform = `translate3d(${0 - slideWidth * currentSlide}px, 0px, 0px)`;
    };

    portfolioSliderNavLeft.addEventListener('click', () => {
        currentSlide--;
        correctCurrentSlide();
        nextSlide();
    });

    portfolioSliderNavRight.addEventListener('click', () => {
        currentSlide++;
        correctCurrentSlide();
        nextSlide();
    });

    const responsive = () => {
        pageWidth = document.documentElement.clientWidth;
        getVisibleSlide();
        renderSlide();
    };

    responsive();
    window.addEventListener('resize', () => responsive());

};

export default portfolio;