function modal() {
    let popupEngineerBtn = document.querySelector('.popup_engineer_btn'),
        popupEngineer = document.querySelector('.popup_engineer'),
        close1 = document.getElementsByClassName('popup_close')[1];

        popupEngineerBtn.addEventListener('click', function(){
            event.preventDefault();
            popupEngineer.style.display = 'block';
        });

    close1.addEventListener('click', function() {
        popupEngineer.style.display = 'none';
    });

    popupEngineer.addEventListener('click', function(event) {
        if (event.target === popupEngineer) {
            popupEngineer.style.display = 'none';
        }
    });
//Modal popup
let phoneLink = document.getElementsByClassName('phone_link'),
    popup = document.querySelector('.popup'),
    close = document.getElementsByClassName('popup_close')[0];
    for (let i = 0; i < phoneLink.length; i++){
            phoneLink[i].addEventListener('click', function(){
                event.preventDefault();
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

}
export default modal;