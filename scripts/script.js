'use strict';

let time = 0;
let timeInCount = document.querySelector('.counter');
timeInCount.innerHTML = localStorage.getItem('savedTime');
if (localStorage.getItem('savedTime')) {
  time = +localStorage.getItem('savedTime');
}

function secPerSec() {
  timeInCount.innerHTML = '';
  timeInCount.innerHTML = `${time}`;
  time += 1;
  localStorage.setItem('savedTime', `${time}`);
}

setInterval(secPerSec, 1000);
