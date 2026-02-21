/* ═══════════════════════════════════════════════════
   RISHIT KUMAR — PORTFOLIO INTERACTIVITY
   ═══════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    // ─── TYPING ANIMATION ───
    const typingEl = document.getElementById('typingText');
    const roles = [
        'Aspiring Data Analyst',
        'Software Developer',
        'Front-End Developer',
        'Problem Solver',
        'Technical Communicator'
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 80;
    const deleteSpeed = 40;
    const pauseTime = 1800;

    function typeEffect() {
        const currentRole = roles[roleIndex];

        if (!isDeleting) {
            typingEl.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentRole.length) {
                isDeleting = true;
                setTimeout(typeEffect, pauseTime);
                return;
            }
        } else {
            typingEl.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        }

        setTimeout(typeEffect, isDeleting ? deleteSpeed : typeSpeed);
    }

    setTimeout(typeEffect, 1200);


    // ─── NAVBAR SCROLL EFFECT ───
    const navbar = document.getElementById('navbar');

    function handleNavScroll() {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavScroll, { passive: true });


    // ─── ACTIVE NAV LINK HIGHLIGHTING ───
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNav, { passive: true });


    // ─── SMOOTH SCROLL FOR NAV LINKS ───
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu if open
                navLinksEl.classList.remove('open');
                hamburger.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });


    // ─── HAMBURGER MENU ───
    const hamburger = document.getElementById('hamburger');
    const navLinksEl = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinksEl.classList.toggle('open');
        document.body.style.overflow = navLinksEl.classList.contains('open') ? 'hidden' : '';
    });


    // ─── SCROLL‑REVEAL (Intersection Observer) ───
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));


    // ─── COUNTER ANIMATION ───
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'));
                animateCounter(el, target);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => counterObserver.observe(el));

    function animateCounter(el, target) {
        let current = 0;
        const increment = target / 40;
        const duration = 1200;
        const stepTime = duration / 40;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                el.textContent = target;
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(current);
            }
        }, stepTime);
    }


    // ─── BACK TO TOP ───
    const backToTop = document.getElementById('backToTop');

    function handleBackToTop() {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', handleBackToTop, { passive: true });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    // ─── CONTACT FORM ───
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('formName').value.trim();
        const email = document.getElementById('formEmail').value.trim();
        const message = document.getElementById('formMessage').value.trim();

        if (!name || !email || !message) {
            feedback.textContent = 'Please fill in all fields.';
            feedback.className = 'form-feedback error';
            return;
        }

        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            feedback.textContent = 'Please enter a valid email address.';
            feedback.className = 'form-feedback error';
            return;
        }

        // Simulate submission
        const submitBtn = form.querySelector('.btn-submit');
        submitBtn.innerHTML = '<span>Sending...</span> <i class="fa-solid fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;

        setTimeout(() => {
            feedback.textContent = 'Message sent successfully! I\'ll get back to you soon.';
            feedback.className = 'form-feedback success';
            form.reset();
            submitBtn.innerHTML = '<span>Send Message</span> <i class="fa-solid fa-paper-plane"></i>';
            submitBtn.disabled = false;

            setTimeout(() => {
                feedback.textContent = '';
                feedback.className = 'form-feedback';
            }, 5000);
        }, 1500);
    });


    // ─── DOWNLOAD CV PLACEHOLDER ───
    document.getElementById('downloadCV').addEventListener('click', (e) => {
        e.preventDefault();
        alert('CV download is coming soon! Stay tuned.');
    });


    // ─── PARALLAX SUBTLE EFFECT ON HERO IMAGE ───
    const heroImage = document.querySelector('.hero-image');

    if (heroImage && window.innerWidth > 768) {
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            heroImage.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        }, { passive: true });
    }


    // ─── TILT EFFECT ON PROJECT CARDS ───
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            if (window.innerWidth <= 768) return;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / centerY * -3;
            const rotateY = (x - centerX) / centerX * 3;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

});


// ─── CASE STUDY MODAL (global scope for onclick) ───
function openCaseStudy(btn) {
    const card = btn.closest('.project-card');
    const overlay = document.getElementById('csModalOverlay');
    const title = document.getElementById('csModalTitle');
    const desc = document.getElementById('csModalDesc');
    const tagsContainer = document.getElementById('csModalTags');
    const githubLink = document.getElementById('csModalGithub');

    title.textContent = card.dataset.title || '';
    desc.textContent = card.dataset.desc || '';
    githubLink.href = card.dataset.github || '#';

    // Build tech tags
    tagsContainer.innerHTML = '';
    const tags = (card.dataset.tags || '').split(',').filter(t => t.trim());
    tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tech-tag';
        span.textContent = tag.trim();
        tagsContainer.appendChild(span);
    });

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCaseStudy() {
    const overlay = document.getElementById('csModalOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Close handlers (attach after DOM ready)
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('csModalOverlay');
    const closeBtn = document.getElementById('csModalClose');

    if (closeBtn) closeBtn.addEventListener('click', closeCaseStudy);
    if (overlay) overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeCaseStudy();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeCaseStudy();
        }
    });
});
