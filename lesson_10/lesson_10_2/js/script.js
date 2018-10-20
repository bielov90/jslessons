'use strict';

    class Option {
        constructor () {
            let div = document.createElement('div');
            document.body.appendChild(div);
            div.style.cssText="height: 100px; \
                                width: 100px; \
                                background-color: yellow; \
                                font-size: 14px; \
                                text-align: center; \
                                ";
        }
    }
    let newDiv = new Option();
      