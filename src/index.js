'use strict';
import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import 'element-closest';
import 'mdn-polyfills/Node.prototype.append';
import "mdn-polyfills/Node.prototype.prepend";
import 'mdn-polyfills/Element.prototype.matches';
import 'mdn-polyfills/Node.prototype.remove';

import elementClosest from 'element-closest';
import showSecondPhone from './modules/showSecondPhone';
import popupMenu from './modules/popupMenu';
import smoothScroll from './modules/smoothScroll';
import fullListServices from './modules/fullListServices';
import popupClose from './modules/popupClose';
import popupPrivacy from './modules/popupPrivacy';
import maskPhone from './modules/maskPhone';
import accordion from './modules/accordion';
import popupOpenConsultation from './modules/popupOpenConsultation';
import popupFormula from './modules/popupFormula';
import repairTypes from './modules/repairTypes';
import partners from './modules/partners';
import scheme from './modules/scheme';
import reviews from './modules/reviews';
import sendForm from './modules/sendForm';
import transparency from './modules/transparency';
import problems from './modules/problems';
import designs from './modules/designs';
import portfolio from './modules/portfolio';
import validation from './modules/validation';

// Полифил closest
elementClosest(window);

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

// Маска телефона
maskPhone();

// Валидация полей
validation();

// accordion
accordion();

// Открыть окно консультации
popupOpenConsultation();

// Подсказки в блоке Формула успешности
popupFormula();

// Виды ремонта
repairTypes();

// Партнеры
partners();

// Как мы работаем
scheme();

// Отзывы
reviews();

// Отправка формы
sendForm();

// Документы
transparency();

// Какие проблемы решаем
problems();

// Дизайнерские решения
designs();

// Портфолио
portfolio();