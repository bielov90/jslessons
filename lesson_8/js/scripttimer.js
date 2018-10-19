window.addEventListener('DOMContentLoaded', function(){

    'use strict';
    function timeStart() {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
      }
      setInterval(timeStart, 1000);
});