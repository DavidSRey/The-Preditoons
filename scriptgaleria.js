// ------------------------------------
// Código para la galería
// ------------------------------------
// Selecciona el lightbox y la imagen en primer plano
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// Agrega evento de clic a todas las miniaturas
document.querySelectorAll(".thumbnail").forEach(img => {
    img.addEventListener("click", function() {
        lightbox.style.display = "flex"; // Muestra el lightbox
        lightboxImg.src = this.src;      // Asigna la imagen seleccionada
    });
});

// Cierra el lightbox al hacer clic en cualquier parte del fondo oscuro
lightbox.addEventListener("click", function() {
    lightbox.style.display = "none";     // Oculta el lightbox
    lightboxImg.src = "";                // Limpia la fuente de la imagen
});
// ------------------------------------
