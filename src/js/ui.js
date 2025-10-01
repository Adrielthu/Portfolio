// ui.js

// 🌙 Inicializa el cambio de tema (modo claro/oscuro)
export function initThemeSwitch() {
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  if (!toggleSwitch) return;

  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    toggleSwitch.checked = theme === 'dark';
  };

  toggleSwitch.addEventListener('change', (e) => {
    setTheme(e.target.checked ? 'dark' : 'light');
  });

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) setTheme(savedTheme);
}

// 🍔 Inicializa el menú móvil hamburguesa y cierre automático
export function initMobileMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  navLinks.forEach(link =>
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );
}

// 🔍 Inicializa el lightbox para las imágenes
export function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');
  const visualizaciones = document.getElementById('visualizaciones');

  if (!lightbox || !lightboxImg || !closeBtn || !visualizaciones) return;

  visualizaciones.addEventListener('click', (e) => {
    // SOLO imagen destacada, NO miniaturas
    if (e.target.matches('.featured img')) {
      lightboxImg.src = e.target.src;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}

// 🌀 Animaciones en scroll para secciones .proyecto section
export function initScrollAnimations() {
  const sections = document.querySelectorAll('.proyecto section');
  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });
  sections.forEach(section => observer.observe(section));
}

// 📆 Inserta el año actual en el elemento con id="datee"
export function initDate() {
  const dateEl = document.querySelector("#datee");
  if (!dateEl) return;
  dateEl.textContent = new Date().getFullYear();
}

// 📜 Alterna la visibilidad de un contenido y cambia el texto del botón
export function toggleContent() {
  const button = document.getElementById("toggle-sobre-mi");
  const content = document.getElementById("sobre-mi-completo");

  button.addEventListener("click", () => {
    const isVisible = window.getComputedStyle(content).display === "block";

    // Alternar visibilidad
    content.style.display = isVisible ? "none" : "block";
    button.textContent = isVisible ? show : hide;

    // Opcional: Añadir clase para animaciones CSS
    content.classList.toggle("is-visible", !isVisible);
  });
}


export function initDividerAnimations(selector = '.division--on-scroll', threshold = 0.1, once = true) {
  // Esperamos a que el DOM esté completamente cargado
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setupObserver());
  } else {
    setupObserver();
  }

  function setupObserver() {
    // Comprobamos si Intersection Observer está soportado
    if (!('IntersectionObserver' in window)) {
      // Fallback para navegadores que no soportan IntersectionObserver
      const dividers = document.querySelectorAll(selector);
      dividers.forEach(div => div.classList.add('visible'));
      return;
    }

    // Creamos el observer con las opciones configuradas
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Añadimos la clase que activa la animación
          entry.target.classList.add('visible');

          // Si once es true, dejamos de observar este elemento después de activarlo
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          // Si once es false, quitamos la clase cuando sale del viewport
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: threshold,
      rootMargin: '0px 0px -50px 0px' // Inicia un poco antes de que el elemento esté completamente visible
    });

    // Observamos todos los divisores que coincidan con el selector
    document.querySelectorAll(selector).forEach(div => {
      observer.observe(div);
    });
  }
}