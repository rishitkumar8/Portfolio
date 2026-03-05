/* ═══════════════════════════════════════════════════
   RISHIT KUMAR — PORTFOLIO STYLESHEET
   Design: Navy + Purple + Teal Theme | Font: Inter
   ═══════════════════════════════════════════════════ */

/* ─── DESIGN TOKENS ─── */
:root {
    --primary: #a855f7;
    --primary-dark: #9333ea;
    --primary-light: #c084fc;
    --primary-glow: rgba(168, 85, 247, 0.2);
    --primary-glow-strong: rgba(168, 85, 247, 0.4);

    --secondary: #06b6d4;
    --secondary-dark: #0891b2;
    --secondary-light: #22d3ee;
    --secondary-glow: rgba(6, 182, 212, 0.2);
    --secondary-glow-strong: rgba(6, 182, 212, 0.4);

    --bg: #060b18;
    --bg-card: rgba(15, 23, 52, 0.65);
    --bg-card-solid: #0d1530;
    --bg-card-hover: #111d42;
    --bg-nav: rgba(6, 11, 24, 0.88);
    --border: rgba(168, 85, 247, 0.12);
    --border-hover: rgba(168, 85, 247, 0.35);
    --border-teal: rgba(6, 182, 212, 0.25);

    --text: #e8eaf0;
    --text-secondary: #94a0be;
    --text-muted: #5e6b88;

    --radius: 1.25rem;
    --radius-sm: 0.75rem;
    --transition: 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    --font: 'Inter', system-ui, -apple-system, sans-serif;
}

/* ─── RESET & BASE ─── */
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 5rem;
    font-size: 16px;
}

body {
    font-family: var(--font);
    background: var(--bg);
    color: var(--text);
    line-height: 1.7;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

a {
    text-decoration: none;
    color: inherit;
    transition: var(--transition);
}

img {
    max-width: 100%;
    display: block;
}

ul {
    list-style: none;
}

strong {
    color: var(--secondary-light);
    font-weight: 600;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.section {
    padding: 7rem 0;
    position: relative;
}

/* ─── SECTION TITLE ─── */
.section-title {
    font-size: 2.2rem;
    font-weight: 800;
    margin-bottom: 3.5rem;
    letter-spacing: -0.03em;
}

.title-number {
    color: var(--secondary);
    font-weight: 500;
    font-size: 1.1rem;
    margin-right: 0.75rem;
    font-family: 'Courier New', monospace;
}

/* ═══════════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════════ */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    padding: 1rem 0;
    background: var(--bg-nav);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid transparent;
    transition: var(--transition);
}

.navbar.scrolled {
    padding: 0.65rem 0;
    border-bottom-color: var(--border);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav-logo {
    font-size: 1.15rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--text);
    transition: var(--transition);
}

.nav-logo:hover {
    color: var(--primary);
}

.nav-links {
    display: flex;
    gap: 2.5rem;
    align-items: center;
}

.nav-link {
    font-size: 0.88rem;
    font-weight: 400;
    color: var(--text-secondary);
    position: relative;
    padding: 0.25rem 0;
    letter-spacing: 0.02em;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    border-radius: 1px;
    transition: width 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
    color: var(--text);
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

.nav-social {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.social-icon {
    font-size: 1.05rem;
    color: var(--text-secondary);
    transition: var(--transition);
}

.social-icon:hover {
    color: var(--secondary);
    transform: translateY(-2px);
}

/* Hamburger */
.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    z-index: 1001;
}

.hamburger span {
    width: 24px;
    height: 2px;
    background: var(--text);
    border-radius: 2px;
    transition: var(--transition);
}

.hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
    opacity: 0;
}

.hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
}

/* ═══════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════ */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding-top: 5rem;
    background:
        radial-gradient(ellipse 60% 50% at 70% 50%, rgba(168, 85, 247, 0.08) 0%, transparent 70%),
        radial-gradient(ellipse 40% 60% at 20% 80%, rgba(6, 182, 212, 0.06) 0%, transparent 60%),
        var(--bg);
}

.hero::before {
    content: '';
    position: absolute;
    top: -20%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.06) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
}

.hero::after {
    content: '';
    position: absolute;
    bottom: -15%;
    left: -5%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
}

.hero-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    width: 100%;
}

.hero-content {
    flex: 1;
    max-width: 600px;
}

.hero-greeting {
    font-size: 1.1rem;
    color: var(--secondary);
    font-weight: 500;
    margin-bottom: 0.75rem;
    letter-spacing: 0.05em;
    opacity: 0;
    animation: fadeSlideUp 0.6s 0.2s forwards;
}

.hero-name {
    font-size: clamp(2.8rem, 6vw, 4.2rem);
    font-weight: 900;
    letter-spacing: -0.04em;
    line-height: 1.1;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--text) 0%, var(--primary-light) 40%, var(--secondary) 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: fadeSlideUp 0.6s 0.4s forwards, gradientShift 6s ease infinite;
    opacity: 0;
}

.hero-role {
    font-size: 1.25rem;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    min-height: 2rem;
    opacity: 0;
    animation: fadeSlideUp 0.6s 0.6s forwards;
}

.typing-wrapper {
    display: inline-flex;
    align-items: center;
}

.typing-text {
    color: var(--secondary-light);
    font-weight: 600;
}

.cursor {
    color: var(--primary);
    font-weight: 300;
    animation: blink 0.8s step-end infinite;
    margin-left: 2px;
}

.hero-description {
    color: var(--text-secondary);
    font-size: 0.98rem;
    line-height: 1.8;
    margin-bottom: 2.5rem;
    max-width: 520px;
    opacity: 0;
    animation: fadeSlideUp 0.6s 0.8s forwards;
}

.hero-buttons {
    display: flex;
    gap: 1.25rem;
    align-items: center;
    opacity: 0;
    animation: fadeSlideUp 0.6s 1s forwards;
}

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.85rem 1.75rem;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 600;
    font-family: var(--font);
    cursor: pointer;
    transition: var(--transition);
    border: none;
    letter-spacing: 0.01em;
}

.btn-primary {
    background: linear-gradient(135deg, var(--primary), var(--secondary-dark));
    color: #fff;
    box-shadow: 0 4px 20px var(--primary-glow);
}

.btn-primary:hover {
    background: linear-gradient(135deg, var(--primary-dark), var(--secondary));
    box-shadow: 0 6px 30px var(--primary-glow-strong), 0 4px 15px var(--secondary-glow);
    transform: translateY(-2px);
}

.btn-ghost {
    background: transparent;
    color: var(--text);
    border: 1px solid var(--border);
    backdrop-filter: blur(8px);
}

.btn-ghost:hover {
    border-color: var(--secondary);
    color: var(--secondary);
    transform: translateY(-2px);
}

/* Hero Image */
.hero-image {
    position: relative;
    flex-shrink: 0;
    opacity: 0;
    animation: fadeScale 0.8s 0.6s forwards;
}

.image-frame {
    width: 320px;
    height: 320px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid rgba(6, 182, 212, 0.25);
    position: relative;
    z-index: 2;
    background: var(--bg-card-solid);
}

.image-frame img {
    width: 200%;
    height: 150%; 
    object-fit: cover;
    transition: transform 0.6s ease;
}

.image-frame:hover img {
    transform: scale(1.05);
}

.image-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background: radial-gradient(circle, var(--secondary-glow-strong) 0%, var(--primary-glow) 50%, transparent 70%);
    z-index: 0;
    animation: pulse 4s ease-in-out infinite;
}

.image-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 370px;
    height: 370px;
    border-radius: 50%;
    border: 1px solid var(--border-teal);
    z-index: 1;
    animation: spin 20s linear infinite;
}

.image-ring::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--secondary);
    box-shadow: 0 0 12px var(--secondary);
}

/* Scroll Indicator */
.hero-scroll-indicator {
    position: absolute;
    bottom: 2.5rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    opacity: 0;
    animation: fadeSlideUp 0.6s 1.5s forwards;
}

.hero-scroll-indicator span {
    font-size: 0.7rem;
    color: var(--text-muted);
    letter-spacing: 0.15em;
    text-transform: uppercase;
}

.scroll-line {
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, var(--secondary), transparent);
    animation: scrollPulse 2s ease infinite;
}

/* ═══════════════════════════════════════════════════
   ABOUT SECTION
   ═══════════════════════════════════════════════════ */
.about-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 4rem;
    align-items: start;
}

.about-text p {
    color: var(--text-secondary);
    font-size: 0.98rem;
    margin-bottom: 1.25rem;
    line-height: 1.85;
}

.about-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
}

.stat-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.75rem;
    text-align: center;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(12px);
}

.stat-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    opacity: 0;
    transition: opacity 0.3s;
}

.stat-card:hover {
    border-color: var(--border-hover);
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(168, 85, 247, 0.15);
}

.stat-card:hover::before {
    opacity: 1;
}

.stat-number {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    display: inline;
}

.stat-plus {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--secondary);
}

.stat-label {
    display: block;
    font-size: 0.82rem;
    color: var(--text-muted);
    margin-top: 0.5rem;
    letter-spacing: 0.02em;
}

/* ═══════════════════════════════════════════════════
   SKILLS SECTION
   ═══════════════════════════════════════════════════ */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-bottom: 3rem;
}

.skill-category {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 2rem;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(12px);
}

.skill-category::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.04) 0%, rgba(6, 182, 212, 0.02) 100%);
    opacity: 0;
    transition: opacity 0.4s;
}

.skill-category:hover {
    border-color: var(--border-hover);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(168, 85, 247, 0.12);
}

.skill-category:hover::before {
    opacity: 1;
}

.skill-category-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: linear-gradient(135deg, var(--primary-glow), var(--secondary-glow));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: var(--secondary);
    margin-bottom: 1.25rem;
}

.skill-category h3 {
    font-size: 1.05rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--text);
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.skill-tag {
    background: rgba(168, 85, 247, 0.08);
    color: var(--primary-light);
    padding: 0.35rem 0.85rem;
    border-radius: 50px;
    font-size: 0.78rem;
    font-weight: 500;
    border: 1px solid rgba(168, 85, 247, 0.15);
    transition: var(--transition);
}

.skill-tag:hover {
    background: rgba(6, 182, 212, 0.12);
    border-color: var(--secondary);
    color: var(--secondary-light);
    transform: translateY(-1px);
}

/* Soft Skills Marquee */
.soft-skills {
    margin-top: 1rem;
}

.soft-skills-title {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 1.25rem;
    text-align: center;
    color: var(--text-secondary);
}

.soft-skills-marquee {
    overflow: hidden;
    position: relative;
    padding: 1rem 0;
    mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
}

.marquee-track {
    display: flex;
    gap: 2rem;
    animation: marquee 25s linear infinite;
    width: max-content;
}

.marquee-track span {
    background: var(--bg-card);
    border: 1px solid var(--border);
    color: var(--text-secondary);
    padding: 0.5rem 1.25rem;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 500;
    white-space: nowrap;
    transition: var(--transition);
    backdrop-filter: blur(8px);
}

.marquee-track span:hover {
    border-color: var(--secondary);
    color: var(--secondary-light);
}

/* ═══════════════════════════════════════════════════
   PROJECTS SECTION
   ═══════════════════════════════════════════════════ */
.projects-header {
    text-align: center;
    margin-bottom: 3.5rem;
}

.projects-label {
    font-size: 0.82rem;
    color: var(--secondary);
    letter-spacing: 0.25em;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

.projects-main-title {
    font-size: clamp(2rem, 4vw, 2.8rem);
    font-weight: 900;
    color: var(--text);
    margin: 0.5rem 0 0.75rem;
    letter-spacing: -0.03em;
}

.projects-subtitle {
    font-size: 0.95rem;
    color: var(--text-muted);
    max-width: 500px;
    margin: 0 auto;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
}

.project-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 0;
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(12px);
}

.project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--primary), var(--secondary), transparent);
    opacity: 0;
    transition: opacity 0.4s;
}

.project-card:hover {
    border-color: var(--border-hover);
    transform: translateY(-6px);
    box-shadow: 0 16px 50px rgba(168, 85, 247, 0.12), 0 8px 20px rgba(6, 182, 212, 0.08);
}

.project-card:hover::before {
    opacity: 1;
}

/* Card Top: number + icon area */
.project-card-top {
    position: relative;
    padding: 1.5rem 1.75rem 1rem;
}

.project-number {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--text-muted);
    background: rgba(94, 107, 136, 0.12);
    border: 1px solid rgba(94, 107, 136, 0.2);
    padding: 0.25rem 0.6rem;
    border-radius: 6px;
    letter-spacing: 0.05em;
    margin-bottom: 1.25rem;
}

.project-icon-area {
    font-size: 3rem;
    line-height: 1;
    margin-bottom: 0.5rem;
    filter: drop-shadow(0 4px 12px rgba(168, 85, 247, 0.25));
}

/* Card body */
.project-title {
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 0.65rem;
    color: var(--text);
    transition: color 0.3s;
    padding: 0 1.75rem;
}

.project-card:hover .project-title {
    color: var(--primary-light);
}

.project-desc {
    font-size: 0.86rem;
    color: var(--text-secondary);
    line-height: 1.7;
    flex: 1;
    margin-bottom: 1rem;
    padding: 0 1.75rem;
}

/* Tech Tags */
.project-tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    padding: 0 1.75rem;
    margin-bottom: 1.25rem;
}

.tech-tag {
    font-size: 0.72rem;
    font-weight: 500;
    color: var(--secondary-light);
    background: rgba(6, 182, 212, 0.08);
    border: 1px solid rgba(6, 182, 212, 0.2);
    padding: 0.3rem 0.75rem;
    border-radius: 50px;
    transition: var(--transition);
    letter-spacing: 0.02em;
}

.tech-tag:hover {
    background: rgba(6, 182, 212, 0.15);
    border-color: var(--secondary);
}

/* Action Buttons */
.project-actions {
    display: flex;
    gap: 0.75rem;
    padding: 0 1.75rem 1.75rem;
    margin-top: auto;
}

.btn-project {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.55rem 1.15rem;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 600;
    font-family: var(--font);
    cursor: pointer;
    transition: var(--transition);
    text-decoration: none;
    border: none;
}

.btn-github {
    background: linear-gradient(135deg, #0070f3, #00b4d8);
    color: #fff;
}

.btn-github:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 18px rgba(0, 112, 243, 0.35);
}

.btn-casestudy {
    background: rgba(232, 234, 240, 0.06);
    color: var(--text-secondary);
    border: 1px solid var(--border);
}

.btn-casestudy:hover {
    border-color: var(--border-hover);
    color: var(--text);
    background: rgba(168, 85, 247, 0.08);
    transform: translateY(-2px);
}

/* ═══════════════════════════════════════════════════
   CASE STUDY MODAL
   ═══════════════════════════════════════════════════ */
.cs-modal-overlay {
    position: fixed;
    inset: 0;
    z-index: 2000;
    background: rgba(6, 11, 24, 0.75);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.35s ease, visibility 0.35s ease;
    padding: 1.5rem;
}

.cs-modal-overlay.active {
    opacity: 1;
    visibility: visible;
}

.cs-modal {
    background: var(--bg-card-solid);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 2.5rem;
    max-width: 560px;
    width: 100%;
    position: relative;
    transform: translateY(30px) scale(0.95);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    max-height: 85vh;
    overflow-y: auto;
    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.5), 0 0 60px rgba(168, 85, 247, 0.08);
}

.cs-modal-overlay.active .cs-modal {
    transform: translateY(0) scale(1);
}

.cs-modal-close {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background: rgba(94, 107, 136, 0.12);
    border: 1px solid var(--border);
    color: var(--text-muted);
    font-size: 0.9rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
}

.cs-modal-close:hover {
    background: rgba(168, 85, 247, 0.15);
    border-color: var(--border-hover);
    color: var(--text);
}

.cs-modal-title {
    font-size: 1.35rem;
    font-weight: 800;
    color: var(--text);
    margin-bottom: 1.25rem;
    padding-right: 2.5rem;
    line-height: 1.35;
}

.cs-modal-desc {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.85;
    margin-bottom: 1.75rem;
}

.cs-modal-label {
    display: block;
    font-size: 0.7rem;
    font-weight: 700;
    color: var(--text-muted);
    letter-spacing: 0.2em;
    margin-bottom: 0.75rem;
}

.cs-modal-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.75rem;
}

.cs-modal-tags .tech-tag {
    font-size: 0.75rem;
    padding: 0.35rem 0.85rem;
}

.cs-modal-github {
    font-size: 0.85rem;
    padding: 0.7rem 1.5rem;
    border-radius: 50px;
}

/* Old project styles kept for backward compat (unused but harmless) */
.project-card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;
}

.project-icon {
    font-size: 1.8rem;
    color: var(--secondary);
}

.project-links {
    display: flex;
    gap: 0.75rem;
}

.project-links a {
    color: var(--text-muted);
    font-size: 1.1rem;
    transition: var(--transition);
}

.project-links a:hover {
    color: var(--primary);
    transform: translateY(-2px);
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
}

.project-tech span {
    font-size: 0.75rem;
    color: var(--text-muted);
    font-family: 'Courier New', monospace;
    font-weight: 500;
}

.project-tech span::before {
    content: '#';
    color: var(--secondary);
    margin-right: 2px;
}

.project-timeline {
    font-size: 0.78rem;
    color: var(--text-muted);
    letter-spacing: 0.03em;
}

/* ═══════════════════════════════════════════════════
   EDUCATION SECTION — ACADEMIC BACKGROUND
   ═══════════════════════════════════════════════════ */
.edu-header {
    text-align: center;
    margin-bottom: 3rem;
}

.edu-label {
    font-size: 0.82rem;
    color: var(--secondary);
    letter-spacing: 0.25em;
    font-weight: 600;
}

.edu-main-title {
    font-size: clamp(2rem, 4vw, 2.8rem);
    font-weight: 900;
    color: var(--text);
    margin-top: 0.5rem;
    letter-spacing: -0.03em;
}

/* College Card */
.edu-college-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 2.5rem;
    margin-bottom: 2rem;
    backdrop-filter: blur(12px);
    position: relative;
    overflow: hidden;
    transition: var(--transition);
}

.edu-college-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
}

.edu-college-card:hover {
    border-color: var(--border-hover);
    box-shadow: 0 12px 40px rgba(168, 85, 247, 0.1);
}

.edu-college-top {
    display: flex;
    align-items: flex-start;
    gap: 1.25rem;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--border);
}

.edu-college-icon {
    font-size: 2.5rem;
    line-height: 1;
    flex-shrink: 0;
    filter: drop-shadow(0 4px 12px rgba(168, 85, 247, 0.25));
}

.edu-college-info h3 {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 0.35rem;
}

.edu-degree {
    font-size: 0.9rem;
    color: var(--secondary);
    font-weight: 600;
    margin-bottom: 0.35rem;
}

.edu-status {
    font-size: 0.85rem;
    color: var(--text-secondary);
}

.edu-status strong {
    color: var(--text);
}

/* Subjects & Focus Areas */
.edu-subjects-section {
    margin-bottom: 1.5rem;
}

.edu-subjects-section:last-child {
    margin-bottom: 0;
}

.edu-section-label {
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--text-muted);
    letter-spacing: 0.18em;
    margin-bottom: 0.85rem;
    display: block;
}

.edu-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.edu-tag {
    font-size: 0.78rem;
    font-weight: 500;
    padding: 0.4rem 0.9rem;
    border-radius: 50px;
    transition: var(--transition);
}

.edu-tag.filled {
    background: rgba(168, 85, 247, 0.12);
    color: var(--primary-light);
    border: 1px solid rgba(168, 85, 247, 0.2);
}

.edu-tag.filled:hover {
    background: rgba(168, 85, 247, 0.2);
    border-color: var(--primary);
}

.edu-tag.outline {
    background: transparent;
    color: var(--text-muted);
    border: 1px solid var(--border);
}

.edu-tag.outline:hover {
    border-color: var(--secondary);
    color: var(--secondary-light);
}

/* Schooling Cards */
.edu-schooling-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
}

.edu-school-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.75rem;
    display: flex;
    align-items: center;
    gap: 1.25rem;
    transition: var(--transition);
    backdrop-filter: blur(12px);
}

.edu-school-card:hover {
    border-color: var(--border-hover);
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(168, 85, 247, 0.1);
}

.edu-school-badge {
    width: 56px;
    height: 56px;
    min-width: 56px;
    border-radius: 14px;
    background: linear-gradient(135deg, var(--primary-glow), var(--secondary-glow));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: 800;
    color: var(--secondary);
    border: 1px solid var(--border-teal);
}

.edu-school-details h4 {
    font-size: 1rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 0.2rem;
}

.edu-school-board {
    font-size: 0.78rem;
    color: var(--text-muted);
    margin-bottom: 0.5rem;
}

.edu-school-score {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
}

.edu-score-value {
    font-size: 1.4rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.edu-score-label {
    font-size: 0.72rem;
    color: var(--text-muted);
    letter-spacing: 0.03em;
}

/* ═══════════════════════════════════════════════════
   GROWTH JOURNEY SECTION
   ═══════════════════════════════════════════════════ */
.journey-header {
    text-align: center;
    margin-bottom: 3rem;
}

.journey-label {
    font-size: 0.82rem;
    color: var(--secondary);
    letter-spacing: 0.25em;
    font-weight: 600;
}

.journey-main-title {
    font-size: clamp(2rem, 4vw, 2.8rem);
    font-weight: 900;
    color: var(--text);
    margin-top: 0.5rem;
    letter-spacing: -0.03em;
}

/* Horizontal Milestone Bar */
.journey-milestones {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 2.5rem 2rem;
    margin-bottom: 3rem;
    backdrop-filter: blur(12px);
    overflow-x: auto;
}

.milestone-track {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    min-width: 500px;
}

.milestone-line {
    position: absolute;
    top: 24px;
    left: 30px;
    right: 30px;
    height: 3px;
    background: var(--border);
    border-radius: 2px;
    z-index: 0;
}

.milestone-line::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 60%;
    height: 100%;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    border-radius: 2px;
}

.milestone-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    position: relative;
    z-index: 1;
    flex: 1;
}

.milestone-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--bg-card-solid);
    border: 2px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    transition: var(--transition);
}

.milestone-item.active .milestone-icon {
    border-color: var(--secondary);
    box-shadow: 0 0 20px var(--secondary-glow-strong);
}

.milestone-year {
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--secondary);
    letter-spacing: 0.05em;
}

.milestone-name {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--text-secondary);
    text-align: center;
}

/* Vertical Timeline */
.journey-timeline {
    position: relative;
    padding-left: 2.5rem;
    margin-bottom: 2.5rem;
}

.journey-timeline::before {
    content: '';
    position: absolute;
    top: 0;
    left: 8px;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, var(--primary), var(--secondary), var(--border));
    border-radius: 2px;
}

.journey-phase {
    position: relative;
    padding-bottom: 2rem;
}

.journey-phase:last-child {
    padding-bottom: 0;
}

.phase-dot {
    position: absolute;
    left: -2.5rem;
    top: 0.4rem;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--bg);
    border: 3px solid var(--primary);
    z-index: 1;
    box-shadow: 0 0 12px var(--primary-glow);
    transition: var(--transition);
}

.journey-phase:hover .phase-dot {
    border-color: var(--secondary);
    box-shadow: 0 0 18px var(--secondary-glow-strong);
}

.phase-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.75rem;
    transition: var(--transition);
    backdrop-filter: blur(12px);
}

.phase-card:hover {
    border-color: var(--border-hover);
    transform: translateX(6px);
    box-shadow: 0 8px 30px rgba(168, 85, 247, 0.08);
}

.phase-label {
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--primary-light);
    letter-spacing: 0.15em;
    display: block;
    margin-bottom: 0.5rem;
}

.phase-title {
    font-size: 1.15rem;
    font-weight: 800;
    color: var(--text);
    margin-bottom: 0.6rem;
}

.phase-desc {
    font-size: 0.88rem;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 0.85rem;
}

.phase-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin-bottom: 0.85rem;
}

.phase-tag {
    font-size: 0.72rem;
    font-weight: 500;
    color: var(--secondary-light);
    background: rgba(6, 182, 212, 0.08);
    border: 1px solid rgba(6, 182, 212, 0.2);
    padding: 0.3rem 0.75rem;
    border-radius: 50px;
    transition: var(--transition);
}

.phase-tag:hover {
    background: rgba(6, 182, 212, 0.15);
    border-color: var(--secondary);
}

.phase-project {
    font-size: 0.82rem;
    color: var(--primary-light);
    line-height: 1.6;
}

/* Focus & Vision Cards */
.journey-focus-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
}

.journey-focus-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.75rem;
    transition: var(--transition);
    backdrop-filter: blur(12px);
}

.journey-focus-card:hover {
    border-color: var(--border-hover);
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(168, 85, 247, 0.1);
}

.journey-focus-card h4 {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 0.75rem;
}

.journey-focus-card p {
    font-size: 0.88rem;
    color: var(--text-secondary);
    line-height: 1.75;
}

.journey-focus-card strong {
    color: var(--primary-light);
}

/* ═══════════════════════════════════════════════════
   ACHIEVEMENTS SECTION
   ═══════════════════════════════════════════════════ */
.achievements-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.5rem;
}

.achievement-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.75rem;
    display: flex;
    gap: 1.25rem;
    align-items: flex-start;
    transition: var(--transition);
    backdrop-filter: blur(12px);
}

.achievement-card:hover {
    border-color: var(--border-teal);
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(6, 182, 212, 0.1);
}

.achievement-icon {
    width: 44px;
    height: 44px;
    min-width: 44px;
    border-radius: 12px;
    background: linear-gradient(135deg, var(--secondary-glow), var(--primary-glow));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    color: var(--secondary);
}

.achievement-card p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.7;
}

/* ═══════════════════════════════════════════════════
   CONTACT SECTION
   ═══════════════════════════════════════════════════ */
.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
}

.contact-text {
    font-size: 1.05rem;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 2rem;
}

.contact-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-link-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--text-secondary);
    font-size: 0.92rem;
    padding: 0.75rem 1rem;
    border-radius: var(--radius-sm);
    transition: var(--transition);
    border: 1px solid transparent;
}

.contact-link-item:hover {
    color: var(--secondary-light);
    background: rgba(6, 182, 212, 0.05);
    border-color: var(--border-teal);
    transform: translateX(6px);
}

.contact-link-item i {
    font-size: 1.2rem;
    color: var(--secondary);
    width: 24px;
    text-align: center;
}

/* Contact Form */
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

.form-group {
    position: relative;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 1rem 1.25rem;
    background: var(--bg-card-solid);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    color: var(--text);
    font-size: 0.92rem;
    font-family: var(--font);
    outline: none;
    transition: var(--transition);
    resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
    border-color: var(--secondary);
    box-shadow: 0 0 0 3px var(--secondary-glow);
}

.form-group label {
    position: absolute;
    left: 1.25rem;
    top: 1rem;
    color: var(--text-muted);
    font-size: 0.9rem;
    pointer-events: none;
    transition: var(--transition);
    background: var(--bg-card-solid);
    padding: 0 0.35rem;
}

.form-group input:focus~label,
.form-group input:not(:placeholder-shown)~label,
.form-group textarea:focus~label,
.form-group textarea:not(:placeholder-shown)~label {
    top: -0.55rem;
    font-size: 0.75rem;
    color: var(--secondary);
}

.btn-submit {
    align-self: flex-start;
    margin-top: 0.5rem;
}

.form-feedback {
    font-size: 0.85rem;
    font-weight: 500;
    margin-top: 0.5rem;
    min-height: 1.2rem;
}

.form-feedback.success {
    color: #4ade80;
}

.form-feedback.error {
    color: #f87171;
}

/* ═══════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════ */
.footer {
    padding: 2.5rem 0;
    border-top: 1px solid var(--border);
}

.footer-content {
    text-align: center;
}

.footer-text {
    font-size: 0.88rem;
    color: var(--text-secondary);
    margin-bottom: 0.35rem;
}

.footer-year {
    font-size: 0.78rem;
    color: var(--text-muted);
}

/* ─── BACK TO TOP ─── */
.back-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    transition: var(--transition);
    box-shadow: 0 4px 20px var(--primary-glow);
}

.back-to-top.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.back-to-top:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px var(--primary-glow-strong), 0 4px 15px var(--secondary-glow);
}

/* ═══════════════════════════════════════════════════
   REVEAL ANIMATION (scroll)
   ═══════════════════════════════════════════════════ */
.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

/* stagger children */
.reveal:nth-child(2) {
    transition-delay: 0.1s;
}

.reveal:nth-child(3) {
    transition-delay: 0.2s;
}

.reveal:nth-child(4) {
    transition-delay: 0.3s;
}

.reveal:nth-child(5) {
    transition-delay: 0.4s;
}

.reveal:nth-child(6) {
    transition-delay: 0.5s;
}

/* ═══════════════════════════════════════════════════
   KEYFRAMES
   ═══════════════════════════════════════════════════ */
@keyframes fadeSlideUp {
    from {
        opacity: 0;
        transform: translateY(25px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeScale {
    from {
        opacity: 0;
        transform: scale(0.85);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

@keyframes gradientShift {

    0%,
    100% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }
}

@keyframes pulse {

    0%,
    100% {
        opacity: 0.5;
        transform: translate(-50%, -50%) scale(1);
    }

    50% {
        opacity: 0.8;
        transform: translate(-50%, -50%) scale(1.08);
    }
}

@keyframes spin {
    from {
        transform: translate(-50%, -50%) rotate(0deg);
    }

    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}

@keyframes scrollPulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.3;
    }
}

@keyframes marquee {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

/* ═══════════════════════════════════════════════════
   RESPONSIVE — TABLET
   ═══════════════════════════════════════════════════ */
@media (max-width: 992px) {
    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .hero-container {
        flex-direction: column;
        text-align: center;
    }

    .hero-content {
        max-width: 100%;
    }

    .hero-description {
        max-width: 100%;
    }

    .hero-buttons {
        justify-content: center;
    }

    .image-frame {
        width: 260px;
        height: 260px;
    }

    .image-glow {
        width: 290px;
        height: 290px;
    }

    .image-ring {
        width: 310px;
        height: 310px;
    }

    .about-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    .contact-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
}

/* ═══════════════════════════════════════════════════
   RESPONSIVE — MOBILE
   ═══════════════════════════════════════════════════ */
@media (max-width: 768px) {
    .section {
        padding: 5rem 0;
    }

    .section-title {
        font-size: 1.75rem;
    }

    .nav-links,
    .nav-social {
        display: none;
    }

    .hamburger {
        display: flex;
    }

    .nav-links.open {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(6, 11, 24, 0.97);
        backdrop-filter: blur(30px);
        justify-content: center;
        align-items: center;
        gap: 2rem;
        z-index: 999;
    }

    .nav-links.open .nav-link {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--text);
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }

    .achievements-grid {
        grid-template-columns: 1fr;
    }

    .edu-schooling-grid {
        grid-template-columns: 1fr;
    }

    .journey-focus-grid {
        grid-template-columns: 1fr;
    }

    .journey-milestones {
        padding: 1.5rem 1rem;
    }

    .edu-college-card {
        padding: 1.5rem;
    }

    .edu-college-top {
        flex-direction: column;
        gap: 0.75rem;
    }

    .about-stats {
        grid-template-columns: 1fr 1fr;
    }

    .image-frame {
        width: 220px;
        height: 220px;
    }

    .image-glow {
        width: 250px;
        height: 250px;
    }

    .image-ring {
        width: 270px;
        height: 270px;
    }

    .hero-name {
        font-size: 2.5rem;
    }

    .container {
        padding: 0 1.25rem;
    }
}

@media (max-width: 480px) {
    .hero-name {
        font-size: 2rem;
    }

    .hero-buttons {
        flex-direction: column;
        gap: 0.75rem;
    }

    .image-frame {
        width: 180px;
        height: 180px;
    }

    .image-glow {
        width: 210px;
        height: 210px;
    }

    .image-ring {
        width: 230px;
        height: 230px;
    }

    .about-stats {
        grid-template-columns: 1fr;
    }

    .stat-card {
        padding: 1.25rem;
    }
}
