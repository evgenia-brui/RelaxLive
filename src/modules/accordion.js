const accordion = () => {
    const accordion = document.querySelector('.accordion');

    accordion.addEventListener('click', event => {
        let target = event.target;

        if (target.classList.contains('title_block')) {
            // Удалим класс с активного
            document.querySelector('.accordion .msg-active').classList.remove('msg-active');
            // Добавим класс нажатому блоку
            target.classList.add('msg-active');
        }
    });
};

export default accordion;