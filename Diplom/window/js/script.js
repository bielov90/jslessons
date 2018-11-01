window.addEventListener('DOMContentLoaded', function(){

    'use strict';
    //Modal popup_engineer
    let headerBtnWrapBlock = document.querySelector('.header_btn_wrap_block'),
        popupEngineer = document.querySelector('.popup_engineer'),
        close1 = document.getElementsByClassName('popup_close')[1];
    
    
    headerBtnWrapBlock.addEventListener('click', function(){
        popupEngineer.style.display = 'block';
    });
    close1.addEventListener('click', function() {
        popupEngineer.style.display = 'none';
    });
    
    // popupEngineer.addEventListener('click', function() {
    //     popupEngineer.style.display = 'none';
    // });
    //Modal popup
    let phoneLink = document.getElementsByClassName('phone_link'),
        popup = document.querySelector('.popup');
        close = document.getElementsByClassName('popup_close')[0];
        for (let i = 0; i < phoneLink.length; i++){

            phoneLink[i].addEventListener('click', function(){
                popup.style.display = 'block';
                this.classList.add('popup_engineer');
                
            });
            setTimeout(function() {
                popup.style.display = 'block';
              }, 60000);
            close.addEventListener('click', function() {
                popup.style.display = 'none';
                phoneLink[i].classList.remove('popup_engineer');
            });
            
        }

    // Timer
    let deadline = '2018-11-03';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60) % 24)),
            days = Math.floor((t/(1000*60*60*24)));

            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (hours < 10) {
                hours = "0" + hours;
            } 
            if (days < 10) {
                days = "0" + days;
            } 
            if (t <= 0) {
                days = "00";
                hours = "00";
                minutes = "00";
                seconds = "00";
            }
            return {
                'total' : t,
                'days' : days,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
        
    }
   
    function setClock (id, endTime){
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock(){
            let t = getTimeRemaining(endTime);
            days.textContent = t.days;
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
            
        }
        
    }
    setClock('timer', deadline);

   
});