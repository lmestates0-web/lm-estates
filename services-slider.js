// services-slider.js - Horizontal scrolling carousel for service cards

document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const servicesCards = document.querySelector('.services-cards');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    const cards = document.querySelectorAll('.card');
    
    if (!servicesCards || !leftArrow || !rightArrow) {
        console.warn('Services slider elements not found');
        return;
    }
    
    // Scroll amount (one card width + gap)
    const scrollAmount = 370; // 350px card width + 20px gap
    
    // Arrow click handlers
    leftArrow.addEventListener('click', function() {
        servicesCards.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
    
    rightArrow.addEventListener('click', function() {
        servicesCards.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // Auto-scroll functionality
    let autoScrollInterval;
    const autoScrollSpeed = 4000; // 4 seconds
    
    function startAutoScroll() {
        autoScrollInterval = setInterval(function() {
            // Check if we're at the end
            const maxScroll = servicesCards.scrollWidth - servicesCards.clientWidth;
            if (servicesCards.scrollLeft >= maxScroll - 10) {
                // Reset to beginning
                servicesCards.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            } else {
                // Scroll to next card
                servicesCards.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        }, autoScrollSpeed);
    }
    
    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }
    
    // Start auto-scroll
    startAutoScroll();
    
    // Pause auto-scroll on hover
    servicesCards.addEventListener('mouseenter', stopAutoScroll);
    servicesCards.addEventListener('mouseleave', startAutoScroll);
    
    // Touch gesture support
    let touchStartX = 0;
    let touchEndX = 0;
    
    servicesCards.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].clientX;
        stopAutoScroll();
    });
    
    servicesCards.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].clientX;
        handleGesture();
        startAutoScroll();
    });
    
    function handleGesture() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swiped left - scroll right
                servicesCards.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            } else {
                // Swiped right - scroll left
                servicesCards.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            }
        }
    }
    
    // Add interactive hover effects to cards
    cards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
});