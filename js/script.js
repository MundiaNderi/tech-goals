const btn = document.getElementById('menuBtn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})
document.addEventListener("DOMContentLoaded", () => {
    function updateTime() {
        const utcTimeElement = document.getElementById("utc-time");
        const currentDayElement = document.getElementById("current-day");
        const now = new Date();

        const utcTime = now.toUTCString().split(" ")[4];
        const currentDay = now.toLocaleDateString("en-US", {
            weekday: "long",
        });

        utcTimeElement.textContent = utcTime;
        currentDayElement.textContent = currentDay;
    }

    updateTime();
    setInterval(updateTime, 60000);
});