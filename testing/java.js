const fadeText = document.querySelector('.fade-text');
const fadeContainer = document.querySelector('.fade-container');
const fadeDuration = 3000; // Adjust the duration (in milliseconds) to control the fading speed

// Start the fading animation
let startTime = null;
function animateFade(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const fadeAmount = Math.min(1, elapsed / fadeDuration);

    fadeText.style.color = `rgb(${Math.round((1 - fadeAmount) * 255)}, ${Math.round((1 - fadeAmount) * 255)}, ${Math.round((1 - fadeAmount) * 255)})`;

    if (fadeAmount < 1) {
        requestAnimationFrame(animateFade);
    }
}

requestAnimationFrame(animateFade);
