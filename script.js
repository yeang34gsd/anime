document.addEventListener('DOMContentLoaded', function () {

    const imagesWithDescription = [

        { imageUrl: 'https://i.pinimg.com/236x/57/00/c1/5700c1a0be5a49ffd1a0b9a8b243a953.jpg', description: 'Goku Super Saiyan' },

        { imageUrl: 'https://i.pinimg.com/236x/bd/6b/bc/bd6bbc7bfb459f0cd08fa07ae2710aa4.jpg', description: 'Vegeta Super Saiyan' },

        { imageUrl: 'https://i.pinimg.com/236x/bd/6b/bc/bd6bbc7bfb459f0cd08fa07ae2710aa4.jpg', description: 'Gohan Super Saiyan' },

        { imageUrl: 'https://i.pinimg.com/236x/69/a9/50/69a950cb3087d31940d64f10aef2309a.jpg', description: 'Trunks Super Saiyan' },

        // Agregar más objetos con URLs de imágenes y descripciones según sea necesario

    ];

    // Mezclar el arreglo de imágenes de forma aleatoria

    imagesWithDescription.sort(() => Math.random() - 0.5);

    const gridContainer = document.getElementById('grid-container');

    function renderImages(images) {

        gridContainer.innerHTML = '';

        images.forEach(image => {

            const card = document.createElement('div');

            card.classList.add('card');

            const img = document.createElement('img');

            img.src = image.imageUrl;

            const description = document.createElement('div');

            description.classList.add('description');

            description.textContent = image.description;

            const downloadIcon = document.createElement('div');

            downloadIcon.classList.add('download-icon');

            downloadIcon.addEventListener('click', function() {

                abrirVistaPrevia(image.imageUrl);

            });
card.appendChild(img);

            card.appendChild(description);

            card.appendChild(downloadIcon);

            gridContainer.appendChild(card);

        });

    }

    function buscarImagenes(query) {

        const resultados = imagesWithDescription.filter(image =>

            image.description.toLowerCase().includes(query.toLowerCase())

        );

        renderImages(resultados);

    }

    function abrirVistaPrevia(url) {

        window.open(url, '_blank');

    }

    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('input', function(event) {

        const query = event.target.value.trim();

        buscarImagenes(query);

    });

    // Renderizar las imágenes al cargar la página

    renderImages(imagesWithDescription);

    document.getElementById("crear-
button").addEventListener("click", function() {

        var galeria = document.getElementById("grid-container");

        if (galeria.style.display === "block") {

            galeria.style.display = "none";

            document.getElementById("crear-form").style.display = "block"; // Mostrar el segundo código HTML

        } else {

            galeria.style.display = "block";

            document.getElementById("crear-form").style.display = "none"; // Ocultar el segundo código HTML

        }

    });

    // Función para mostrar la galería correspondiente a la categoría seleccionada

    function mostrarCategoria(categoria) {

        // Ocultamos todas las galerías

        var galerias = document.getElementsByClassName("galeria");

        for (var i = 0; i < galerias.length; i++) {

            galerias[i].style.display = "none";

        }

        // Mostramos la galería de la categoría seleccionada

        document.getElementById("galeria-" + categoria).style.display = "block";

    }

// Obtener todos los elementos con la clase "download-icon"

    const downloadIcons = document.querySelectorAll('.download-icon');

    // Iterar sobre cada ícono de descarga

    downloadIcons.forEach(icon => {

        // Agregar un evento de clic a cada ícono

        icon.addEventListener('click', () => {

            // Obtener la imagen asociada al ícono de descarga

            const image = icon.previousElementSibling;

            // Crear la URL de la imagen

            const imageUrl = image.src;

            // Abrir una nueva página con la imagen

            window.open(imageUrl, '_blank');

        });

    });

});


const imagenesPorCategoria = {

    "chibi": [

        { url: "https://i.pinimg.com/236x/8e/f6/ab/8ef6ab8be1b190d489477a64178b7f7c.jpg", descripcion: "Descripción de la imagen 1" },

        { url: "imagen2.jpg", descripcion: "Descripción de la imagen 2" },

    ],
    "moda": [

        { url: "imagen3.jpg", descripcion: "Descripción de la imagen 3" },

        { url: "imagen4.jpg", descripcion: "Descripción de la imagen 4" },

    ],

    "wallpaper ": [

        { url: "imagen5.jpg", descripcion: "Descripción de la imagen 5" },

        { url: "imagen6.jpg", descripcion: "Descripción de la imagen 6" },

    ],
  
  
  "Vehículos ": [

        { url: "imagen5.jpg", descripcion: "Descripción de la imagen 5" },

        { url: "imagen6.jpg", descripcion: "Descripción de la imagen 6" },

    ],
  "dibujos": [

        { url: "imagen5.jpg", descripcion: "Descripción de la imagen 5" },

        { url: "imagen6.jpg", descripcion: "Descripción de la imagen 6" },

    ],
  
  
  "Artistas": [

        { url: "imagen5.jpg", descripcion: "Descripción de la imagen 5" },

        { url: "imagen6.jpg", descripcion: "Descripción de la imagen 6" },

    ],


"Futurista ": [

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
  
  "naturaleza ": [

        { url: "imagen5.jpg", descripcion: "Descripción de la imagen 5" },

        { url: "imagen6.jpg", descripcion: "Descripción de la imagen 6" },

    ],
  
  "🔞🍑🔞": [

        { url: "imagen5.jpg", descripcion: "Descripción de la imagen 5" },

        { url: "imagen6.jpg", descripcion: "Descripción de la imagen 6" },

    ],


 "Anime": [

        { url: "imagen5.jpg", descripcion: "Descripción de la imagen 5" },

        { url: "imagen6.jpg", descripcion: "Descripción de la imagen 6" },

    ],

};

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

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];

    }

}


window.onload = function() {

    const categorias = Object.keys(imagenesPorCategoria);

    const categoriaAleatoria = categorias[Math.floor(Math.random() * categorias.length)];

    mostrarCategoria(categoriaAleatoria);

};
