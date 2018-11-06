function tabsDecoration() {

    let tab = document.querySelectorAll(".decoration-div"),
        decorDiv = document.querySelectorAll(".decor-div"),
        decorLink = document.querySelectorAll(".decoration-link"),
        tabContent = document.querySelectorAll(".tabs-contenet");

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            decorDiv[i].classList.remove("after_click");
            decorDiv[i].classList.add("no_click");
            decorLink[i].classList.remove("click_div");
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    }
  hideTabContent(1);

    function showTabContent(b) {
        decorDiv[b].classList.remove("no_click");
        decorDiv[b].classList.add("after_click");
        decorLink[b].classList.add("click_div");
        tabContent[b].classList.add("show");
        tabContent[b].classList.remove("hide");
    }

  tab.forEach(function(link, index) {
    link.addEventListener("click", function(event) {
      for (let i = 0; i < tab.length; i++) {
        if (event.target == decorDiv[i] || event.target == decorLink[i]) {
          hideTabContent(0);
          showTabContent(index);
          break;
        }
      }
    });
  });
}
export default tabsDecoration;