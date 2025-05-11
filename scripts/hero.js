// Handle diagonal clip on load and resize
function applyDiagonalClip(angleDeg = 11) {
    const hero = document.querySelector('.hero');
    const height = hero.offsetHeight;
    const width = hero.offsetWidth;
  
    // Calculate opposite side of the triangle using tan(angle)
    const radians = angleDeg * (Math.PI / 180);
    const offset = Math.tan(radians) * width;
  
    // Convert offset to percentage of height
    const yOffsetPercent = (offset / height) * 100;
  
    hero.style.clipPath = `polygon(0 0, 100% 0, 100% ${100 - yOffsetPercent + 5}%, 0 100%)`;
}

// Debounce resize handler for better performance
function debounce(func, wait) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), wait);
    };
}

// Initialize
window.addEventListener('load', () => applyDiagonalClip(11));
window.addEventListener('resize', debounce(() => applyDiagonalClip(11), 150));
  