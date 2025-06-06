// FUNCIONALIDAD PREGUNTAS
    document.querySelectorAll('.pregunta').forEach(question => {
      question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const answer = faqItem.querySelector('.respuestas');
        
        // Cerrar otras ventanas
        document.querySelectorAll('.caja-pregunta').forEach(item => {
          if (item !== faqItem) {
            item.classList.remove('active');
            item.querySelector('.respuestas').classList.remove('active');
          }
        });
        
        //abrir y cerrar 
        faqItem.classList.toggle('active');
        answer.classList.toggle('active');
      });
    });

    //formulario
    //FUNCION
    document.querySelector('.formulario').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nombre = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const mensaje = this.querySelector('textarea').value;

      const numero = "56965798856";
      let textoWhatsApp = `Hola Fran, te contacto desde tu página web:%0A%0A`;
      textoWhatsApp += `👤 Nombre: ${nombre}%0A`;
      textoWhatsApp += `📧 Email: ${email}%0A`;
      textoWhatsApp += `💬 Mensaje: ${mensaje}%0A`;
      textoWhatsApp += `%0A¡Gracias! 💖`;

      const url = `https://wa.me/${numero}?text=${textoWhatsApp}`;
      window.open(url, '_blank');

      this.reset();
      alert('¡Mensaje enviado! Te contactaré pronto 😊');
    });

    //FUNCION
 document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector(".formulario");

    //FUNCION
    formulario.addEventListener("submit", function (e) {
      // Obtener los campos
      const nombre = formulario.querySelector('input[type="text"]');
      const correo = formulario.querySelector('input[type="email"]');
      const mensaje = formulario.querySelector('textarea');

      // Validar si están vacíos
      if (nombre.value.trim() === "" || correo.value.trim() === "" || mensaje.value.trim() === "") {
        e.preventDefault(); // Evita el envío del formulario
        alert("Por favor, completa todos los campos antes de enviar el mensaje.");
      }
    });
  });



  const abrirEncuesta = document.getElementById('abrirEncuesta');
    const modal = document.getElementById('encuestaModal');
    const cerrarModal = document.querySelector('.cerrar');
    const quieroPedido = document.getElementById('quiero-pedido');
    const tipoPedido = document.getElementById('tipo-pedido');
    const preguntaTipoPedido = document.getElementById('pregunta-tipo-pedido');
    const preguntaFecha = document.getElementById('pregunta-fecha');
    const preguntaDetallesPedido = document.getElementById('pregunta-detalles-pedido');

    //FUNCION
    abrirEncuesta.addEventListener('click', function() {
      modal.style.display = 'block';
    });

    //FUNCION
    cerrarModal.addEventListener('click', function() {
      modal.style.display = 'none';
    });

    //FUNCION
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }

    //FUNCION
    quieroPedido.addEventListener('change', function() {
      if (quieroPedido.value === 'Si') {
        preguntaTipoPedido.classList.remove('oculto');
      } else {
        preguntaTipoPedido.classList.add('oculto');
        preguntaFecha.classList.add('oculto');
        preguntaDetallesPedido.classList.add('oculto');
      }
    });

    //FUNCION
    tipoPedido.addEventListener('change', function() {
      if (tipoPedido.value) {
        preguntaFecha.classList.remove('oculto');
        preguntaDetallesPedido.classList.remove('oculto');
      } else {
        preguntaFecha.classList.add('oculto');
        preguntaDetallesPedido.classList.add('oculto');
      }
    });
    