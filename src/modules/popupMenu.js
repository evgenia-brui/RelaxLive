import popupMenuToggle from './popupMenuToggle';

const popupMenu = () => {
    const menuButtonOpen = document.querySelector('.menu'),
        menuButtonClose = document.querySelector('.close-menu');

    menuButtonOpen.addEventListener('click', () => {
        popupMenuToggle();
    });

    menuButtonClose.addEventListener('click', () => {
        popupMenuToggle();
    });
};

export default popupMenu;