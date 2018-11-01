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
    
    //Modal popup
    let phoneLink = document.getElementsByClassName('phone_link'),
        popup = document.querySelector('.popup');
        close = document.getElementsByClassName('popup_close')[0];
        for (let i = 0; i < phoneLink.length; i++){

            phoneLink[i].addEventListener('click', function(){
                popup.style.display = 'block';
                this.classList.add('popup_engineer');
            });
            close.addEventListener('click', function() {
                popup.style.display = 'none';
                phoneLink[i].classList.remove('popup_engineer');
            });
        }
});