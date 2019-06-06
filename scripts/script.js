'use strict';

let time = 0;
let timeInCount = document.querySelector('.counter');
if (localStorage.getItem('savedTime')) {
  time = +localStorage.getItem('savedTime');
}

function secPerSec() {
  timeInCount.innerHTML = `${time}`;
  time += 1;
  localStorage.setItem('savedTime', `${time}`);
}

setInterval(secPerSec, 1000);
