import './style.css'

// Add smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
  // Handle smooth scrolling for anchor links - IMPROVED VERSION
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Get the height of the header for offset
        const header = document.querySelector('.site-header');
        const headerHeight = header ? header.offsetHeight : 80;
        
        // Calculate position with proper offset
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20; // Added extra 20px for spacing
        
        // Scroll to the element
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Update URL hash without scrolling
        window.history.pushState(null, null, targetId);
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
  
  // Highlight active menu item based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  function highlightActiveSection() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active-link');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active-link');
          }
        });
      }
    });
    
    // Special case for the contact section in footer
    const footer = document.querySelector('footer#contact');
    if (footer) {
      const footerTop = footer.offsetTop - 100;
      if (scrollPosition >= footerTop) {
        navLinks.forEach(link => {
          link.classList.remove('active-link');
          if (link.getAttribute('href') === '#contact') {
            link.classList.add('active-link');
          }
        });
      }
    }
  }
  
  window.addEventListener('scroll', highlightActiveSection);
  
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

  // --- Enhanced Newsletter Popup Logic --- 
  const newsletterPopup = document.getElementById('newsletterPopup');
  const aboutSection = document.querySelector('#about'); // Changed to use about section for threshold
  const closeButton = document.getElementById('closePopupBtn');
  const subscribeBtn = document.querySelector('.newsletter-btn');
  
  // Check if popup has been shown already in this session
  let popupShown = sessionStorage.getItem('newsletterPopupShown') === 'true';

  const handleScrollPopup = () => {
    if (!newsletterPopup || !aboutSection || popupShown) return;

    // Show newsletter earlier - when user scrolls to about section
    const aboutPosition = aboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (aboutPosition < windowHeight * 0.7) {
      newsletterPopup.classList.add('visible');
      popupShown = true;
      sessionStorage.setItem('newsletterPopupShown', 'true');
      
      // Add a subtle animation to draw attention
      if (subscribeBtn) {
        setTimeout(() => {
          subscribeBtn.classList.add('pulse-animation');
        }, 1500);
      }
    }
  };

  const handleClosePopup = () => {
    if (!newsletterPopup) return;
    newsletterPopup.classList.remove('visible');
    
    // Set a shorter timeout before showing again if closed
    setTimeout(() => {
      popupShown = false;
      sessionStorage.removeItem('newsletterPopupShown');
    }, 300000); // 5 minutes
  };

  if (closeButton) {
    closeButton.addEventListener('click', handleClosePopup);
  }

  // Only add scroll listener if popup hasn't been shown this session
  if (!popupShown) {
    window.addEventListener('scroll', handleScrollPopup, { passive: true });
    // Initial check in case the page loads already scrolled down
    setTimeout(handleScrollPopup, 2000); // Check after 2 seconds
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
  
  // Ensure perfect alignment of components on window resize
  const alignComponents = () => {
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
      container.style.maxWidth = container.offsetWidth + 'px';
      requestAnimationFrame(() => {
        container.style.maxWidth = '';
      });
    });
  };
  
  window.addEventListener('resize', alignComponents);
  setTimeout(alignComponents, 100);

  // Check if hash in URL on page load and scroll to that section
  if (window.location.hash) {
    const targetElement = document.querySelector(window.location.hash);
    if (targetElement) {
      setTimeout(() => {
        const header = document.querySelector('.site-header');
        const headerHeight = header ? header.offsetHeight : 80;
        
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 300);
    }
  }
});