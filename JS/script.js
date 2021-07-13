const daysId = document.getElementById('days');
const hoursId = document.getElementById('hours');
const minsId = document.getElementById('mins');
const secId = document.getElementById('sec');

const newYear = "1 Jan 2022"

function countdown()
{
    const currentDate = new Date();
    const newYeardate = new Date(newYear);

    const totolSeconds = (newYeardate - currentDate) / 1000;
    const days =   Math.floor(totolSeconds / 3600 / 24) 
    const hours = Math.floor(totolSeconds / 3600) % 24;
    const minutes = Math.floor(totolSeconds / 60) % 60;
    const seconds = Math.floor(totolSeconds) % 60;

    // console.log(days , hours , minutes , seconds);

    daysId.innerHTML = days;
    hoursId.innerHTML = hours;
    minsId.innerHTML = minutes;
    secId.innerHTML = seconds
}

countdown()

setInterval(countdown,1000);