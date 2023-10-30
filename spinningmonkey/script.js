const spinningMonkey = document.getElementById("spinning-monkey");
const spinCount = document.getElementById("spin-count");
const resetButton = document.getElementById("reset-button");

let count = 0;
let visibilityChange;

// Function to increment the counter and rotate the monkey
function spinMonkey() {
    count++;
    spinCount.textContent = count;
    spinningMonkey.style.transform = `rotate(${count * 360}deg)`;
}

setInterval(spinMonkey, 900);

// Handle page visibility changes
if (typeof document.hidden !== "undefined") {
    visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
    visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
    visibilityChange = "webkitvisibilitychange";
}

if (visibilityChange) {
    document.addEventListener(visibilityChange, function () {
        if (document.hidden) {
            // Page is hidden, stop counting
            clearInterval(spinningMonkeyInterval);
        } else {
            // Page is visible, resume counting
            spinningMonkeyInterval = setInterval(spinMonkey, 900);
        }
    });
}

// Reset the counter and monkey rotation
resetButton.addEventListener("click", () => {
    count = 0;
    spinCount.textContent = count;
    spinningMonkey.style.transform = "rotate(0deg)";
});

let spinningMonkeyInterval = setInterval(spinMonkey, 900);
