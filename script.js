const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.getElementById('main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    mainNav.style.display = isOpen ? '' : 'flex';
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
      mainNav.style.display = '';
    });
  });
}

const galleryFilters = document.querySelectorAll('.gallery-filter');
const propertyCards = document.querySelectorAll('.property-card');

galleryFilters.forEach((filterButton) => {
  filterButton.addEventListener('click', () => {
    const selectedCategory = filterButton.dataset.filter;

    galleryFilters.forEach((button) => {
      const isSelected = button === filterButton;
      button.classList.toggle('is-active', isSelected);
      button.setAttribute('aria-pressed', String(isSelected));
    });

    propertyCards.forEach((card) => {
      card.hidden = selectedCategory !== 'all' && card.dataset.category !== selectedCategory;
    });
  });
});

const showcaseVideo = document.querySelector('.showcase-video');

if (showcaseVideo && 'IntersectionObserver' in window) {
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const playback = showcaseVideo.play();
        if (playback) playback.catch(() => {});
      } else {
        showcaseVideo.pause();
      }
    });
  }, { threshold: 0.4 });

  videoObserver.observe(showcaseVideo);
}

