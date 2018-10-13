let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    title = document.getElementById('title'),
    adv = document.querySelector('.adv'),
    menuItemFi = document.createElement('li'),
    appA = document.getElementById('prompt');



    menuItemFi.classList.add('menu-item');
    menu.insertBefore(menuItem[2], menuItem[1]);
    menu.appendChild(menuItemFi);
    menuItemFi.textContent = "Пятый пункт";
    title.textContent = "Мы продаем только подлинную технику Apple";
    document.body.style.backgroundImage = "url(../lesson_5/img/apple_true.jpg)";
    adv.remove();
    appA.textContent = "Моё отношение к технике Apple: " + prompt('Ваше отношение к технике apple?');
    
    
    

    

