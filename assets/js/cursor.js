/* ========================================
   PORTFOLIO - CURSOR ANIMATION
   Custom cursor and cursor effects
   ======================================== */

// ========================================
// CUSTOM CURSOR
// ========================================

class CustomCursor {
    constructor() {
        this.cursor = document.querySelector('.cursor-glow');
        this.mouseX = 0;
        this.mouseY = 0;
        this.cursorX = 0;
        this.cursorY = 0;
        this.speed = 0.3;
        this.isActive = false;
        
        this.init();
    }

    init() {
        // Show cursor glow
        this.cursor?.classList.add('active');

        // Track mouse movement
        document.addEventListener('mousemove', (e) => this.onMouseMove(e));
        document.addEventListener('mouseenter', () => this.onMouseEnter());
        document.addEventListener('mouseleave', () => this.onMouseLeave());

        // Hover interactions
        this.setupHoverInteractions();

        // Animation loop
        this.animate();
    }

    onMouseMove(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        this.isActive = true;
    }

    onMouseEnter() {
        this.cursor?.classList.add('active');
        this.isActive = true;
    }

    onMouseLeave() {
        this.cursor?.classList.remove('active');
        this.isActive = false;
    }

    animate() {
        if (!this.cursor || !this.isActive) {
            requestAnimationFrame(() => this.animate());
            return;
        }

        // Smooth cursor follow
        this.cursorX += (this.mouseX - this.cursorX) * this.speed;
        this.cursorY += (this.mouseY - this.cursorY) * this.speed;

        this.cursor.style.left = this.cursorX + 'px';
        this.cursor.style.top = this.cursorY + 'px';

        requestAnimationFrame(() => this.animate());
    }

    setupHoverInteractions() {
        // Hover on buttons
        document.querySelectorAll('.button').forEach(button => {
            button.addEventListener('mouseenter', () => {
                this.expandCursor(1.5);
                button.style.cursor = 'pointer';
            });

            button.addEventListener('mouseleave', () => {
                this.resetCursor();
                button.style.cursor = 'auto';
            });
        });

        // Hover on links
        document.querySelectorAll('a:not(.button)').forEach(link => {
            link.addEventListener('mouseenter', () => {
                this.expandCursor(1.2);
                link.style.cursor = 'pointer';
            });

            link.addEventListener('mouseleave', () => {
                this.resetCursor();
                link.style.cursor = 'auto';
            });
        });

        // Hover on interactive elements
        document.querySelectorAll('button, input, textarea, select').forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.expandCursor(1.3);
            });

            element.addEventListener('mouseleave', () => {
                this.resetCursor();
            });
        });
    }

    expandCursor(scale = 1.5) {
        if (this.cursor) {
            this.cursor.style.transform = `scale(${scale})`;
        }
    }

    resetCursor() {
        if (this.cursor) {
            this.cursor.style.transform = 'scale(1)';
        }
    }
}

// ========================================
// CURSOR TRAIL EFFECT
// ========================================

class CursorTrail {
    constructor(options = {}) {
        this.options = {
            particles: options.particles || 20,
            size: options.size || 8,
            speed: options.speed || 2,
            opacity: options.opacity || 0.8,
            color: options.color || '#F6CAD9',
            ...options
        };

        this.mouseX = 0;
        this.mouseY = 0;
        this.particles = [];

        this.init();
    }

    init() {
        document.addEventListener('mousemove', (e) => this.onMouseMove(e));
    }

    onMouseMove(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;

        this.createParticle();
    }

    createParticle() {
        const canvas = this.getOrCreateCanvas();
        const ctx = canvas.getContext('2d');

        const particle = {
            x: this.mouseX,
            y: this.mouseY,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: 1,
            size: this.options.size
        };

        this.particles.push(particle);

        if (this.particles.length > this.options.particles) {
            this.particles.shift();
        }

        this.animate(ctx, canvas);
    }

    getOrCreateCanvas() {
        let canvas = document.getElementById('cursor-trail-canvas');

        if (!canvas) {
            canvas = document.createElement('canvas');
            canvas.id = 'cursor-trail-canvas';
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            canvas.style.position = 'fixed';
            canvas.style.top = '0';
            canvas.style.left = '0';
            canvas.style.pointerEvents = 'none';
            canvas.style.zIndex = '9998';
            document.body.appendChild(canvas);

            window.addEventListener('resize', () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            });
        }

        return canvas;
    }

    animate(ctx, canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.particles.forEach(particle => {
            particle.life -= 0.02;
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vy += 0.1; // gravity

            const opacity = particle.life * this.options.opacity;
            ctx.fillStyle = this.hexToRgba(this.options.color, opacity);
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
        });

        if (this.particles.length > 0) {
            requestAnimationFrame(() => this.animate(ctx, canvas));
        }
    }

    hexToRgba(hex, alpha) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
}

// ========================================
// CURSOR TEXT EFFECT
// ========================================

class CursorText {
    constructor(text = '✨', options = {}) {
        this.text = text;
        this.options = options;
        this.mouseX = 0;
        this.mouseY = 0;
        this.textElements = [];

        this.init();
    }

    init() {
        document.addEventListener('mousemove', (e) => this.onMouseMove(e));
    }

    onMouseMove(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;

        this.createTextElement();
    }

    createTextElement() {
        const element = document.createElement('div');
        element.textContent = this.text;
        element.style.position = 'fixed';
        element.style.left = this.mouseX + 'px';
        element.style.top = this.mouseY + 'px';
        element.style.pointerEvents = 'none';
        element.style.zIndex = '9997';
        element.style.fontSize = '16px';
        element.style.fontWeight = 'bold';
        element.style.color = '#F6CAD9';
        element.style.opacity = '0.8';
        element.style.transform = 'translate(-50%, -50%)';
        element.style.animation = 'fadeOut 1s ease-out forwards';

        document.body.appendChild(element);

        setTimeout(() => element.remove(), 1000);
    }
}

// ========================================
// CURSOR CLICK RIPPLE
// ========================================

class ClickRipple {
    constructor(options = {}) {
        this.options = {
            color: options.color || '#F6CAD9',
            duration: options.duration || 600,
            ...options
        };

        this.init();
    }

    init() {
        document.addEventListener('click', (e) => this.createRipple(e));
    }

    createRipple(e) {
        const ripple = document.createElement('span');
        const rect = e.target.getBoundingClientRect?.() || { width: 0, height: 0 };

        ripple.style.position = 'fixed';
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.background = this.options.color;
        ripple.style.borderRadius = '50%';
        ripple.style.pointerEvents = 'none';
        ripple.style.zIndex = '9996';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.animation = `scaleIn ${this.options.duration}ms ease-out forwards`;

        document.body.appendChild(ripple);

        setTimeout(() => ripple.remove(), this.options.duration);
    }
}

// ========================================
// MAGNETIC CURSOR
// ========================================

class MagneticCursor {
    constructor(selector = '.button', strength = 50) {
        this.selector = selector;
        this.strength = strength;
        this.mouseX = 0;
        this.mouseY = 0;

        this.init();
    }

    init() {
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;

            this.updateMagnetic();
        });
    }

    updateMagnetic() {
        document.querySelectorAll(this.selector).forEach(element => {
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const distX = this.mouseX - centerX;
            const distY = this.mouseY - centerY;
            const distance = Math.sqrt(distX * distX + distY * distY);

            if (distance < 100) {
                const force = (100 - distance) / 100;
                const moveX = (distX / distance) * force * this.strength;
                const moveY = (distY / distance) * force * this.strength;

                element.style.transform = `translate(${moveX}px, ${moveY}px)`;
            } else {
                element.style.transform = 'translate(0, 0)';
            }
        });
    }
}

// ========================================
// SPOTLIGHT EFFECT
// ========================================

class Spotlight {
    constructor(options = {}) {
        this.options = {
            size: options.size || 200,
            opacity: options.opacity || 0.2,
            color: options.color || '#F6CAD9',
            ...options
        };

        this.mouseX = 0;
        this.mouseY = 0;

        this.init();
    }

    init() {
        const spotlight = document.createElement('div');
        spotlight.id = 'spotlight';
        spotlight.style.position = 'fixed';
        spotlight.style.pointerEvents = 'none';
        spotlight.style.zIndex = '1';
        spotlight.style.top = '0';
        spotlight.style.left = '0';
        spotlight.style.width = this.options.size + 'px';
        spotlight.style.height = this.options.size + 'px';
        spotlight.style.background = `radial-gradient(circle, ${this.hexToRgba(this.options.color, this.options.opacity)}, transparent)`;
        spotlight.style.borderRadius = '50%';
        spotlight.style.pointerEvents = 'none';
        spotlight.style.mixBlendMode = 'screen';

        document.body.appendChild(spotlight);

        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;

            spotlight.style.left = (this.mouseX - this.options.size / 2) + 'px';
            spotlight.style.top = (this.mouseY - this.options.size / 2) + 'px';
        });
    }

    hexToRgba(hex, alpha) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize custom cursor
    const customCursor = new CustomCursor();

    // Optional: Initialize cursor trail (commented out for performance)
    // const cursorTrail = new CursorTrail({
    //     particles: 15,
    //     size: 6,
    //     color: '#F6CAD9'
    // });

    // Optional: Initialize cursor text (commented out)
    // const cursorText = new CursorText('✨');

    // Initialize click ripple
    const clickRipple = new ClickRipple({
        color: '#F6CAD9',
        duration: 600
    });

    // Optional: Initialize magnetic cursor (commented out for performance)
    // const magneticCursor = new MagneticCursor('.button', 30);

    // Optional: Initialize spotlight effect (commented out)
    // const spotlight = new Spotlight({
    //     size: 300,
    //     opacity: 0.15,
    //     color: '#F6CAD9'
    // });

    console.log('Cursor effects initialized successfully');
});

// ========================================
// EXPORT FOR EXTERNAL USE
// ========================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CustomCursor,
        CursorTrail,
        CursorText,
        ClickRipple,
        MagneticCursor,
        Spotlight
    };
}
