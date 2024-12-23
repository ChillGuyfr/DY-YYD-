export function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.feature-card, .ai-section').forEach(element => {
    observer.observe(element);
  });
}