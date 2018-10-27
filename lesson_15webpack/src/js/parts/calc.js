function calc() {
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
  };
   

export default calc;