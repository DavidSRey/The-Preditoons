// Mostrar el aviso de cookies si no se ha aceptado previamente
document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookieBanner");
    const acceptCookies = document.getElementById("acceptCookies");

    // Verifica si ya se aceptaron las cookies
    if (!localStorage.getItem("cookiesAccepted")) {
        cookieBanner.style.display = "block";
    }

    // Al hacer clic en "Aceptar", oculta el banner y guarda la preferencia
    acceptCookies.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.style.display = "none";
    });
});
