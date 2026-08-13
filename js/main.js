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