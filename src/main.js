import './style.css'

// Initialize AOS
AOS.init({
  duration: 600,
  once: true,
  offset: 80,
});

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerOffset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }

      // Close mobile nav after clicking a link
      if (nav && !nav.classList.contains('hidden')) {
        nav.classList.add('hidden');
        nav.classList.remove('mobile-nav-open');
      }
    });
  });

  // Mobile Menu Toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const nav = document.querySelector('header nav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('hidden');
      nav.classList.toggle('mobile-nav-open');
    });
  }

  // Sticky CTA - show after scrolling past hero
  const stickyCta = document.getElementById('sticky-cta');
  if (stickyCta) {
    const showAfter = 600; // px from top
    window.addEventListener('scroll', () => {
      if (window.scrollY > showAfter) {
        stickyCta.classList.remove('hidden');
      } else {
        stickyCta.classList.add('hidden');
      }
    }, { passive: true });
  }
});