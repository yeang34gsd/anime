// Obtener el elemento de video
var video = document.querySelector("video");

// Agregar un evento al hacer clic en el video
video.addEventListener("click", function() {
    // Si el video está pausado, lo reproduce
    if (video.paused) {
        video.play();
    }
    // Si el video está reproduciendo, lo pausa
    else {
        video.pause();
    }
});
