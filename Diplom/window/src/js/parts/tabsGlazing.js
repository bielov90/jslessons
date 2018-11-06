function tabsGlazing() {

    let tabLinc = document.querySelectorAll('.tab-link'),
        info = document.querySelector('.glazing_slider'),
        tabFoto = document.querySelectorAll('.tab-foto'),
        glazingBlock = document.querySelectorAll('.glazing_block'),
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
            if(target && target.classList.contains('glazing_block')) {
                for (let i = 0; i < glazingBlock.length; i++) {
                    if (target == glazingBlock[i]) {
                        hideTabsContent(0);
                        showTabsContent(i);
                        break;
                    }
                }
            }
        });
}
export default tabsGlazing;

