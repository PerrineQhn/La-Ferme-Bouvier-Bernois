/**
 * Script moderne pour l'élevage La Ferme Bouvier Bernois
 * Animations et interactions élégantes
 */

// ============================================
// NAVIGATION - Effet sticky avec animation
// ============================================
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  // Animation lors du scroll
  if (currentScroll > 100) {
    header.style.boxShadow = '0 5px 25px rgba(137, 87, 55, 0.15)';
  } else {
    header.style.boxShadow = '0 2px 20px rgba(137, 87, 55, 0.1)';
  }

  lastScroll = currentScroll;
});

// ============================================
// INTERSECTION OBSERVER - Animations au scroll
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Appliquer l'animation aux sections
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.presentation-content, .banniere, .section-title');

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
  });
});

// ============================================
// NAVIGATION - Lien actif automatique
// ============================================
const navLinks = document.querySelectorAll('.nav-link');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

navLinks.forEach(link => {
  const linkPage = link.getAttribute('href');
  if (linkPage === currentPage || (currentPage === '' && linkPage === './index.html')) {
    link.classList.add('active');
  }
});

// ============================================
// IMAGE - Lazy loading et effet au hover
// ============================================
const images = document.querySelectorAll('img');

images.forEach(img => {
  img.loading = 'lazy';

  // Effet de survol subtil
  img.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.02)';
  });

  img.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});

// ============================================
// SMOOTH SCROLL pour les liens internes
// ============================================
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

// ============================================
// TABLEAUX - Effet de survol sur les lignes
// ============================================
const tableRows = document.querySelectorAll('tbody tr');

tableRows.forEach(row => {
  row.addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'rgba(243, 233, 220, 0.5)';
    this.style.transform = 'scale(1.01)';
  });

  row.addEventListener('mouseleave', function() {
    this.style.backgroundColor = '';
    this.style.transform = 'scale(1)';
  });
});

// ============================================
// PERFORMANCE - Détecter le préférence de mouvement réduit
// ============================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
  // Désactiver les animations pour les utilisateurs préférant moins de mouvement
  document.querySelectorAll('*').forEach(el => {
    el.style.animation = 'none';
    el.style.transition = 'none';
  });
}

// ============================================
// CONSOLE - Message élégant
// ============================================
console.log('%c🐕 Élevage La Ferme Bouvier Bernois', 'color: #895737; font-size: 20px; font-weight: bold;');
console.log('%cSite web moderne et élégant', 'color: #C08552; font-size: 14px;');
