function modalForms() {

   
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

              let formData = new FormData(formDom[i]); 

              let request = new XMLHttpRequest();
                  request.open('POST', 'server.php');
                  request.setRequestHeader ("Content-Type", "application/json; charset=utf-8");
                  request.addEventListener('readystatechange', function(){
                      if (request.readyState < 4) {
                          statusMassege.innerHTML = massege.loading;
                      } else if (request.readyState === 4 && request.status == 200) {
                          statusMassege.innerHTML = massege.success;
                      } else {
                          statusMassege.innerHTML = massege.failure;
                      }
                  });

                  let objc = {};
                  formData.forEach(function(value, key){
                      objc[key] = value;
                  });
                  let jsons = JSON.stringify(objc);
                  request.send(jsons);

                      for (let i = 0; i < input.length; i++){
                          input[i].value = '';
                      }
                      
          });
      }
    
}
export default modalForms;