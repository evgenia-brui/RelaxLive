const popupFormula = () => {
    const formula = document.querySelectorAll('.formula-item');

    formula.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('active-item');
            const popup = item.querySelector('.formula-item-popup');
            if (popup.getBoundingClientRect().y < 5) {
                popup.classList.add('formula-item-popup-bottom');
            }
        });
        item.addEventListener('mouseout', () => {
            item.classList.remove('active-item');
            const popupBottom = item.querySelector('.formula-item-popup-bottom');
            if (popupBottom) popupBottom.classList.remove('formula-item-popup-bottom');
        });
    });
};

export default popupFormula;