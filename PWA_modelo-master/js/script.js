if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
}

// js/script.js

// Función para mostrar el formulario de inicio de sesión al cargar la página
document.addEventListener('DOMContentLoaded', function () {
  var loginSection = document.getElementById('loginSection');
  if (loginSection) {
    loginSection.classList.remove('hidden');
  }
});

function attemptLogin() {
  console.log('Intento de inicio de sesión'); // Agrega esta línea
  var usernameInput = document.getElementById('username');
  var passwordInput = document.getElementById('password');

  if (usernameInput && passwordInput && usernameInput.value === 'admin' && passwordInput.value === 'password') {
    window.location.href = 'pagina.html';
  } else {
    alert('Credenciales incorrectas. Inténtalo de nuevo.');
  }
}
