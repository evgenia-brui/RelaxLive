const showSecondPhone = () => {
    const arrow = document.querySelector('.header-contacts__arrow'),
        accordPhone = document.querySelector('.header-contacts__phone-number-accord'),
        secondPhone = document.querySelector('.header-contacts__phone-number-accord a');

    arrow.addEventListener('click', () => {
        arrow.style.opacity = 0;
        accordPhone.style.top = '25px';
        secondPhone.style.opacity = 1;
    });
};

export default showSecondPhone;