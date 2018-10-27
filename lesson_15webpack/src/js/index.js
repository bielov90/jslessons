window.addEventListener('DOMcontentLoaded', function() {

    "use strict"
    let calc = require('./parst/calc.js'),
        forms = require('./parst/forms.js'),
        slider = require('./parst/slider.js'),
        tabs = require('./parst/tabs.js'),
        timer = require('./parst/timer.js'),
        modals = require('./parst/modals.js');

        calc();
        forms();
        slider();
        tabs();
        timer();
        modals();

});