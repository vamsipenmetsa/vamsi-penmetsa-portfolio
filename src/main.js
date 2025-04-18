import './style.css'

// Add smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
  // Handle smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add scroll event for header styling
  const header = document.querySelector('.site-header');
  
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
  
  // Add animation to skill cards when visible
  const skillCards = document.querySelectorAll('.skill-card');
  
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  skillCards.forEach(card => {
    observer.observe(card);
  });

  // --- Newsletter Popup Logic --- 
  const newsletterPopup = document.getElementById('newsletterPopup');
  const heroSection = document.querySelector('.hero');
  const closeButton = document.getElementById('closePopupBtn');
  let popupShown = sessionStorage.getItem('newsletterPopupShown') === 'true'; // Use sessionStorage

  const handleScrollPopup = () => {
    if (!newsletterPopup || !heroSection || popupShown) return;

    const heroHeight = heroSection.offsetHeight;
    const scrollThreshold = heroHeight * 0.8; 

    if (window.scrollY > scrollThreshold) {
      newsletterPopup.classList.add('visible');
      popupShown = true; // Mark as shown for this session
      sessionStorage.setItem('newsletterPopupShown', 'true');
    }
  };

  const handleClosePopup = () => {
    if (!newsletterPopup) return;
    newsletterPopup.classList.remove('visible');
    // No need to set localStorage/sessionStorage here, 
    // as we only want it hidden after explicit close for the session.
    // If you want it permanently closed after clicking 'x', use localStorage here.
  };

  if (closeButton) {
    closeButton.addEventListener('click', handleClosePopup);
  }

  // Only add scroll listener if popup hasn't been shown this session
  if (!popupShown) {
      window.addEventListener('scroll', handleScrollPopup, { passive: true });
      // Initial check in case the page loads already scrolled down
      handleScrollPopup(); 
  }

  // --- Masked Info Reveal --- 
  const maskedElements = document.querySelectorAll('.masked-info');

  maskedElements.forEach(el => {
    const originalText = el.dataset.text;
    const maskedText = el.textContent;

    el.addEventListener('mouseenter', () => {
      el.textContent = originalText;
    });

    el.addEventListener('mouseleave', () => {
      el.textContent = maskedText;
    });

    // Add touch support for mobile
    el.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent potential unwanted page scroll
        el.textContent = originalText;
    }, { passive: false });

    el.addEventListener('touchend', () => {
        // Optional: Re-mask after a delay or keep revealed until next interaction
        setTimeout(() => {
            el.textContent = maskedText;
        }, 2000); // Re-mask after 2 seconds
    });
  });
});