import './style.css'
import './css/ai-section.css'
import './css/highlights.css'
import './css/contact-info.css'
import { initThemeToggle } from './js/theme.js'
import { initSmoothScroll } from './js/scroll.js'
import { initAnimations } from './js/animations.js'
import { initAI } from './js/ai.js'

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initSmoothScroll();
  initAnimations();
  initAI(); // Now safely handles non-AI pages
});