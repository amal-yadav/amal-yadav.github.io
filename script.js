// ── Theme Toggle ─────────────────────────────────────
const html = document.documentElement;
const toggleBtn = document.getElementById('themeToggle');

// Load saved preference
const saved = localStorage.getItem('theme');
if (saved) html.setAttribute('data-theme', saved);

toggleBtn.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ── Nav active highlight on scroll ───────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${entry.target.id}`
          ? 'var(--text)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// ── Scroll-in animation ───────────────────────────────
const cards = document.querySelectorAll('.project-card, .about, .contact');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease, background 0.2s, box-shadow 0.2s';
  fadeObserver.observe(el);
});

// Inject .visible rule
const style = document.createElement('style');
style.textContent = `.project-card.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);
