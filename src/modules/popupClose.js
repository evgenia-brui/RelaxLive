const popupClose = () => {
    const popupCloseButtons = document.querySelectorAll('.popup > .close');

    popupCloseButtons.forEach(item => item.addEventListener('click', event => {
        event.currentTarget.parentNode.style.visibility = 'hidden';
    }));
};

export default popupClose;