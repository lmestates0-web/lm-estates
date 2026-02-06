// services-slider.js

// Auto-scroll functionality
const autoScrollSpeed = 3000; // in milliseconds
let autoScroll;

// Carousel navigation
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

function startAutoScroll() {
    autoScroll = setInterval(nextSlide, autoScrollSpeed);
}

function stopAutoScroll() {
    clearInterval(autoScroll);
}

// Touch gestures functionality
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].clientX;
}

function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].clientX;
    handleGesture();
}

function handleGesture() {
    if (touchStartX < touchEndX) {
        prevSlide();
    } else if (touchStartX > touchEndX) {
        nextSlide();
    }
}

// Event listeners
document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchend', handleTouchEnd);

// Initialize carousel
showSlide(currentIndex);
startAutoScroll();