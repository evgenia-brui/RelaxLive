const popupMenu = () => {
    const menuButtonOpen = document.querySelector('.menu'),
        menuButtonClose = document.querySelector('.close-menu'),
        menuDialog = document.querySelector('.popup-dialog-menu'),
        menuOpen = 'showHide-menu';

    menuButtonOpen.addEventListener('click', () => {
        menuDialog.classList.add(menuOpen);
    });

    menuButtonClose.addEventListener('click', () => {
        menuDialog.classList.remove(menuOpen);
    });
};

export default popupMenu;