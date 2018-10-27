function modals() {
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
   
}

export default  modals;