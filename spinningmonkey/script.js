// Get the necessary elements from the HTML document
const spinningMonkey = document.getElementById("spinning-monkey");
const spinCount = document.getElementById("spin-count");
const resetButton = document.getElementById("reset-button");

let count = 0;

// Function to increment the counter and rotate the monkey
function spinMonkey() {
    count++;
    spinCount.textContent = count;
    spinningMonkey.style.transform = `rotate(${count * 360}deg)`;
}


<<<<<<< HEAD
setInterval(spinMonkey, 200); 
=======
setInterval(spinMonkey, 480); // Updated the interval to 750 milliseconds (0.75 seconds)

>>>>>>> 79be632b7cd256f94a037568fb7fc3f8ed61e507

// Reset the counter and monkey rotation
resetButton.addEventListener("click", () => {
    count = 0;
    spinCount.textContent = count;
    spinningMonkey.style.transform = "rotate(0deg)";
});
