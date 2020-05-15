const popupClose = () => {
    const popup = document.querySelectorAll('.popup');

    popup.forEach(item => item.addEventListener('click', event => {
        let target = event.target;

        if (target.classList.contains('close') || !target.closest('.popup-dialog')) {
            item.classList.toggle('visible');
        }
    }));
};

export default popupClose;