const tabs = params => {
    const {
        classMainTabs,
        classButtons,
        classButton,
        classButtonActive,
        classContents,
        classContent,
        classContentActive,
    } = params;
    
    const tabsBlock = document.querySelector(classMainTabs),
        listButtons = document.querySelector(classButtons),
        listContents = document.querySelector(classContents),
        tabsButtons = document.querySelectorAll(classButton);

    tabsBlock.setAttribute('data-current-tab', 1);
    document.querySelector(classButton).classList.add(classButtonActive);
    document.querySelector(classContent).classList.add(classContentActive);

    tabsButtons.forEach(button => button.addEventListener('click', event => {
        let target = event.target;
        const showId = target.getAttribute('data-tab-button');

        tabsBlock.setAttribute('data-current-tab', showId);

        listButtons.querySelector(classButton + '.' + classButtonActive).classList.remove(classButtonActive);
        target.classList.add(classButtonActive);

        listContents.querySelector(classContent + '.' + classContentActive).classList.remove(classContentActive);
        listContents.querySelector(`[data-tab-content="${showId}"]`).classList.add(classContentActive);
    }));
};

export default tabs;

/*
На кнопках табов должен быть атрибут data-tab-button="1"
На контенте табов должен быть атрибут data-tab-content="1"
*/