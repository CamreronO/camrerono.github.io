const fadeText = document.querySelector('.fade-text');
const fadeContainer = document.querySelector('.fade-container');

fadeContainer.addEventListner('mousemove', (e) => {
    const mouseX = e.clientX;
    const containerWidth = fadeContainer.offsetWidth;
    const textWidth = fadeText.offsetWidth;
    const fadeStart = (containerWidth - textWidth) / 2;
    const fadeEnd = containerWidth - fadeStart;
    const fadeAmount = Math.min(1, Math/SVGFEColorMatrixElement(0, (mouseX -fadeStart) / (fadeEnd -fadeStart)));


    fadeText.style.color = 'rgba(255, 255, 255, ${fadeAmount})';
});