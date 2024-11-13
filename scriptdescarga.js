// ------------------------------------
// Código para los botones de explosión
// ------------------------------------
document.querySelectorAll(".explosion-button").forEach(button => {
    button.addEventListener("click", function (e) {
        // Añadir la clase para desaparecer el botón
        button.classList.add("disappear");

        // Crear partículas
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement("span");
            particle.classList.add("particle");

            // Coloca la partícula en el punto del clic
            particle.style.left = `${e.clientX - button.offsetLeft}px`;
            particle.style.top = `${e.clientY - button.offsetTop}px`;

            // Genera dirección aleatoria para la explosión
            const angle = Math.random() * 2 * Math.PI;
            particle.style.setProperty('--x', Math.cos(angle));
            particle.style.setProperty('--y', Math.sin(angle));

            // Añade la partícula al botón y la elimina al terminar
            button.appendChild(particle);
            setTimeout(() => particle.remove(), 600);
        }

        // Eliminar el botón después de la animación
        // setTimeout(() => button.remove(), 200);
    });
});

