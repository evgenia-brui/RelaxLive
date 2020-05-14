'use strict';
import '@babel/polyfill';
import 'nodelist-foreach-polyfill';

import showSecondPhone from './modules/showSecondPhone';
import popupMenu from './modules/popupMenu';
import smoothScroll from './modules/smoothScroll';
import fullListServices from './modules/fullListServices';
import popupClose from './modules/popupClose';
import popupPrivacy from './modules/popupPrivacy';

// Показ второго телефона в шапке
showSecondPhone();

// Показ меню
popupMenu();

// Плавная прокрутка
const linkAnchors = document.querySelectorAll('a[href^="#"]');
linkAnchors.forEach(item => item.addEventListener('click', smoothScroll));

// Полный список услуг и цен
fullListServices();

// Закрытие попапов
popupClose();

// Политика конфиденциальности
popupPrivacy();