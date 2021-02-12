const birthday = '4 May 2021';

function countDown() {
    const currentDate = new Date();
    const birthdayDate = new Date(birthday);
    const seconds = (birthdayDate - currentDate) / 1000;
    const days = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds / 3600) % 24;
    console.log(days, hours);

}
// initial call
countDown();

// setInterval(countDown, 1000);