// Definición de imágenes por categoría
const imagenesPorCategoria = {
    "chibi": [
        { url: "https://i.pinimg.com/236x/8e/f6/ab/8ef6ab8be1b190d489477a64178b7f7c.jpg", descripcion: "Descripción de la imagen 1" },
        { url: "imagen2.jpg", descripcion: "Descripción de la imagen 2" },
    ],
    "wallpaper": [
        { url: "imagen5.jpg", descripcion: "Descripción de la imagen 5" },
        { url: "imagen6.jpg", descripcion: "Descripción de la imagen 6" },
    ],
    "Vehículos": [
        { url: "imagen5.jpg", descripcion: "Descripción de la imagen 5" },
        { url: "imagen6.jpg", descripcion: "Descripción de la imagen 6" },
    ],
    "memes": [
        { url: "imagen5.jpg", descripcion: "Descripción de la imagen 5" },
        { url: "imagen6.jpg", descripcion: "Descripción de la imagen 6" },
    ],
    "noticias": [
        { url: "imagen5.jpg", descripcion: "Descripción de la imagen 5" },
        { url: "imagen6.jpg", descripcion: "Descripción de la imagen 6" },
    ],
    "Anime": [
        { url: "imagen5.jpg", descripcion: "Descripción de la imagen 5" },
        { url: "imagen6.jpg", descripcion: "Descripción de la imagen 6" },
    ],
};

// Función para mostrar imágenes de una categoría
function mostrarCategoria(categoria) {
    const galeria = document.getElementById("gallery");
    galeria.innerHTML = "";

    const imagenes = imagenesPorCategoria[categoria];

    if (imagenes) {
        shuffle(imagenes);
        
        imagenes.forEach(function(imagen) {
            const gridItem = document.createElement("div");
            gridItem.className = "grid-item";

            const img = document.createElement("img");
            img.src = imagen.url;
            img.alt = categoria;

            const descripcion = document.createElement("div");
            descripcion.className = "description";
            descripcion.textContent = imagen.descripcion;

            const downloadIcon = document.createElement("div");
            downloadIcon.className = "download-icon";
            downloadIcon.innerHTML = "&#x2B07;";
            downloadIcon.addEventListener('click', function() {
                window.open(imagen.url, '_blank');
            });

            gridItem.appendChild(img);
            gridItem.appendChild(descripcion);
            gridItem.appendChild(downloadIcon);
            galeria.appendChild(gridItem);
        });
    }
}

// Función para mezclar un array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Evento al cargar la página
window.onload = function() {
    const categorias = Object.keys(imagenesPorCategoria);
    const categoriaAleatoria = categorias[Math.floor(Math.random() * categorias.length)];
    mostrarCategoria(categoriaAleatoria);
};

// Evento al cargar el DOM
document.addEventListener('DOMContentLoaded', function () {
    // Código anterior omitido por brevedad
    
    // Función para alternar entre galería y formulario de creación
    document.getElementById("crear-button").addEventListener("click", function() {
        const galeria = document.getElementById("grid-container");
        const formulario = document.getElementById("crear-form");

        if (galeria.style.display === "block") {
            galeria.style.display = "none";
            formulario.style.display = "block"; // Mostrar el formulario
        } else {
            galeria.style.display = "block";
            formulario.style.display = "none"; // Ocultar el formulario
        }
    });
});
