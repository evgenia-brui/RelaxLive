'use strict';
import '@babel/polyfill';
import 'nodelist-foreach-polyfill';

import showSecondPhone from './modules/showSecondPhone';
import popupMenu from './modules/popupMenu';

// Показ второго телефона в шапке
showSecondPhone();

// Показ меню
popupMenu();