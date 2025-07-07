document.addEventListener("DOMContentLoaded", () => {
  const seccionProyectos = document.querySelector('#proyectos');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        seccionProyectos.classList.add('mostrar');
        
      }
    });
  }, {
    threshold: 0.3
  });

  observer.observe(seccionProyectos);
});

document.addEventListener("DOMContentLoaded", () => {
  const seccionProyectos = document.querySelector('#skills');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        seccionProyectos.classList.add('mostrar');
        
      }
    });
  }, {
    threshold: 0.3
  });

  observer.observe(seccionProyectos);
});

document.addEventListener("DOMContentLoaded", () => {
  const seccionProyectos = document.querySelector('#contacto');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        seccionProyectos.classList.add('mostrar');
        
      }
    });
  }, {
    threshold: 0.3
  });

  observer.observe(seccionProyectos);
});

document.querySelectorAll('.card-proyecto').forEach(card => {
    card.addEventListener('click', () => {
      const inner = card.querySelector('.card-inner');
      inner.classList.toggle('flipped');
    });
  });



// Evita que el clic en los enlaces dispare el giro
document.querySelectorAll('.web-link').forEach(link => {
  link.addEventListener('click', e => {
    e.stopPropagation();
  });
});