function updateCountdown() {
    const targetDate = new Date('2024-01-01T00:00:00'); // set your target date here
    const currentDate = new Date();

    const totalSeconds = (targetDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;

    document.getElementById('day').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
}

// Update the countdown every minute
setInterval(updateCountdown, 1000 * 60);
updateCountdown();
