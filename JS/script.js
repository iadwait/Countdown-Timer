const daysId = document.getElementById('days');
const hoursId = document.getElementById('hours');
const minsId = document.getElementById('mins');
const secId = document.getElementById('sec');
const nextYearId = document.getElementById('nextYear');

const currentYear = new Date().getFullYear()
const newYear = "1 Jan " + (currentYear + 1)

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
    console.log(new Date().getFullYear());

    nextYearId.innerHTML = "Until new beginnings " + (currentYear + 1)
    daysId.innerHTML = formatTime(days);
    hoursId.innerHTML = formatTime(hours);
    minsId.innerHTML = formatTime(minutes);
    secId.innerHTML = formatTime(seconds);
}

function formatTime(time)
{
    return time < 10 ? `0${time}` : time 
}

countdown()

setInterval(countdown,1000);