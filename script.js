// Create floating hearts in the background
function createHearts() {
    const heartsContainer = document.querySelector('.hearts-background');
    const heartSymbols = ['💕', '💖', '💗', '💓', '💝', '❤️'];
    
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 15 + 's';
        heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
        heartsContainer.appendChild(heart);
    }
}

// Move the "No" button randomly when hovered
function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    const container = document.querySelector('.container');
    const buttonsContainer = document.querySelector('.buttons-container');
    
    noBtn.addEventListener('mouseenter', function() {
        const containerRect = container.getBoundingClientRect();
        const buttonsRect = buttonsContainer.getBoundingClientRect();
        const buttonRect = noBtn.getBoundingClientRect();
        
        // Calculate random position within container bounds
        const maxX = containerRect.width - buttonRect.width - 40;
        const maxY = containerRect.height - buttonRect.height - 40;
        
        // Ensure we don't go negative
        const randomX = Math.max(0, Math.random() * maxX);
        const randomY = Math.max(0, Math.random() * maxY);
        
        // Move button to random position and keep it there
        noBtn.style.position = 'absolute';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
        noBtn.style.transition = 'all 0.2s ease';
    });
}

// Handle Yes button click
function handleYesClick() {
    const yesBtn = document.getElementById('yesBtn');
    const result = document.getElementById('result');
    const buttonsContainer = document.querySelector('.buttons-container');
    
    yesBtn.addEventListener('click', function() {
        result.classList.remove('hidden');
        buttonsContainer.style.display = 'none';
        
        // Add confetti effect (optional enhancement)
        createConfetti();
    });
}

// Create confetti effect
function createConfetti() {
    const colors = ['#ff69b4', '#ff1493', '#ffb6c1', '#ff91a4', '#ffc0d9'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Add confetti animation
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createHearts();
    moveNoButton();
    handleYesClick();
});
