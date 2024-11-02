const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Obtención de los formularios
const signUpForm = document.querySelector('.sign-up-container form');
const signInForm = document.querySelector('.sign-in-container form');

// Evento para abrir el formulario de registro
signUpButton.addEventListener('click', () =>
  container.classList.add('right-panel-active')
);

// Evento para regresar al formulario de iniciar sesión
signInButton.addEventListener('click', () =>
  container.classList.remove('right-panel-active')
);

// Función para registrar una nueva cuenta
signUpForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita el envío del formulario

  // Obtiene los valores de los campos de entrada
  const name = signUpForm.querySelector('input[type="text"]').value;
  const email = signUpForm.querySelector('input[type="email"]').value;
  const password = signUpForm.querySelector('input[type="password"]').value;

  // Guarda los datos en el localStorage
  localStorage.setItem('user', JSON.stringify({ name, email, password }));

  alert('Cuenta creada con éxito');
  signUpForm.reset(); // Limpia el formulario de registro
});

// Función para iniciar sesión
signInForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita el envío del formulario

  // Obtiene los valores de los campos de entrada
  const email = signInForm.querySelector('input[type="email"]').value;
  const password = signInForm.querySelector('input[type="password"]').value;

  // Obtiene los datos del localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  // Verifica las credenciales
  if (user && user.email === email && user.password === password) {
    alert('Inicio de sesión exitoso');
    window.location.href = 'seleccion.html'; // Redirige a la página de selección
  } else {
    alert('Credenciales incorrectas. Inténtalo de nuevo.');
  }
});
