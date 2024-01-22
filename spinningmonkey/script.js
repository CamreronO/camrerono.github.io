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



setInterval(spinMonkey, 1018); 


// Reset the counter and monkey rotation
resetButton.addEventListener("click", () => {
    count = 0;
    spinCount.textContent = count;
    spinningMonkey.style.transform = "rotate(0deg)";
});
