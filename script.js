document.addEventListener('DOMContentLoaded', function () {
    const imagesWithDescription = [
        { imageUrl: 'https://i.pinimg.com/236x/57/00/c1/5700c1a0be5a49ffd1a0b9a8b243a953.jpg', description: 'Goku Super Saiyan' },
        { imageUrl: 'https://i.pinimg.com/236x/bd/6b/bc/bd6bbc7bfb459f0cd08fa07ae2710aa4.jpg', description: 'Vegeta Super Saiyan' },
        { imageUrl: 'https://i.pinimg.com/236x/bd/6b/bc/bd6bbc7bfb459f0cd08fa07ae2710aa4.jpg', description: 'Gohan Super Saiyan' },
        { imageUrl: 'https://i.pinimg.com/236x/69/a9/50/69a950cb3087d31940d64f10aef2309a.jpg', description: 'Trunks Super Saiyan' }
    ];

    imagesWithDescription.sort(() => Math.random() - 0.5);

    const gridContainer = document.getElementById('grid-container');
    let iconClickCount = 0;

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
                if (iconClickCount % 2 === 0) {
                    abrirVistaPrevia(image.imageUrl);
                } else {
                    location.reload();
                }
                iconClickCount++;
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

    renderImages(imagesWithDescription);

    document.getElementById("crear-button").addEventListener("click", function() {
        var galeria = document.getElementById("grid-container");
        if (galeria.style.display === "block") {
            galeria.style.display = "none";
            document.getElementById("crear-form").style.display = "block"; // Mostrar el segundo código HTML
            window.scrollTo(0, 0); // Llevar al usuario al inicio de la página
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
