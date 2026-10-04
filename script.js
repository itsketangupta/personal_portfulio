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

const API ="https://hackatime.hackclub.com/api/v1/users/itsketangupta/stats";

async function loadStats() {
    
    try {
        const response = await fetch(API);

        if (!response.ok) {
            throw new Error("Data not found");
        }

        const result = await response.json();

        const data = result.data;

        document.getElementById("totaltime").textContent =
            data.human_readable_total;

        const languages = data.languages
            .filter(lang => lang.total_seconds > 0)
            .sort((a, b) => b.total_seconds - a.total_seconds)
            .slice(0, 6);


        const container = document.getElementById("languages");

        container.innerHTML = "";

        languages.forEach(lang => {

            const div = document.createElement("div");

            div.className = "language";

            div.innerHTML = `
            <div class="lang-info">
                <span>${lang.name}</span>
                <span>${lang.percent}%</span>
            </div> `;
            
            container.appendChild(div);
        });

    }
    catch (error) {
        console.error(error);
    }
}

loadStats();