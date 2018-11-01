window.addEventListener('DOMContentLoaded', function(){

    'use strict';
    
    let headerBtnWrapBlock = document.querySelector('.header_btn_wrap_block'),
        popup = document.querySelector('.popup'),
        close = document.querySelector('.popup_close');
    
    
    headerBtnWrapBlock.addEventListener('click', function(){
        popup.style.display = 'block';
        this.classList.add('popup_engineer');
    });
    close.addEventListener('click', function() {
        popup.style.display = 'none';
        headerBtnWrapBlock.classList.remove('popup_engineer');
    });
    



});