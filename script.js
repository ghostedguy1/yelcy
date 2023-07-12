// Obtiene todos los enlaces del índice
const indexLinks = document.querySelectorAll('#index a');

// Agrega un controlador de eventos de clic a cada enlace
indexLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace

    const targetId = link.getAttribute('href'); // Obtiene el ID del objetivo de desplazamiento
    const targetElement = document.querySelector(targetId); // Obtiene el elemento objetivo

    if (targetElement) {
      // Calcula la posición de desplazamiento del elemento objetivo
      const offsetTop = targetElement.offsetTop;
      const offsetLeft = targetElement.offsetLeft;

      // Realiza el desplazamiento suave utilizando el método scrollIntoView
      window.scrollTo({
        top: offsetTop,
        left: offsetLeft,
        behavior: 'smooth',
      });
    }
  });
});

const toggleButton = document.getElementById('toggleIndex');
const index = document.getElementById('index');
let isOpen = false;

toggleButton.addEventListener('click', () => {
  isOpen = !isOpen;
  if (isOpen) {
    index.classList.remove('hidden');
  } else {
    index.classList.add('hidden');
  }
});

toggleButton.addEventListener('mouseenter', () => {
  if (isOpen) {
    index.classList.remove('hidden');
  }
});

toggleButton.addEventListener('mouseleave', () => {
  if (!index.matches(':hover')) {
    index.classList.add('hidden');
  }
});

document.addEventListener('click', (event) => {
  const target = event.target;
  const indexButton = document.getElementById('toggleIndex');

  if (isOpen && target !== indexButton && !index.contains(target)) {
    index.classList.add('hidden');
    isOpen = false;
  }
});

// Evitar que el evento de clic se propague dentro del índice
index.addEventListener('click', (event) => {
  event.stopPropagation();
});
