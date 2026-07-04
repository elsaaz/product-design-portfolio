/* ========================================
   PORTFOLIO - ANIMATION JAVASCRIPT
   Advanced animations and effects
   ======================================== */

// ========================================
// PARALLAX SCROLLING
// ========================================

function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length === 0) return;

    const handleParallax = () => {
        parallaxElements.forEach(element => {
            const scrollPosition = window.scrollY;
            const elementOffset = element.offsetTop;
            const distance = scrollPosition - elementOffset;
            const speed = element.dataset.parallax || 0.5;
            
            element.style.transform = `translateY(${distance * speed}px)`;
        });
    };

    window.addEventListener('scroll', () => {
        requestAnimationFrame(handleParallax);
    });
}

// ========================================
// BLOB ANIMATION
// ========================================

function initBlobAnimation() {
    const blobs = document.querySelectorAll('.blob');
    
    blobs.forEach((blob, index) => {
        // Random animation delay
        const delay = Math.random() * 2;
        blob.style.animationDelay = delay + 's';
        
        // Optional: vary size slightly
        const scale = 0.8 + Math.random() * 0.4;
        blob.style.transform = `scale(${scale})`;
    });
}

// ========================================
// TEXT REVEAL ANIMATION
// ========================================

function initTextReveal() {
    const textElements = document.querySelectorAll('[data-text-reveal]');
    
    textElements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.animation = `fadeIn 0.5s ease-out ${index * 0.05}s both`;
            element.appendChild(span);
        });
    });
}

// ========================================
// NUMBER COUNTER ANIMATION
// ========================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    requestAnimationFrame(updateCounter);
}

function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.counter);
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
}

// ========================================
// PROGRESS BAR ANIMATION
// ========================================

function initProgressBars() {
    const progressBars = document.querySelectorAll('[data-progress]');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.dataset.progress;
                entry.target.style.width = progress + '%';
                progressObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
        bar.style.width = '0%';
        bar.style.transition = 'width 1s ease-out';
        progressObserver.observe(bar);
    });
}

// ========================================
// FLOATING ANIMATION
// ========================================

function initFloatingElements() {
    const floatingElements = document.querySelectorAll('[data-float]');
    
    floatingElements.forEach((element, index) => {
        const delay = index * 0.2;
        const duration = 3 + Math.random() * 2;
        
        element.style.animation = `floatSmooth ${duration}s ease-in-out ${delay}s infinite`;
    });
}

// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

function initScrollReveal() {
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animationType = entry.target.dataset.reveal || 'slideInUp';
                entry.target.style.animation = `${animationType} 0.6s ease-out forwards`;
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
}

// ========================================
// STAGGER CHILDREN ANIMATION
// ========================================

function initStaggerAnimation() {
    const staggerContainers = document.querySelectorAll('[data-stagger]');
    
    staggerContainers.forEach(container => {
        const children = container.children;
        const delay = parseFloat(container.dataset.stagger) || 0.1;
        
        Array.from(children).forEach((child, index) => {
            child.style.animation = `slideInUp 0.6s ease-out ${index * delay}s both`;
        });
    });
}

// ========================================
// GRADIENT ANIMATION
// ========================================

function initGradientAnimation() {
    const gradientElements = document.querySelectorAll('[data-gradient-animate]');
    
    gradientElements.forEach(element => {
        element.style.backgroundSize = '200% 200%';
        element.style.animation = 'gradientShift 3s ease infinite';
    });
}

// ========================================
// PULSE ANIMATION
// ========================================

function initPulseElements() {
    const pulseElements = document.querySelectorAll('[data-pulse]');
    
    pulseElements.forEach(element => {
        element.style.animation = 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite';
    });
}

// ========================================
// ROTATION ANIMATION
// ========================================

function initRotationElements() {
    const rotateElements = document.querySelectorAll('[data-rotate]');
    
    rotateElements.forEach(element => {
        const duration = element.dataset.rotate || 4;
        element.style.animation = `rotate ${duration}s linear infinite`;
    });
}

// ========================================
// GLOW EFFECT
// ========================================

function initGlowEffect() {
    const glowElements = document.querySelectorAll('[data-glow]');
    
    glowElements.forEach(element => {
        element.style.animation = 'glow 2s ease-in-out infinite';
    });
}

// ========================================
// BOUNCE ANIMATION
// ========================================

function initBounceElements() {
    const bounceElements = document.querySelectorAll('[data-bounce]');
    
    bounceElements.forEach(element => {
        const duration = element.dataset.bounce || 2;
        element.style.animation = `bounce ${duration}s ease-in-out infinite`;
    });
}

// ========================================
// WAVE ANIMATION
// ========================================

function initWaveAnimation() {
    const waveElements = document.querySelectorAll('[data-wave]');
    
    waveElements.forEach((element, index) => {
        element.style.transformOrigin = 'center';
        element.style.animation = `wave 0.5s ease-in-out ${index * 0.1}s`;
    });
}

// ========================================
// SCROLL TRIGGER ANIMATION
// ========================================

function initScrollTrigger() {
    const triggers = document.querySelectorAll('[data-scroll-trigger]');
    
    const triggerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const action = entry.target.dataset.scrollTrigger;
                
                switch(action) {
                    case 'addClass':
                        entry.target.classList.add('active');
                        break;
                    case 'play':
                        if (entry.target.play) entry.target.play();
                        break;
                    case 'animate':
                        entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
                        break;
                }
                
                triggerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    triggers.forEach(trigger => triggerObserver.observe(trigger));
}

// ========================================
// MOUSE MOVE PARALLAX
// ========================================

function initMouseMoveParallax() {
    const parallaxMouseElements = document.querySelectorAll('[data-parallax-mouse]');
    
    if (parallaxMouseElements.length === 0) return;

    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;

        parallaxMouseElements.forEach(element => {
            const speed = element.dataset.parallaxMouse || 10;
            const moveX = (x - 50) / speed;
            const moveY = (y - 50) / speed;
            
            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
}

// ========================================
// ELEMENT VISIBILITY TRACKING
// ========================================

function initVisibilityTracking() {
    const trackedElements = document.querySelectorAll('[data-track-visibility]');
    
    const visibilityObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, { threshold: 0.5 });

    trackedElements.forEach(el => visibilityObserver.observe(el));
}

// ========================================
// SCROLL ANIMATION TIMELINE
// ========================================

class ScrollAnimationTimeline {
    constructor() {
        this.animations = [];
        this.init();
    }

    add(element, config) {
        this.animations.push({ element, config });
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animation = this.animations.find(a => a.element === entry.target);
                    if (animation) {
                        this.play(animation);
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, { threshold: 0.5 });

        this.animations.forEach(a => observer.observe(a.element));
    }

    play(animation) {
        const { element, config } = animation;
        const { duration = 0.6, delay = 0, type = 'slideInUp' } = config;
        
        element.style.animation = `${type} ${duration}s ease-out ${delay}s forwards`;
    }
}

// ========================================
// SPRING ANIMATION UTILITY
// ========================================

class SpringAnimation {
    constructor(element, config = {}) {
        this.element = element;
        this.stiffness = config.stiffness || 100;
        this.damping = config.damping || 10;
        this.mass = config.mass || 1;
        this.velocity = config.velocity || 0;
        this.position = config.position || 0;
        this.target = config.target || 0;
    }

    update() {
        const springForce = -this.stiffness * this.position;
        const dampingForce = -this.damping * this.velocity;
        const acceleration = (springForce + dampingForce) / this.mass;

        this.velocity += acceleration;
        this.position += this.velocity;

        if (Math.abs(this.position) > 0.1) {
            requestAnimationFrame(() => this.update());
        } else {
            this.position = this.target;
        }

        this.element.style.transform = `translateX(${this.position}px)`;
    }

    spring() {
        this.update();
    }
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initBlobAnimation();
    initParallax();
    initTextReveal();
    initCounters();
    initProgressBars();
    initFloatingElements();
    initScrollReveal();
    initStaggerAnimation();
    initGradientAnimation();
    initPulseElements();
    initRotationElements();
    initGlowEffect();
    initBounceElements();
    initWaveAnimation();
    initScrollTrigger();
    initMouseMoveParallax();
    initVisibilityTracking();

    console.log('Animation module initialized successfully');
});

// ========================================
// EXPORT FOR EXTERNAL USE
// ========================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initParallax,
        initBlobAnimation,
        initTextReveal,
        animateCounter,
        initCounters,
        initProgressBars,
        initFloatingElements,
        initScrollReveal,
        initStaggerAnimation,
        initGradientAnimation,
        initPulseElements,
        initRotationElements,
        initGlowEffect,
        initBounceElements,
        initWaveAnimation,
        initScrollTrigger,
        initMouseMoveParallax,
        initVisibilityTracking,
        ScrollAnimationTimeline,
        SpringAnimation
    };
}
