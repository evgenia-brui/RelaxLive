const showSecondPhone = () => {
    const arrow = document.querySelector('.header-contacts__arrow'),
        accordPhone = document.querySelector('.header-contacts__phone-number-accord');

    arrow.addEventListener('click', () => {
        accordPhone.classList.toggle('show-second-phone');
    });
};

export default showSecondPhone;