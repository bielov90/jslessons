window.addEventListener('DOMContentLoaded', function(){

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });


    //таймер 

    let deadline = '2018-10-24';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (hours < 10) {
                hours = "0" + hours;
            } 
            if (t <= 0) {
                hours = "00";
                minutes = "00";
                seconds = "00";
            }
            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
        
    }
   
    function setClock (id, endTime){
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock(){
            let t = getTimeRemaining(endTime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
            
        }
        
    }
    setClock('timer', deadline);


    //Modal 
   
    let more = document.querySelector('.more'),
        descriptionBtn = document.querySelectorAll('.description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');
       console.log(descriptionBtn)

        more.classList.add("mor");
        for (let i = 0; i < descriptionBtn.length; i++){
        descriptionBtn[i].classList.add("mor");
        };
        let mor = document.getElementsByClassName('mor');

       for (let i = 0; i < mor.length; i++){

        mor[i].addEventListener('click', function(){
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
        close.addEventListener('click', function() {
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
        });

       }
     
       

});