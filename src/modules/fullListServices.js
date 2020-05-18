import popupMenuToggle from './popupMenuToggle';
import tabs from './tabs';
import sliderLine from './sliderLine';

const fullListServices = () => {
    const linkList = document.querySelectorAll('.link-list'),
        popupRepairTypes = document.querySelector('.popup-repair-types'),
        popupRepairDate = document.querySelector('.popup-repair-types-content__head-date'),
        popupRepairNavList = document.querySelector('.nav-list-popup-repair'),
        popupRepairTable = document.querySelector('.popup-repair-types-content-table');

    const popupRepairRender = data => {
        popupRepairDate.textContent = data[0].date;
        popupRepairNavList.textContent = '';
        popupRepairTable.textContent = '';

        data.forEach((tableItem, index) => {
            if (index > 0) {
                const button = document.createElement('button');
                button.classList.add('button_o', 'popup-repair-types-nav__item');
                button.setAttribute('data-tab-button', index);
                button.textContent = tableItem.title;
                popupRepairNavList.append(button);

                const table = document.createElement('table');
                table.classList.add('popup-repair-types-content-table__list');
                table.setAttribute('data-tab-content', index);

                tableItem.priceList.forEach(trItem => {
                    const tr = document.createElement('tr');
                    tr.classList.add('mobile-row', 'showHide');

                    let beautifulUnits = trItem.units;
                    if (beautifulUnits === 'м2') beautifulUnits = 'м<sup>2</sup>';

                    tr.innerHTML = `
                        <tbody>
                            <td class="repair-types-name">${trItem.typeService}</td>
                            <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
                            <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
                            <td class="repair-types-value">${beautifulUnits}</td>
                            <td class="repair-types-value">${trItem.cost} руб.</td>
                        </tbody>
                    `;

                    table.append(tr);
                });

                popupRepairTable.append(table);
            }
        });

        tabs({
            classMainTabs     : '.popup-dialog-repair-types',
            classTitleTabs    : '.popup-repair-types-content__head-title',
            classButtons      : '.nav-list-popup-repair',
            classButton       : '.popup-repair-types-nav__item',
            classButtonActive : 'active',
            classContents     : '.popup-repair-types-content-table',
            classContent      : '.popup-repair-types-content-table__list',
            classContentActive: 'active',
        });

        sliderLine({
            classList       : '.nav-list-popup-repair',
            classNav        : '.nav-popup-repair-types',
            classButton     : 'button',
            classButtonLeft : '#nav-arrow-popup-repair_left',
            classButtonRight: '#nav-arrow-popup-repair_right',
        });
    };

    linkList.forEach(item => item.addEventListener('click', event => {

        fetch('./db/db.json', {
            method: 'GET'
        })
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                return (response.json());
            })
            .then(response => {
                popupRepairRender(response);
            })
            .catch(error => {
                console.error(error);
            });

        if (event.currentTarget.classList.contains('link-list-menu')) {
            popupMenuToggle();
        }

        popupRepairTypes.classList.toggle('visible');
    }));


};

export default fullListServices;