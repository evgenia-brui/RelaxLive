const popupOpenConsultation = () => {
    const buttonWide = document.querySelectorAll('.button_wide'),
        popupConsultation = document.querySelector('.popup-consultation');

    buttonWide.forEach(item => item.addEventListener('click', () => {
        popupConsultation.classList.toggle('visible');
    }));
};

export default popupOpenConsultation;