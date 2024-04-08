document.addEventListener('DOMContentLoaded', function () {
    const imagesWithDescription = [
        { imageUrl: 'https://i.pinimg.com/236x/57/00/c1/5700c1a0be5a49ffd1a0b9a8b243a953.jpg', description: 'Goku Super Saiyan' },
        { imageUrl: 'https://i.pinimg.com/236x/bd/6b/bc/bd6bbc7bfb459f0cd08fa07ae2710aa4.jpg', description: 'Vegeta Super Saiyan' },
        { imageUrl: 'https://i.pinimg.com/236x/bd/6b/bc/bd6bbc7bfb459f0cd08fa07ae2710aa4.jpg', description: 'Gohan Super Saiyan' },
        { imageUrl: 'https://i.pinimg.com/236x/69/a9/50/69a950cb3087d31940d64f10aef2309a.jpg', description: 'Trunks Super Saiyan' },
        // Agregar más objetos con URLs de imágenes y descripciones según sea necesario
    ];

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

            downloadIcon.addEventListener('click', function () {
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
    searchInput.addEventListener('input', function (event) {
        const query = event.target.value.trim();
        buscarImagenes(query);
    });

    renderImages(imagesWithDescription);

    document.getElementById("crear-button").addEventListener("click", function () {
        var galeria = document.getElementById("grid-container");
        var crearForm = document.getElementById("crear-form");

        if (galeria.style.display === "block") {
            galeria.style.display = "none";
            crearForm.style.display = "block"; // Mostrar el segundo código HTML
        } else {
            galeria.style.display = "block";
            crearForm.style.display = "none"; // Ocultar el segundo código HTML
        }
    });

    function mostrarCategoria(categoria) {
        var galerias = document.getElementsByClassName("galeria");
        for (var i = 0; i < galerias.length; i++) {
            galerias[i].style.display = "none";
        }
        document.getElementById("galeria-" + categoria).style.display = "block";
    }

    const downloadIcons = document.querySelectorAll('.download-icon');
    downloadIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const image = icon.previousElementSibling;
            const imageUrl = image.src;
            window.open(imageUrl, '_blank');
        });
    });
});
