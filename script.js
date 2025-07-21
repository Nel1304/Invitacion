const musica = document.getElementById('musicaFondo');

function activarTransiciones() {
  const slides = document.querySelectorAll('.slide');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.3
  });
  slides.forEach(slide => observer.observe(slide));
}

function abrirFormulario() {
  document.getElementById('modalConfirmacion').style.display = 'flex';
}

function cerrarFormulario() {
  document.getElementById('modalConfirmacion').style.display = 'none';
  document.getElementById('formConfirmacion').reset();
  document.getElementById('nombreAcompanante').style.display = 'none';
  document.getElementById('mensajeGracias').style.display = 'none';
  document.getElementById('formConfirmacion').style.display = 'block';
}

function mostrarCampoAcompanante() {
  const select = document.getElementById('conAcompanante');
  const campo = document.getElementById('nombreAcompanante');
  campo.style.display = (select.value === 'si') ? 'block' : 'none';
}

function enviarConfirmacion(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombreInvitado').value.trim();
  const mensaje = document.getElementById('mensajeGracias');
  mensaje.innerText = `¡Gracias, ${nombre}!, estamos felices por nuestra celebración, agradecemos tu compañía.`;

  document.getElementById('formConfirmacion').style.display = 'none';
  mensaje.style.display = 'block';

  setTimeout(() => {
    cerrarFormulario();
    document.getElementById('el-gran-dia').scrollIntoView({
      behavior: 'smooth'
    });
  }, 4000);
}

/.add('fullscreen');
    activarTransiciones();

    musica.play().catch(error => {
      console.warn("Reproducción automática bloqueada:", error);
    });
  }, 2000);
});
