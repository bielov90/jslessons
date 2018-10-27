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

    let deadline = '2018-10-28';

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
       // Form 1

       let message = {
           loading: "Загрузка....",
           success: "Спасибо, скоро мы свами свяжемся",
           failure: "Что-то пошло не так...."
       };

       let form = document.querySelector('.main-form'),
            input = form.getElementsByTagName('input'),
            statusMassage = document.createElement('div');
            
            statusMassage.classList.add('status');
            for(let i = 0; i < input.length; i++) {
                input[i].addEventListener('input', () => {
                    input[i].value = input[i].value.replace(/[^\+\d]/g, '');
                });
            }
       
           

    form.addEventListener('submit', function(event) {

        event.preventDefault();
        form.appendChild(statusMassage);


        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);
       
        request.addEventListener('readystatechange', function(){
            if (request.readyState < 4) {
                statusMassage.innerHTML = message.loading;

            } else if (request.readyState === 4 && request.status == 200) {
                statusMassage.innerHTML = message.success;
            } else {
                statusMassage.innerHTML = message.failure;
            }
        });
        
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
           
        }


        // Fotm 2

  });



        let formC = document.getElementById('form'),
            inputC = formC.getElementsByTagName('input');
            //namberPhone = formC.getElementsByTagName('input')[1];
      
       
            
    formC.addEventListener('submit', function(event) {
        event.preventDefault();
        formC.appendChild(statusMassage);


        let requestC = new XMLHttpRequest();
        requestC.open('POST', 'server.php');
        requestC.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formDataC = new FormData(formC);

        let obC = {};
        formDataC.forEach(function(value, key) {
            obC[key] = value;
        });
        let jsonC = JSON.stringify(obC);

        requestC.send(jsonC);
       
        requestC.addEventListener('readystatechange', function(){
            if (requestC.readyState < 4) {
                statusMassage.innerHTML = message.loading;

            } else if (requestC.readyState === 4 && requestC.status == 200) {
                statusMassage.innerHTML = message.success;
            } else {
                statusMassage.innerHTML = message.failure;
            }
        });
        
        for (let i = 0; i < inputC.length; i++) {
            inputC[i].value = '';
        }
        
    });
     //Slider
  
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dorsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

        showSlides(slideIndex);
    function showSlides (n) {
        if(n > slides.length){
            slideIndex = 1;
        }
        if(n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach((item) => item.style.display = 'none');
        // for (let i = 0; i < slides.length; i++){
        //     slides[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('dot-active'));
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function cuuretSlide(n) {
        showSlides(slideIndex = n);
    }
    prev.addEventListener('click', function() {
        plusSlides(-1)
    });
    next.addEventListener('click', function() {
        plusSlides(1)
    });
    dorsWrap.addEventListener('click', function(event) {
        for(let i = 0; i < dots.length + 1; i++) {
            if(event.target.classList.contains('dot') && event.target == dots[i-1]) {
                cuuretSlide(i);
            }
        }
    });

    //calc

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;
        
        function verifyInputNumbers(elem) {
            elem.value = elem.value.replace(/[^\d]/g);
          };
        persons.addEventListener('input', function() {
            verifyInputNumbers(persons);
            personsSum = +this.value;
            
            total = (daysSum + personsSum)*4000;

            if(restDays.value == '' || restDays.value == 0) {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
            if(persons.value == 0 || restDays.value == 0) {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }

        });
        restDays.addEventListener('input', function() {
            verifyInputNumbers(restDays);
            daysSum = +this.value;
            total = (daysSum + personsSum)*4000;

            if(persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
            if(persons.value == 0 || restDays.value == 0) {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }

        });
        

        place.addEventListener('change', function() {
            if (restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            }
        });

        
});

function check(){   
    if (event.keyCode != 43 && event.keyCode < 48 || event.keyCode > 57)  { 
        event.preventDefault();
    }
  }; 
 
