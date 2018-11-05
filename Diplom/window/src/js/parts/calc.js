function calc(){
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
  formDatas = new FormData(),
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
      formDatas.append("Форма: ", type.alt);
      formDatas.append("Ширина: ", width);
      formDatas.append("Высота: ", height);
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
          formDatas.append("Профиль: ", "cold");
      } else {
          formDatas.append("Профиль: ", "warm");
      }
      formDatas.append("Остекление: ", viewType);
      popupCalcProfile.style.display = "none";
      popupCalcEnd.style.display = "block";
  }
});

function clearInputs() {
  let inputs = document.querySelectorAll("input");

  inputs.forEach(function(input) {
      input.value = "";
  });
 
  formDatas = new FormData();
}

formCalcFinish.addEventListener("submit", function(event) {
  event.preventDefault();
  let name = document.querySelector("#calc_user_name").value,
  phone = document.querySelector("#calc_phone").value;

formDatas.append("Имя: ", name);
formDatas.append("Телефон: ", phone);

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
//    let obj = {};
//           formDatas.forEach(function(value, key){
//               obj[key] = value;
//           });
//           let json = JSON.stringify(obj);
        request.send(data);
  
  
    });
}
postData(formDatas)
.then(() => (statusMessage.innerHTML = message.loading))
.then(() => (statusMessage.innerHTML = message.success))
.catch(() => (statusMessage.innerHTML = message.failure))
.then(clearInputs);
});
}
export default calc;