import popupMenuToggle from './popupMenuToggle';

const fullListServices = () => {
    const linkList = document.querySelectorAll('.link-list'),
        popupRepairTypes = document.querySelector('.popup-repair-types');

    linkList.forEach(item => item.addEventListener('click', event => {
        if (event.currentTarget.classList.contains('link-list-menu')) {
            popupMenuToggle();
        }

        popupRepairTypes.classList.toggle('visible');
    }));
};

export default fullListServices;