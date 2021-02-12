const birthday = '4 May 2021';
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

function countDown() {
    const currentDate = new Date();
    const birthdayDate = new Date(birthday);
    const totalSeconds = (birthdayDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;


}
// initial call
countDown();

setInterval(countDown, 1000);