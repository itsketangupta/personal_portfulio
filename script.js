function time() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    const numericHours = hours;

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;

    const timeEl = document.getElementById("time");

    if (timeEl) timeEl.textContent = `${hours}:${minutes}`;
}

time();

setInterval(time, 1000);
