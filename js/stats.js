// progres
let progr = document.querySelectorAll(".skills span");
let skillsSection = document.querySelector(".skills");

/* stats */
let numbe = document.querySelectorAll(".stats h3");
let section = document.querySelector(".stats");
let started = false;

window.onscroll = function () {
    //progres
    if (window.scrollY >= skillsSection.offsetTop - 100) {
        progr.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
    //stats
    if (window.scrollY >= section.offsetTop) {
        if (!started) {
            numbe.forEach((e) => startCount(e));
        }
        started = true;
    }
}
function startCount (elem) {
    let goal = elem.dataset.goal;
    let counter = setInterval(() => {
        elem.textContent++;
        if (elem.textContent == goal) {
            clearInterval(counter)
        }
    },2000/goal)
}

/* time out */

let days = document.querySelector(".events .days");
let hours = document.querySelector(".events .hours");
let minutes = document.querySelector(".events .minutes");
let seconds = document.querySelector(".events .seconds");
let contDownDate = new Date("Dec 31, 2021 23:59:59").getTime();
let timeDown = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = contDownDate - dateNow;
    let dayTime = Math.floor(dateDiff/(1000 * 60 * 60 * 24));
    days.innerHTML = dayTime < 10 ? `0${dayTime}` : dayTime;
    let hourTime = Math.floor((dateDiff % (1000 * 60 * 60 * 24))/(1000*60*60));
    hours.innerHTML = hourTime < 10 ? `0${hourTime}` : hourTime;
    let munitesTime = Math.floor((dateDiff % (1000 * 60 * 60 ))/(1000*60));
    minutes.innerHTML = munitesTime < 10 ? `0${munitesTime}`: munitesTime;
    let secondsTime = Math.floor((dateDiff % (1000 * 60 ))/(1000));
    seconds.innerHTML = secondsTime < 10? `0${secondsTime}` : secondsTime;

    if (dateDiff = 0) {
        clearInterval(timeDown);
    }
},1000)

