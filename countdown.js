// countdown.js

// Set the date of the race (September 10th, 2024)
var raceDate = new Date("September 7, 2025 00:00:00").getTime();

// Update the countdown every second
var countdown = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the time remaining until the race
    var timeRemaining = raceDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is over, display a message
    if (timeRemaining < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "Race day has arrived!";
    }
}, 1000); // Update every second
