let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]; // Initialize variables for time components
let timeRef = document.querySelector(".timer-display"); // Reference to the timer display element
let int = null; // Variable to hold the interval ID

document.getElementById("start-timer").addEventListener("click", () => { // Event listener for the start button
    if (int !== null) { // If the interval is already running, clear it
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10); // Start the interval to update the timer display every 10 milliseconds
});

document.getElementById("pause-timer").addEventListener("click", () => { // Event listener for the pause button
    clearInterval(int); // Clear the interval to pause the timer
});

document.getElementById("reset-timer").addEventListener("click", () => { // Event listener for the reset button
    clearInterval(int); // Clear the interval
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]; // Reset time components to zero
    timeRef.innerHTML = "00 : 00 : 00 : 000 "; // Reset the timer display to initial value
});

function displayTimer() { // Function to update the timer display
    milliseconds += 10; // Increment milliseconds by 10
    if (milliseconds == 1000) { // If milliseconds reach 1000, reset to zero and increment seconds
        milliseconds = 0;
        seconds++;
        if (seconds == 60) { // If seconds reach 60, reset to zero and increment minutes
            seconds = 0;
            minutes++;
            if (minutes == 60) { // If minutes reach 60, reset to zero and increment hours
                minutes = 0;
                hours++;
            }
        }
    }

    // Format time components to ensure leading zeros if less than 10
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`; // Update the timer display with formatted time
}
