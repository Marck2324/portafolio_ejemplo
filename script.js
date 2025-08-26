  // ✅ script.js - Versión que NUNCA se queda cargando

// ====== 1. Eliminar preloader ASEGURADO ======
function hidePreloader() {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
      preloader.remove(); // Eliminar del DOM por completo
    }, 600);
  }
}

// ✅ Ejecutar inmediatamente cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', hidePreloader);
} else {
  // Si ya está cargado (caso rápido)
  hidePreloader();
}

// ====== 2. Menú móvil ======
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('active');
});

// ====== 3. Tema claro/oscuro ======
const themeToggle = document.getElementById('theme-toggle');

themeToggle?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  themeToggle.innerHTML = newTheme === 'light' 
    ? '<i class="fas fa-sun"></i>' 
    : '<i class="fas fa-moon"></i>';
});

// Cargar tema guardado
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  if (themeToggle) {
    themeToggle.innerHTML = savedTheme === 'light' 
      ? '<i class="fas fa-sun"></i>' 
      : '<i class="fas fa-moon"></i>';
  }
}

// ====== 4. Typewriter ======
const typewriter = document.querySelector('.typewriter');
if (typewriter) {
  const texts = ['Full Stack Developer', 'Backend Engineer', 'Frontend Specialist'];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const current = texts[textIndex];
    if (isDeleting) {
      typewriter.textContent = current.substring(0, --charIndex);
      if (charIndex <= 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, 30);
      }
    } else {
      typewriter.textContent = current.substring(0, ++charIndex);
      if (charIndex >= current.length) {
        isDeleting = true;
        setTimeout(type, 1000);
      } else {
        setTimeout(type, 100);
      }
    }
  }
  setTimeout(type, 500); // Iniciar después de mostrar la página
}

// ====== 5. Formulario ======
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.getElementById('form-message');
    msg.textContent = '✅ ¡Gracias! Tu mensaje fue enviado.';
    msg.className = 'success';
    form.reset();
    setTimeout(() => msg.style.display = 'none', 4000);
  });
}

// ====== 6. Scroll suave ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    // Cerrar menú
    document.querySelector('.nav-links')?.classList.remove('active');
  });
});