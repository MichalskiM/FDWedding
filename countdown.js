// Import the Countdown library or include it in your HTML

// Set the target date (January 1, 2024)
const targetDate = new Date("January 1, 2024 00:00:00").getTime();

// Update the countdown every second
const interval = setInterval(function() {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    if (timeLeft <= 0) {
        clearInterval(interval);
        //document.getElementById("countdown").innerHTML = "The wedding is here!";
        document.getElementById("countdown").innerHTML = "0 Tage";
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        //document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        document.getElementById("countdown").innerHTML = `${days} Tage`;
    }
}, 1000);
