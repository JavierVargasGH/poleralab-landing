// ========== EVENTO 1: Toggle modo oscuro ==========
const btnTema = document.getElementById('btn-tema');

btnTema.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    btnTema.textContent = '☀️ Claro';
  } else {
    btnTema.textContent = '🌙 Oscuro';
  }
});

// ========== EVENTO 2: Smooth scroll ==========
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function (e) {
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      e.preventDefault();
      destino.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ========== EVENTO 3: Validación del formulario ==========
const form = document.getElementById('form-contacto');
const emailInput = document.getElementById('email');
const emailFeedback = document.getElementById('email-feedback');
const mensajeExito = document.getElementById('mensaje-exito');

emailInput.addEventListener('input', () => {
  const valor = emailInput.value.trim();
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (valor === '') {
    emailInput.classList.remove('is-valid', 'is-invalid');
  } else if (regexEmail.test(valor)) {
    emailInput.classList.remove('is-invalid');
    emailInput.classList.add('is-valid');
  } else {
    emailInput.classList.remove('is-valid');
    emailInput.classList.add('is-invalid');
    emailFeedback.textContent = 'Ingresa un correo válido (ej: nombre@correo.com)';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    e.stopPropagation();
    form.classList.add('was-validated');
    return;
  }

  mensajeExito.classList.remove('d-none');
  form.reset();
  form.classList.remove('was-validated');
  emailInput.classList.remove('is-valid', 'is-invalid');

  setTimeout(() => {
    mensajeExito.classList.add('d-none');
  }, 5000);
});