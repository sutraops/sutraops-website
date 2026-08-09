// SutraOps Solutions - small interactions

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.main-nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '78px';
    nav.style.right = '16px';
    nav.style.background = '#fff';
    nav.style.padding = '16px 22px';
    nav.style.borderRadius = '10px';
    nav.style.boxShadow = '0 12px 30px rgba(10,47,94,.15)';
    nav.style.gap = '14px';
    nav.style.zIndex = '80';
  });
}

// Active link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.main-nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 140) current = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// Simple count-up for the stats numbers
function countUp(el) {
  const text = el.textContent.trim();
  const match = text.match(/^(\d+)(\+?)$/);
  if (!match) return;
  const target = parseInt(match[1], 10);
  const suffix = match[2];
  let n = 0;
  const step = Math.max(1, Math.ceil(target / 40));
  const timer = setInterval(() => {
    n += step;
    if (n >= target) { n = target; clearInterval(timer); }
    el.textContent = n + suffix;
  }, 30);
}
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { countUp(e.target); io.unobserve(e.target); }
  });
}, { threshold: 0.6 });
document.querySelectorAll('.stat strong').forEach(el => io.observe(el));
