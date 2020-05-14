'use strict';
import '@babel/polyfill';
import 'nodelist-foreach-polyfill';

import showSecondPhone from './modules/showSecondPhone';
import popupMenu from './modules/popupMenu';
import smoothScroll from './modules/smoothScroll';

// Показ второго телефона в шапке
showSecondPhone();

// Показ меню
popupMenu();

// Плавная прокрутка
const linkAnchors = document.querySelectorAll('a[href^="#"]');
linkAnchors.forEach(item => item.addEventListener('click', smoothScroll));