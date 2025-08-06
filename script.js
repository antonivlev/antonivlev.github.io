// DOM Elements
const exploreBtn = document.getElementById('exploreBtn');
const learnBtn = document.getElementById('learnBtn');
const shapes = document.querySelectorAll('.shape');
const codeLines = document.querySelectorAll('.code-line');

// Button Ripple Effect
function createRipple(event, button) {
    const ripple = button.querySelector('.btn-ripple');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = size + 'px';
    ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    ripple.style.animation = 'none';
    ripple.offsetHeight; // Trigger reflow
    ripple.style.animation = 'ripple 0.6s linear';
}

// Button Event Listeners
exploreBtn.addEventListener('click', function(e) {
    createRipple(e, this);
    
    // Animate the title
    const titleLines = document.querySelectorAll('.title-line');
    titleLines.forEach((line, index) => {
        setTimeout(() => {
            line.style.transform = 'translateX(10px)';
            setTimeout(() => {
                line.style.transform = 'translateX(0)';
            }, 200);
        }, index * 100);
    });
    
    // Add a subtle flash effect to shapes
    shapes.forEach(shape => {
        shape.style.opacity = '0.8';
        setTimeout(() => {
            shape.style.opacity = '';
        }, 300);
    });
});

learnBtn.addEventListener('click', function(e) {
    // Animate code window
    const codeWindow = document.querySelector('.code-window');
    codeWindow.style.transform = 'perspective(1000px) rotateY(5deg) scale(1.05)';
    
    setTimeout(() => {
        codeWindow.style.transform = 'perspective(1000px) rotateY(-5deg)';
    }, 300);
    
    // Type effect for code lines
    codeLines.forEach((line, index) => {
        line.style.opacity = '0';
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transform = 'translateX(0)';
        }, index * 200);
    });
});

// Mouse movement parallax effect
document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed * 20;
        const y = (mouseY - 0.5) * speed * 20;
        
        shape.style.transform = `translate(${x}px, ${y}px)`;
    });
    
    // Parallax effect for code window
    const codeWindow = document.querySelector('.code-window');
    const x = (mouseX - 0.5) * 10;
    const y = (mouseY - 0.5) * 10;
    codeWindow.style.transform = `perspective(1000px) rotateY(-5deg) translate(${x}px, ${y}px)`;
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.text-content, .visual-element, .footer').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// Random floating animation for shapes
function randomFloat() {
    shapes.forEach(shape => {
        const randomX = (Math.random() - 0.5) * 100;
        const randomY = (Math.random() - 0.5) * 100;
        const randomRotate = Math.random() * 360;
        
        shape.style.transform += ` translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
        
        setTimeout(() => {
            shape.style.transform = shape.style.transform.replace(
                /translate\([^)]*\) rotate\([^)]*\)/g, 
                ''
            );
        }, 2000);
    });
}

// Add periodic random floating
setInterval(randomFloat, 5000);

// Loading animation
window.addEventListener('load', function() {
    // Animate elements on load
    const title = document.querySelector('.main-title');
    const subtitle = document.querySelector('.subtitle');
    const buttons = document.querySelector('.cta-buttons');
    
    setTimeout(() => {
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
    }, 300);
    
    setTimeout(() => {
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
    }, 600);
    
    setTimeout(() => {
        buttons.style.opacity = '1';
        buttons.style.transform = 'translateY(0)';
    }, 900);
});

// Add initial styles for load animation
document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.main-title');
    const subtitle = document.querySelector('.subtitle');
    const buttons = document.querySelector('.cta-buttons');
    
    [title, subtitle, buttons].forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
});

// Keyboard accessibility
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('btn')) {
            e.preventDefault();
            focusedElement.click();
        }
    }
});

// Add focus styles for better accessibility
document.querySelectorAll('.btn, .nav-link').forEach(el => {
    el.addEventListener('focus', function() {
        this.style.outline = '2px solid rgba(102, 126, 234, 0.6)';
        this.style.outlineOffset = '2px';
    });
    
    el.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// Dynamic gradient animation
function animateGradients() {
    const gradientText = document.querySelector('.gradient-text');
    const hue = (Date.now() / 50) % 360;
    
    gradientText.style.background = `linear-gradient(135deg, 
        hsl(${hue}, 70%, 65%) 0%, 
        hsl(${(hue + 60) % 360}, 70%, 65%) 100%)`;
    gradientText.style.webkitBackgroundClip = 'text';
    gradientText.style.backgroundClip = 'text';
}

// Update gradient every frame for smooth animation
function updateGradient() {
    animateGradients();
    requestAnimationFrame(updateGradient);
}

// Start gradient animation
updateGradient();

console.log('🎉 Hello World page loaded successfully!');
console.log('✨ Interactive features enabled');
console.log('🚀 Ready for exploration!');