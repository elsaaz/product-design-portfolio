/* ========================================
   PORTFOLIO - MAIN JAVASCRIPT
   Core functionality and interactions
   ======================================== */

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Smooth scroll to element
 */
function smoothScroll(targetId) {
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Debounce function for performance
 */
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * Throttle function for performance
 */
function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            func.apply(this, args);
        }
    };
}

/**
 * Get element position relative to viewport
 */
function getElementPosition(el) {
    const rect = el.getBoundingClientRect();
    return {
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right,
        width: rect.width,
        height: rect.height,
        visible: rect.top < window.innerHeight && rect.bottom > 0
    };
}

// ========================================
// MOBILE MENU TOGGLE
// ========================================

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (!mobileMenuBtn || !navMenu) return;

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-menu .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ========================================
// INTERSECTION OBSERVER - SCROLL ANIMATIONS
// ========================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// ========================================
// SCROLL PROGRESS BAR
// ========================================

function initScrollProgress() {
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.prepend(scrollProgress);

    const updateScrollProgress = throttle(() => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    }, 10);

    window.addEventListener('scroll', updateScrollProgress);
}

// ========================================
// ACTIVE NAVIGATION LINK
// ========================================

function initActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    const highlightActiveLink = throttle(() => {
        const scrollPosition = window.scrollY + 100;

        navLinks.forEach(link => {
            const sectionId = link.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);

            if (!section) return;

            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    }, 50);

    window.addEventListener('scroll', highlightActiveLink);
    highlightActiveLink();
}

// ========================================
// YEAR FOOTER
// ========================================

function initFooterYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

function initAnchorLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                smoothScroll(href.substring(1));
            }
        });
    });
}

// ========================================
// LAZY LOADING IMAGES
// ========================================

function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ========================================
// BUTTON RIPPLE EFFECT
// ========================================

function initButtonRipple() {
    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.className = 'ripple';

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// ========================================
// FORM VALIDATION (if needed)
// ========================================

function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            let isValid = true;

            form.querySelectorAll('input[required], textarea[required]').forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });

            if (!isValid) {
                e.preventDefault();
            }
        });
    });
}

// ========================================
// KEYBOARD NAVIGATION
// ========================================

function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Close mobile menu with Escape
        if (e.key === 'Escape') {
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const navMenu = document.querySelector('.nav-menu');
            if (mobileMenuBtn && navMenu) {
                mobileMenuBtn.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }

        // Skip to main content with Alt + M
        if (e.altKey && e.key === 'm') {
            e.preventDefault();
            const mainContent = document.getElementById('main-content');
            if (mainContent) {
                mainContent.focus();
                mainContent.scrollIntoView();
            }
        }
    });
}

// ========================================
// ACCESSIBILITY - FOCUS MANAGEMENT
// ========================================

function initFocusManagement() {
    // Track focus visible state
    let usingKeyboard = false;

    document.addEventListener('keydown', () => {
        usingKeyboard = true;
    });

    document.addEventListener('mousedown', () => {
        usingKeyboard = false;
    });

    // Apply focus-visible only for keyboard navigation
    if (!usingKeyboard) {
        document.body.classList.add('using-mouse');
    }
}

// ========================================
// PERFORMANCE - PRELOAD CRITICAL RESOURCES
// ========================================

function preloadCriticalResources() {
    // Preload Google Fonts
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link);

    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = 'anonymous';
    document.head.appendChild(link2);
}

// ========================================
// ANALYTICS & TRACKING (Optional)
// ========================================

function trackPageView() {
    // Add your analytics tracking code here
    // Example: Google Analytics, Mixpanel, etc.
    
    if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'page_view', {
            page_path: window.location.pathname,
            page_title: document.title
        });
    }
}

// ========================================
// PERFORMANCE MONITORING
// ========================================

function initPerformanceMonitoring() {
    if ('PerformanceObserver' in window) {
        try {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    console.log('Performance Entry:', entry);
                }
            });

            observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
        } catch (e) {
            // Performance monitoring not supported
        }
    }
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initMobileMenu();
    initScrollAnimations();
    initScrollProgress();
    initActiveNavLink();
    initFooterYear();
    initAnchorLinks();
    initLazyLoading();
    initButtonRipple();
    initFormValidation();
    initKeyboardNavigation();
    initFocusManagement();
    preloadCriticalResources();
    trackPageView();
    initPerformanceMonitoring();

    console.log('Portfolio initialized successfully');
});

// ========================================
// SERVICE WORKER REGISTRATION (Optional PWA)
// ========================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed:', err));
    });
}

// ========================================
// ERROR HANDLING
// ========================================

window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    // Send error to analytics
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    // Send error to analytics
});

// ========================================
// VISIBILITY CHANGE HANDLING
// ========================================

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Page hidden');
    } else {
        console.log('Page visible');
    }
});
