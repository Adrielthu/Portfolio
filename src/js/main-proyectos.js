import { initThemeSwitch, initMobileMenu, initLightbox, initScrollAnimations } from './ui.js';
import { renderProyecto } from './render.js';

document.addEventListener('DOMContentLoaded', () => {
  initThemeSwitch();
  initMobileMenu();
  //initLightbox();
  initScrollAnimations();
  renderProyecto();
});