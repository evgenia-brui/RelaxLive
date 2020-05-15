import popupMenuToggle from './popupMenuToggle';

const popupMenu = () => {
    const menuButtonOpen = document.querySelector('.menu');

    menuButtonOpen.addEventListener('click', () => {
        document.querySelector('.popup-menu').classList.toggle('visible');
        popupMenuToggle();
    });

    const popup = document.querySelector('.popup-menu');

    popup.addEventListener('click', event => {
        let target = event.target;

        if (target.classList.contains('close-menu') || !target.closest('.popup-dialog-menu')) {
            popupMenuToggle();
        }
    });
};

export default popupMenu;