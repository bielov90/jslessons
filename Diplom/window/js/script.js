window.addEventListener('DOMContentLoaded', function(){

    'use strict';
    //Modal popup_engineer
    let popupEngineerBtn = document.querySelector('.popup_engineer_btn'),
        popupEngineer = document.querySelector('.popup_engineer'),
        close1 = document.getElementsByClassName('popup_close')[1];
    
    
        popupEngineerBtn.addEventListener('click', function(){
        popupEngineer.style.display = 'block';
    });
    close1.addEventListener('click', function() {
        popupEngineer.style.display = 'none';
    });
    
    popupEngineer.addEventListener('click', function(event) {
        if (event.target === popupEngineer)
        popupEngineer.style.display = 'none';
    });
    //Modal popup
    let phoneLink = document.getElementsByClassName('phone_link'),
        popup = document.querySelector('.popup'),
        close = document.getElementsByClassName('popup_close')[0];
        for (let i = 0; i < phoneLink.length; i++){

            phoneLink[i].addEventListener('click', function(){
                popup.style.display = 'block';
            });
         
            
        }
        close.addEventListener('click', function() {
            popup.style.display = 'none';
        });
        popup.addEventListener('click', function(event) {
            if (event.target === popup)
            popup.style.display = 'none';
        });
        setTimeout(function() {
            popup.style.display = 'block';
          }, 60000);

    // Timer
    let deadLine = '2018-11-03';

function getTimeRemaining(endtime) {
  let date = new Date();
  let currentDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
  let diff = Date.parse(endtime) - Date.parse(currentDate),
    seconds = Math.floor((diff / 1000) % 60),
    minutes = Math.floor((diff / 1000 / 60) % 60),
    hours = Math.floor((diff / 1000 / 60 / 60) % 24),
    days = Math.floor((diff / (1000 * 60 * 60 * 24)));

  if (diff <= 0) {
    return {
      'total': 0,
      'days': "00",
      'hours': "00",
      'minutes': "00",
      'seconds': "00"
    };
  }
  return {
    'total': diff,
    'days': convertParam(days),
    'hours': convertParam(hours),
    'minutes': convertParam(minutes),
    'seconds': convertParam(seconds)
  };

}

function convertParam(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}

function setClock(id, endTime) {
  let timer = document.getElementById(id),
    days = timer.querySelector('.days'),
    hours = timer.querySelector('.hours'),
    minutes = timer.querySelector('.minutes'),
    seconds = timer.querySelector('.seconds'),
    timeInterval = setInterval(updateClock, 1000);

  function updateClock() {
    let diff = getTimeRemaining(endTime);
    days.textContent = diff.days;
    hours.textContent = diff.hours;
    minutes.textContent = diff.minutes;
    seconds.textContent = diff.seconds;

    if (diff.total <= 0) {
      clearInterval(timeInterval);
    }

  }

}
setClock('timer', deadLine);
    // tabs - window

    let tabLinc = document.querySelectorAll('.tab-link'),
        info = document.querySelector('.glazing_slider'),
        tabFoto = document.querySelectorAll('.tab-foto'),
        tabContent = document.querySelectorAll('.tab-contenet');
        
        function hideTabsContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
                tabLinc[i].classList.remove('active');
            }
        }
        hideTabsContent(1);

        function showTabsContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
                tabLinc[b].classList.add('active');
                
            }
        }

        info.addEventListener('click', function(event) {
            let target = event.target;
            if(target && target.classList.contains('tab-link')) {
                for (let i = 0; i < tabLinc.length; i++) {
                    if (target == tabLinc[i]) {
                        hideTabsContent(0);
                        showTabsContent(i);
                        break;
                    }
                }
            }
            if(target && target.classList.contains('tab-foto')) {
                for (let i = 0; i < tabFoto.length; i++) {
                    if (target == tabFoto[i]) {
                        hideTabsContent(0);
                        showTabsContent(i);
                        break;
                    }
                }
            }
        });

          // tabs - finish

        let clickLink = document.querySelectorAll('.click_link'),
            decorSlider = document.querySelector('.decoration_slider'),
            tabsContent = document.querySelectorAll('.tabs-contenet'),
            noСlick = document.getElementsByClassName('no_click');


      function hideContent(a) {
          for (let i = a; i < tabsContent.length; i++) {
                tabsContent[i].classList.remove('show');
                tabsContent[i].classList.add('hide');
                noСlick[i].classList.remove('after_click');
          }
      }
  
      hideContent(1);
  
      function showContent(b) {
          if (tabsContent[b].classList.contains('hide')) {
            tabsContent[b].classList.remove('hide');
            tabsContent[b].classList.add('show');
            noСlick[b].classList.add('after_click');
          }
      }
  
      decorSlider.addEventListener('click', function(event){
          let target = event.target;
          if(target && target.classList.contains('click_link')) {
              for(let i = 0; i < clickLink.length; i++) {
                  if(target == clickLink[i]) {
                      hideContent(0);
                      showContent(i);
                      break;
                  }
              }
          }
      });

      //Form

      let massege = {
          loading: "Отправка.....",
          success: "Отправлено!",
          failure: "Ошибка"
      };
    let formDom = document.querySelectorAll('.form'),
        statusMassege = document.createElement('div');
        
        statusMassege.classList.add('status');
      for (let i = 0; i < formDom.length; i++) {
          let input = formDom[i].getElementsByTagName('input');
            formDom[i].addEventListener('submit', function(event) {
                event.preventDefault();
                formDom[i].appendChild(statusMassege);

                let request = new XMLHttpRequest();
                    request.open('GET', 'server.php');
                    request.setRequestHeader ('Content-Type', 'application/x-www-form-urlencoded');

                    let formData = new FormData(formDom); 
                    request.send(formData);
                    request.addEventListener('readystatechange', function(){
                        if (request.readyState < 4) {
                            statusMassege.innerHTML = massege.loading;
                        } else if (request.readyState === 4 && request.status == 200) {
                            statusMassege.innerHTML = massege.success;
                        } else {
                            statusMassege.innerHTML = massege.failure;
                        }
                    });
                        for (let i = 0; i < input.length; i++){
                            input[i].value = '';
                        }
            });
        }
  // calc
        let popupCalcBtn = document.querySelectorAll(".popup_calc_btn"),
            popupCalc = document.querySelector(".popup_calc"),
            popupCalcProfile = document.querySelector(".popup_calc_profile"),
            popupCalcEnd = document.querySelector(".popup_calc_end"),
            popupCalcButton = document.querySelector(".popup_calc_button"),
            popupCalcProfileButton = document.querySelector(".popup_calc_profile_button"),
            popupCalcClose = document.querySelectorAll(".popup_calc_close"),
            popupCloes = [popupCalc, popupCalcProfile, popupCalcEnd],
            balconIcons = document.querySelectorAll(".balcon_icons > a > img"),
            balconBig = document.querySelectorAll(".big_img > img"),
            coldBox = document.querySelector(".cold-box"),
            warmBox = document.querySelector(".warm-box"),
            formCalcFinish = document.querySelector(".form-calc-finish"),
            formData = new FormData(),
            statusMessage = document.createElement("div"),
            message = {
                loading: "Отправка",
                success: "Замены отправлены, мы скоро с вами свяжемся.",
                failure: "Произошла ошибка"
            };

        popupCalcBtn.forEach(function(btn) {
            btn.addEventListener("click", function() {
                popupCalc.style.display = "block";
                popupCalc.classList.remove("hide");
            });
        });

        popupCalcClose.forEach(function(x) {
            x.addEventListener("click", function() {
                popupCloes.forEach(function(item) {
                    item.style.display = "none";
                    item.classList.remove("hide"); 
                    item.classList.remove("fade");
                clearInputs();
                });
            });
        });

        balconIcons.forEach(function(icon, index) {
            icon.addEventListener("click", function(event) {
                event.preventDefault();
                balconIcons.forEach(function(icon) {
                    icon.style.width = "20%";
                    icon.classList.remove("choosen");
                });
                balconBig.forEach(function(img) {
                    img.style.display = "none";
                });
                this.style.width = "30%";
                this.classList.add("choosen");
                balconBig[index].style.display = "inline-block";
            });
        });

        popupCalcButton.addEventListener("click", function() {
            let width = document.querySelector("#width").value,
                height = document.querySelector("#height").value,
                type = document.querySelector(".choosen");

            if (width == "" || height == "" || type == null) {
                alert("Выбирите форму балкона, высоту и ширину");
            } else {
                formData.append("Форма: ", type.alt);
                formData.append("Ширина: ", width);
                formData.append("Высота: ", height);
                popupCalc.style.display = "none";
                popupCalcProfile.style.display = "block";
            }
        });

        coldBox.addEventListener("click", function() {
            warmBox.checked = false;
        });

        warmBox.addEventListener("click", function() {
            coldBox.checked = false;
        });

        popupCalcProfileButton.addEventListener("click", function() {
            let viewType = document.querySelector("#view_type").value;

            if (!warmBox.checked && !coldBox.checked) {
                    alert("Выберите тип профиля.");
                } else {
                if (coldBox.checked) {
                    formData.append("Профиль: ", "cold");
                } else {
                    formData.append("Профиль: ", "warm");
                }
                formData.append("Остекление: ", viewType);
                popupCalcProfile.style.display = "none";
                popupCalcEnd.style.display = "block";
            }
        });

        function clearInputs() {
            let inputs = document.querySelectorAll("input");

            inputs.forEach(function(input) {
                input.value = "";
            });
            formData = new FormData();
        }

        formCalcFinish.addEventListener("submit", function(event) {
            event.preventDefault();
            let name = document.querySelector("#calc_user_name").value,
                phone = document.querySelector("#calc_phone").value;

            formData.append("Имя: ", name);
            formData.append("Телефон: ", phone);

            formCalcFinish.appendChild(statusMessage);

            function postData(data) {
                return new Promise(function(resolve, reject) {
                    let request = new XMLHttpRequest();

                    request.open("POST", "server.php");
                    request.setRequestHeader(
                    "Content-Type",
                    "application/json; charset=utf-8"
                    );

                    request.onreadystatechange = function() {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4) {
                    if (request.status == 200 && request.status < 300) {
                        resolve();
                    }
                    } else {
                    reject();
                    }
            };
            let obj = {};
                formData.forEach(function(value, key){
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);
            request.send(json);
        });
}
postData(formData)
    .then(() => (statusMessage.innerHTML = message.loading))
    .then(() => (statusMessage.innerHTML = message.success))
    .catch(() => (statusMessage.innerHTML = message.failure))
    .then(clearInputs);
});
      

});