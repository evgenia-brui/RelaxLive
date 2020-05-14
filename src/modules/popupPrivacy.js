const popupPrivacy = () => {
    const linkPrivacy = document.querySelectorAll('.link-privacy'),
        popupPrivacy = document.querySelector('.popup-privacy');

    linkPrivacy.forEach(item => item.addEventListener('click', () => {
        popupPrivacy.style.visibility = 'visible';
    }));
};

export default popupPrivacy;