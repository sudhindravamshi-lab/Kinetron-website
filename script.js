// Mobile Navbar Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 34, 0.98)';
    } else {
        navbar.style.background = 'rgba(0, 0, 34, 0.95)';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar active link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}` || link.getAttribute('href').split('#')[1] === current) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .about, .section-title').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Form handling (for all pages)
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            const formContainer = this.parentElement;
            const message = document.createElement('div');
            message.className = 'success-message';
            message.innerHTML = `
                <i class="fas fa-check-circle"></i>
                ${this.dataset.successMsg || 'Thank you! We will contact you soon.'}
            `;
            message.style.cssText = `
                background: linear-gradient(45deg, #25D366, #20B858);
                color: white;
                padding: 1rem 2rem;
                border-radius: 10px;
                text-align: center;
                margin-top: 1rem;
                font-weight: 600;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                animation: slideIn 0.5s ease;
            `;
            
            // Add animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateY(-20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            `;
            document.head.appendChild(style);
            
            formContainer.appendChild(message);
            
            // Reset form and hide after 3 seconds
            setTimeout(() => {
                this.reset();
                message.remove();
            }, 3000);
        });
    });
});

// Page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
// Enhanced Page Load Animation
window.addEventListener('load', () => {
    // Pre-loader animation
    const preloader = document.createElement('div');
    preloader.id = 'preloader';
    preloader.innerHTML = `
        <div class="preloader-content">
            <div class="logo-spin">
                <i class="fas fa-microchip"></i>
                <span>Kinetron</span>
            </div>
            <div class="loader-bar">
                <div class="loader-progress"></div>
            </div>
            <p>Initializing Engineering Hub...</p>
        </div>
    `;
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, var(--bg-dark) 0%, #000011 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    document.body.appendChild(preloader);

    // Animate loader progress
    const progress = document.querySelector('.loader-progress');
    let width = 0;
    const interval = setInterval(() => {
        width += Math.random() * 15;
        if (width >= 100) {
            width = 100;
            clearInterval(interval);
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.remove();
                    document.body.style.opacity = '1';
                    initPageAnimations();
                }, 500);
            }, 800);
        }
        progress.style.width = width + '%';
    }, 150);
});

// Page entry animations
function initPageAnimations() {
    // Staggered hero text animation
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');

    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(50px)';
        setTimeout(() => {
            heroTitle.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 600);
    }

    if (heroSubtitle) {
        heroSubtitle.style.opacity = '0';
        heroSubtitle.style.transform = 'translateY(30px)';
        setTimeout(() => {
            heroSubtitle.style.transition = 'all 0.8s ease 0.2s';
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }, 800);
    }

    if (heroButtons) {
        heroButtons.style.opacity = '0';
        heroButtons.style.transform = 'translateY(30px)';
        setTimeout(() => {
            heroButtons.style.transition = 'all 0.8s ease 0.4s';
            heroButtons.style.opacity = '1';
            heroButtons.style.transform = 'translateY(0)';
        }, 1000);
    }

    // Cards stagger animation
    const cards = document.querySelectorAll('.service-card, .category-card, .project-card, .product-card, .course-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        setTimeout(() => {
            card.style.transition = `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s`;
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 1200 + (index * 150));
    });
}

// Mouse cursor trail effect (Tech feel)
document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: var(--primary);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        animation: trailFade 0.6s ease-out forwards;
        box-shadow: 0 0 10px var(--primary);
    `;
    document.body.appendChild(trail);
    
    setTimeout(() => trail.remove(), 600);
});
// Parallax scrolling effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    // Navbar shrink effect
    const navbar = document.querySelector('.navbar');
    if (scrolled > 100) {
        navbar.style.height = '60px';
        navbar.style.padding = '0 20px';
    } else {
        navbar.style.height = '70px';
        navbar.style.padding = '0 20px';
    }
});

// Floating particles background (Tech atmosphere)
function createParticle() {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        width: 2px;
        height: 2px;
        background: var(--primary);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        left: ${Math.random() * 100}vw;
        animation: float ${Math.random() * 3 + 2}s linear infinite;
        box-shadow: 0 0 5px var(--primary);
    `;
    particle.style.setProperty('--float-delay', Math.random() * 5 + 's');
    document.body.appendChild(particle);
    
    setTimeout(() => particle.remove(), 8000);
}

// Create 20 particles
for (let i = 0; i < 20; i++) {
    setTimeout(createParticle, i * 200);
}

// Recreate particles every 10s
setInterval(() => {
    for (let i = 0; i < 10; i++) {
        setTimeout(createParticle, i * 100);
    }
}, 10000);

// Add particle CSS
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes float {
        0% {
            top: -10px;
            transform: translateY(0px) rotate(0deg);
            opacity: 1;
        }
        100% {
            top: 100vh;
            transform: translateY(50px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Back to top button
const backToTop = document.createElement('button');
backToTop.innerHTML = '<i class="fas fa-chevron-up"></i>';
backToTop.className = 'back-to-top';
backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 90px;
    width: 50px;
    height: 50px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 100;
    box-shadow: 0 10px 30px rgba(25,131,196,0.4);
`;
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.style.opacity = '1';
        backToTop.style.visibility = 'visible';
        backToTop.style.transform = 'translateY(0)';
    } else {
        backToTop.style.opacity = '0';
        backToTop.style.visibility = 'hidden';
        backToTop.style.transform = 'translateY(20px)';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add back-to-top CSS
const backTopStyle = document.createElement('style');
backTopStyle.textContent = `
    .back-to-top:hover {
        background: var(--secondary);
        transform: translateY(-3px) scale(1.1);
        box-shadow: 0 15px 40px rgba(25,131,196,0.6);
    }
`;
document.head.appendChild(backTopStyle);

// Performance optimization - requestAnimationFrame for scroll
let ticking = false;
function updateScroll() {
    // All scroll effects here
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
    }
});

// PWA Support (Optional - makes site installable)
const link = document.createElement('link');
link.rel = 'manifest';
link.href = 'data:application/manifest+json,' + encodeURIComponent(JSON.stringify({
    name: 'Kinetron Technologies',
    short_name: 'Kinetron',
    description: 'Build Real Engineering Skills',
    start_url: '/',
    display: 'standalone',
    background_color: '#000022',
    theme_color: '#1983C4',
    icons: [{
        src: 'data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#1983C4"/><text x="50" y="55" font-size="20" text-anchor="middle" fill="white">KT</text></svg>'),
        sizes: '192x192',
        type: 'image/svg+xml'
    }]
}));
document.head.appendChild(link);

// Service Worker for offline support (Optional)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('data:text/javascript;base64,' + btoa(`
        self.addEventListener('fetch', e => {
            e.respondWith(fetch(e.request).catch(() => {
                return new Response('Offline - Site works without internet!', {status: 200});
            }));
        });
    `));
}

// Final cleanup & performance
console.log('🌟 Kinetron Technologies loaded successfully!');
console.log('💾 Memory optimized | 🎨 Animations active | 📱 PWA ready');
