let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function startStop() {
    if (!timer) {
        timer = setInterval(run, 10);
        document.getElementById("startStop").textContent = "Durdur";
    } else {
        clearInterval(timer);
        timer = null;
        document.getElementById("startStop").textContent = "Başlat";
    }
}

function run() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    document.getElementById("hours").textContent = padTime(hours);
    document.getElementById("minutes").textContent = padTime(minutes);
    document.getElementById("seconds").textContent = padTime(seconds);
    document.getElementById("milliseconds").textContent = padMilliseconds(milliseconds);
}

function reset() {
    clearInterval(timer);
    timer = null;
    hours = minutes = seconds = milliseconds = 0;
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    document.getElementById("milliseconds").textContent = "000";
    document.getElementById("startStop").textContent = "Başlat";
}

function padTime(time) {
    return (time < 10) ? "0" + time : time;
}

function padMilliseconds(time) {
    if (time < 10) {
        return "00" + time;
    } else if (time < 100) {
        return "0" + time;
    } else {
        return time;
    }
}
