/* ═══════════════════════════════════════════════════
   RISHIT KUMAR — PORTFOLIO JAVASCRIPT
   ═══════════════════════════════════════════════════ */

// ─── TYPING ANIMATION ───
const roles = [
    'Aspiring Data Analyst',
    'Software Developer',
    'Frontend Engineer',
    'Problem Solver'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeSpeed = 100;
const deleteSpeed = 50;
const pauseTime = 1800;

function typeRole() {
    const typingText = document.getElementById('typingText');
    if (!typingText) return;

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeRole, pauseTime);
            return;
        }
    } else {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeRole, isDeleting ? deleteSpeed : typeSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeRole, 1200);
});

// ─── NAVBAR SCROLL EFFECT ───
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ─── ACTIVE NAV LINK HIGHLIGHTING ───
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ─── HAMBURGER MENU ───
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.getElementById('navLinks');

if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinksContainer.classList.toggle('open');
    });

    // Close menu when a nav link is clicked
    navLinksContainer.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinksContainer.classList.remove('open');
        });
    });
}

// ─── SCROLL REVEAL ANIMATION ───
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('revealed');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// ─── STAT COUNTER ANIMATION ───
function animateCounters() {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');

    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const current = parseInt(stat.textContent);

        if (current < target) {
            const increment = Math.ceil(target / 40);
            const newValue = Math.min(current + increment, target);
            stat.textContent = newValue;

            if (newValue < target) {
                setTimeout(() => animateCounters(), 50);
            }
        }
    });
}

// Trigger counter animation when about section is visible
const aboutSection = document.getElementById('about');
let countersAnimated = false;

if (aboutSection) {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                countersAnimated = true;
                animateCounters();
            }
        });
    }, { threshold: 0.3 });

    counterObserver.observe(aboutSection);
}

// ─── CASE STUDY MODAL ───
const csModalOverlay = document.getElementById('csModalOverlay');
const csModal = document.getElementById('csModal');
const csModalClose = document.getElementById('csModalClose');
const csModalTitle = document.getElementById('csModalTitle');
const csModalDesc = document.getElementById('csModalDesc');
const csModalTags = document.getElementById('csModalTags');
const csModalGithub = document.getElementById('csModalGithub');

function openCaseStudy(button) {
    const card = button.closest('.project-card');
    if (!card) return;

    const title = card.getAttribute('data-title');
    const desc = card.getAttribute('data-desc');
    const tags = card.getAttribute('data-tags');
    const github = card.getAttribute('data-github');

    if (csModalTitle) csModalTitle.textContent = title || '';
    if (csModalDesc) csModalDesc.textContent = desc || '';

    if (csModalTags) {
        csModalTags.innerHTML = '';
        if (tags) {
            tags.split(',').forEach(tag => {
                const span = document.createElement('span');
                span.className = 'tech-tag';
                span.textContent = tag.trim();
                csModalTags.appendChild(span);
            });
        }
    }

    if (csModalGithub) {
        if (github && github !== '#') {
            csModalGithub.href = github;
            csModalGithub.style.display = 'inline-flex';
        } else {
            csModalGithub.style.display = 'none';
        }
    }

    if (csModalOverlay) {
        csModalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeCaseStudy() {
    if (csModalOverlay) {
        csModalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

if (csModalClose) {
    csModalClose.addEventListener('click', closeCaseStudy);
}

if (csModalOverlay) {
    csModalOverlay.addEventListener('click', (e) => {
        if (e.target === csModalOverlay) {
            closeCaseStudy();
        }
    });
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCaseStudy();
    }
});

// ─── BACK TO TOP BUTTON ───
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (backToTop) {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
});

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ─── SMOOTH SCROLL FOR ANCHOR LINKS ───
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
            e.preventDefault();
            targetEl.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
