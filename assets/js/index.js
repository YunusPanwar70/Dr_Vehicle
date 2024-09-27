const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

AOS.init({
    duration: 2000 // Set the duration in milliseconds
});

// Counter

function startCounter() {
    let count = 0;
    const counterDisplay = document.getElementById('counter');
    const interval = setInterval(function () {
        if (count < 20) {
            count++;
            counterDisplay.textContent = count;
        } else {
            clearInterval(interval);
        }
    }, 100); // Adjust the interval time (milliseconds) to control speed
}

function startCounter1() {
    let count = 0;
    const counterDisplay1 = document.getElementById('counter1');
    const interval = setInterval(function () {
        if (count < 40) {
            count++;
            counterDisplay1.textContent = count;
        } else {
            clearInterval(interval);
        }
    }, 100); // Adjust the interval time (milliseconds) to control speed
}

function startCounter2() {
    let count = 0;
    const counterDisplay2 = document.getElementById('counter2');
    const interval = setInterval(function () {
        if (count < 60) {
            count++;
            counterDisplay2.textContent = count;
        } else {
            clearInterval(interval);
        }
    }, 100); // Adjust the interval time (milliseconds) to control speed
}

// Start counter on page load
window.addEventListener('DOMContentLoaded', startCounter);
window.addEventListener('DOMContentLoaded', startCounter1);
window.addEventListener('DOMContentLoaded', startCounter2);

// Start counter on scroll (after the first scroll)
let hasScrolled = false;
window.addEventListener('scroll', function () {
    if (!hasScrolled) {
        startCounter();
        startCounter1();
        startCounter2();
        hasScrolled = true;
    }
});