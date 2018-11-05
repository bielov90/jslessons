function tabsDecoration() {

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
}
export default tabsDecoration;