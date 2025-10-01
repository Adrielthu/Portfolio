// main-index.js
import {
  initThemeSwitch,
  initMobileMenu,
  initDate,
  toggleContent,
  initDividerAnimations
} from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initDate();
  toggleContent();
  initDividerAnimations();
});
