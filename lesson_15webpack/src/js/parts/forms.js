function forms() {

   
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

 function check(){   
    if (event.keyCode != 43 && event.keyCode < 48 || event.keyCode > 57)  { 
        event.preventDefault();
    }
  }; 
   
}

export default  forms;