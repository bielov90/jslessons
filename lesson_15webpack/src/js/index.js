import calc from './parts/calc.js';
import forms from './parts/forms.js';
import slider from './parts/slider.js';
import tabs from './parts/tabs.js';
import timer from './parts/timer.js';
import modals from './parts/modals.js';





window.addEventListener('DOMcontentLoaded', () => {

    "use strict"

        calc();
        forms();
        slider();
        tabs();
        timer();
        modals();

});