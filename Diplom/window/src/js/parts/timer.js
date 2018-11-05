function timer() {
    let deadLine = '2018-11-03';

function getTimeRemaining(endtime) {
  let date = new Date();
  let currentDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
  let diff = Date.parse(endtime) - Date.parse(currentDate),
    seconds = Math.floor((diff / 1000) % 60),
    minutes = Math.floor((diff / 1000 / 60) % 60),
    hours = Math.floor((diff / 1000 / 60 / 60) % 24),
    days = Math.floor((diff / (1000 * 60 * 60 * 24)));

  if (diff <= 0) {
    return {
      'total': 0,
      'days': "00",
      'hours': "00",
      'minutes': "00",
      'seconds': "00"
    };
  }
  return {
    'total': diff,
    'days': convertParam(days),
    'hours': convertParam(hours),
    'minutes': convertParam(minutes),
    'seconds': convertParam(seconds)
  };

}

function convertParam(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}

function setClock(id, endTime) {
  let timer = document.getElementById(id),
    days = timer.querySelector('.days'),
    hours = timer.querySelector('.hours'),
    minutes = timer.querySelector('.minutes'),
    seconds = timer.querySelector('.seconds'),
    timeInterval = setInterval(updateClock, 1000);

  function updateClock() {
    let diff = getTimeRemaining(endTime);
    days.textContent = diff.days;
    hours.textContent = diff.hours;
    minutes.textContent = diff.minutes;
    seconds.textContent = diff.seconds;

    if (diff.total <= 0) {
      clearInterval(timeInterval);
    }

  }

}
setClock('timer', deadLine);
}
export default timer;