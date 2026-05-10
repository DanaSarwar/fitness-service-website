// Smooth scroll for internal nav links and amenity cards
document.addEventListener('DOMContentLoaded', function () {
  console.log('script.js loaded');

  // Handle navigation links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Handle amenity card clicks
  const amenityCards = document.querySelectorAll('.card');
  amenityCards.forEach(card => {
    card.addEventListener('click', function () {
      const cardId = this.id;
      let targetId;

      // Map card IDs to their corresponding detail sections
      switch(cardId) {
        case 'pool-section':
          targetId = 'pool-detail';
          break;
        case 'gym-section':
          targetId = 'gym-detail';
          break;
        case 'spa-section':
          targetId = 'spa-detail';
          break;
        case 'kids-section':
          targetId = 'kids-detail';
          break;
        case 'parking-section':
          targetId = 'parking-detail';
          break;
        default:
          return; // No matching detail section
      }

      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navUl = document.querySelector('nav ul');
  if (menuToggle && navUl) {
    menuToggle.addEventListener('click', () => {
      navUl.classList.toggle('open');
    });
  }
});
