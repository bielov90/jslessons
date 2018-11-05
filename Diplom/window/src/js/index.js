import modal from './parts/modal';
import modalForms from './parts/modalForms';
import inputs from './parts/inputs';
import tabsGlazing from './parts/tabsGlazing';
import tabsDecoration from './parts/tabsDecoration';
import calc from './parts/calc';
import photos from './parts/photos';
import timer from './parts/timer';

window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    modal();
    modalForms();
    inputs();
    tabsGlazing();
    tabsDecoration();
    calc();
    photos();
    timer();
});
