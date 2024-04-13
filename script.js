document.addEventListener('DOMContentLoaded', function () {

    const imagesWithDescription = [

        { imageUrl: 'https://i.pinimg.com/236x/57/00/c1/5700c1a0be5a49ffd1a0b9a8b243a953.jpg', description: 'Goku Ultra instinto' },

        { imageUrl: 'https://i.pinimg.com/236x/bd/6b/bc/bd6bbc7bfb459f0cd08fa07ae2710aa4.jpg', description: 'Goku' },


        { imageUrl: 'https://i.pinimg.com/236x/69/a9/50/69a950cb3087d31940d64f10aef2309a.jpg', description: 'Goku blue ' },
      
     

  { imageUrl: 'https://i.pinimg.com/236x/66/70/b1/6670b17023dacc00b6fcf329ff70c867.jpg', description: 'Goku y Vegeta' },

  { imageUrl: 'https://i.pinimg.com/236x/8b/7e/85/8b7e85054d6f27e68108d4a4cb103bb2.jpg', description: 'Goku Black' }, 

  { imageUrl: 'https://i.pinimg.com/236x/68/06/ba/6806ba0ae4658674741452b1d81e6c25.jpg', description: 'Goku black' }, 

  { imageUrl: 'https://i.pinimg.com/236x/92/35/8d/92358d67653aff4656524b07b50f0a30.jpg', description: 'Goku fase Dios' },

  { imageUrl: 'https://i.pinimg.com/236x/87/81/d3/8781d34c454436beadecb7c3a6d94fa3.jpg', description: 'Vegito' }, 

  { imageUrl: 'https://i.pinimg.com/236x/63/e6/9d/63e69d883bff06e94bdb2c761b1e6f4b.jpg', description: 'Black goku' },

  { imageUrl: 'https://i.pinimg.com/236x/16/2e/50/162e5056ce36a2efcdf2caeed48a64c2.jpg', description: 'Goku Super Saiyan' },
        { imageUrl: 'https://i.pinimg.com/236x/f7/4b/25/f74b25af43028a54950dce2c02060b6a.jpg', description: 'Goku y Vegeta' },

  { imageUrl: 'https://i.pinimg.com/236x/a8/2d/14/a82d1474bb3bc54c841e819dd52aefdc.jpg', description: 'Goku Ultra Instinto' },

  { imageUrl: 'https://i.pinimg.com/236x/ad/fa/86/adfa86338fa7617d8285893e31004e6c.jpg', description: 'Goku Super Saiyan' },

  { imageUrl: 'https://i.pinimg.com/236x/d2/4b/93/d24b93579304bddba38c4d7bd15696e5.jpg', description: ' transformaciónes de Goku ' },

  { imageUrl: 'https://i.pinimg.com/236x/ec/b1/b6/ecb1b68754e6428411f14b5d49e13199.jpg', description: 'Goku Super Saiyan' },

  { imageUrl: 'https://i.pinimg.com/236x/56/e9/eb/56e9eb3cdb111068d3ec30afee07d276.jpg', description: 'Ultra instinto ' },

  { imageUrl: 'https://i.pinimg.com/236x/76/8c/e5/768ce5a2a335ccfd8a60ccd25e52c948.jpg', description: 'Fases de goku' },

  { imageUrl: 'https://i.pinimg.com/236x/14/61/4c/14614cd9808466b29cdeb5257ee80f99.jpg', description: 'Ultra Instinto ' },
        
  { imageUrl: 'https://i.pinimg.com/236x/15/f9/05/15f905fa6f748ebc4d974dd83eed02e5.jpg', description: 'Sakura Haruno' },

  { imageUrl: 'https://i.pinimg.com/236x/0a/a9/9f/0aa99fd35cf415c28bc0b02b4e0961cb.jpg', description: 'Sasuke Uchiha' },

  { imageUrl: 'https://i.pinimg.com/236x/ab/dc/52/abdc52db893674a7b5dcb767be8776e5.jpg', description: 'Naruto Uzumaki' },

  { imageUrl: 'https://i.pinimg.com/236x/e7/b9/f4/e7b9f4c9673a1e6d011c10e794414439.jpg', description: 'Naruto Uzumaki' },

  { imageUrl: 'https://i.pinimg.com/236x/5b/f0/f8/5bf0f89c2dcb06e64a08503fd9eb3c6b.jpg', description: 'Naruto Uzumaki' },

  { imageUrl: 'https://i.pinimg.com/236x/98/15/91/98159112209ee0bcb06a13c55bdc78e5.jpg', description: 'Sasuke Uchiha' },

  { imageUrl: 'https://i.pinimg.com/236x/76/95/2b/76952b05299022f4f7bdff33b220d477.jpg', description: ' villanos de Naruto' },
      { imageUrl: 'https://i.pinimg.com/236x/b1/f3/95/b1f39583a8b9a174b63eac33c51c88fc.jpg', description: 'Naruto Uzumaki' },

  { imageUrl: 'https://i.pinimg.com/236x/74/11/d9/7411d9ad3dda0ba42cbb3ec9fa5b0e24.jpg', description: 'Naruto Uzumaki' },

  { imageUrl: 'https://i.pinimg.com/236x/1f/23/3c/1f233cab210553510a44d266b8a64daf.jpg', description: 'Naruto Uzumaki' },

  { imageUrl: 'https://i.pinimg.com/236x/3f/39/cd/3f39cde94f688b1701503a174d4da20a.jpg', description: 'Sakura Haruno' },

  { imageUrl: 'https://i.pinimg.com/236x/b7/0c/9e/b70c9ea4daba35d154e503a3df3ecc31.jpg', description: 'Naruto Uzumaki' },

  { imageUrl: 'https://i.pinimg.com/236x/50/22/cc/5022ccb5981037042c991e3c3362677d.jpg', description: 'Naruto Uzumaki' },
         { imageUrl: 'https://i.pinimg.com/236x/33/8f/f7/338ff76ba896a42b535be655cac2bb5a.jpg', description: 'Naruto Uzumaki' },
 
     
      { imageUrl: 'https://i.pinimg.com/236x/39/e1/07/39e10728a957f3c9a5935ec132a2f44d.jpg', description: 'Naruto Uzumaki' },

  { imageUrl: 'https://i.pinimg.com/236x/e4/a9/1d/e4a91d4ba9b7c16038526588906676d3.jpg', description: 'Naruto y Sasuke ' },

  { imageUrl: 'https://i.pinimg.com/236x/3a/a2/14/3aa2142212cd9bfd7b6b9bcaed6535cf.jpg', description: 'Kakashi Hatake' },

  { imageUrl: 'https://i.pinimg.com/236x/cf/6d/81/cf6d81ac67062f12c44ecf0696368db8.jpg', description: 'Naruto' },

  { imageUrl: 'https://i.pinimg.com/236x/25/d4/f8/25d4f88d9d7cd84adb730fb40d0f3096.jpg', description: 'Naruto' },

  { imageUrl: 'https://i.pinimg.com/236x/ea/71/ae/ea71aefab056b7564231fed301d19001.jpg', description: 'Kakashi Hatake' },

  { imageUrl: 'https://i.pinimg.com/236x/9a/8c/b9/9a8cb9427f94e7f576b6d8a91e7c78ab.jpg', description: 'Naruto' },
      
      { imageUrl: 'https://i.pinimg.com/236x/3b/5d/5c/3b5d5cf0a9b0a5e3b9aee024114dcc96.jpg', description: 'Kakashi Hatake' },

  { imageUrl: 'https://i.pinimg.com/236x/01/16/7c/01167ce6ee7a1c71e3b82422de3fe1c8.jpg', description: 'Sakura Haruno' },

  { imageUrl: 'https://i.pinimg.com/236x/33/92/23/3392237d1223e6d2c12434b8c23626be.jpg', description: 'Sakura Haruno' },

  { imageUrl: 'https://i.pinimg.com/236x/a1/4a/de/a14adef5f4bbdf0b3a9ab57ca0748d4a.jpg', description: 'Sakura Haruno' },
         { imageUrl: 'https://i.pinimg.com/236x/fe/7b/37/fe7b370926ae2e7d2b3d3166606cdf14.jpg', description: 'Sakura Haruno' },

  { imageUrl: 'https://i.pinimg.com/236x/8b/ac/17/8bac179c5b1cfe02d174e5d7817cd78f.jpg', description: 'Sakura Haruno' },

  { imageUrl: 'https://i.pinimg.com/236x/24/83/d5/2483d59868c973802a283e3b0e2bf3ad.jpg', description: 'Sakura Haruno' },
      
      { imageUrl: 'https://i.pinimg.com/236x/0f/89/11/0f8911cadb819ff6401026501bd659eb.jpg', description: 'Sakura Haruno' },

  { imageUrl: 'https://i.pinimg.com/236x/bf/7e/30/bf7e30218be2cf803c051266cbc000f6.jpg', description: 'Sakura Haruno' },


        
  { imageUrl: 'https://i.pinimg.com/236x/45/2c/1b/452c1b9223715b57f3f3b4c1a5361c4f.jpg', description: 'Kakashi Hatake' },
  { imageUrl: 'https://i.pinimg.com/236x/69/52/06/69520667179357ff7df2b39d968bf2fc.jpg', description: 'Kakashi Hatake' },
  { imageUrl: 'https://i.pinimg.com/236x/2e/7b/d4/2e7bd481377084fe6108e3a58848aca3.jpg', description: 'Kakashi Hatake' },
  { imageUrl: 'https://i.pinimg.com/236x/77/3b/5a/773b5a960dedfc1c580289dd3fe8d3d9.jpg', description: 'Kakashi Hatake' },
  { imageUrl: 'https://i.pinimg.com/236x/54/ee/43/54ee43cc57c32be20a03e036520c44f8.jpg', description: 'Hinata Hyūga' },
  { imageUrl: 'https://i.pinimg.com/236x/e2/a6/87/e2a687cbdda087e7a00e1a188479129f.jpg', description: 'Kakashi Hatake' },
  { imageUrl: 'https://i.pinimg.com/474x/09/9c/1e/099c1eb7734fdd126a313711c5021037.jpg', description: 'Kakashi Hatake' },
  { imageUrl: 'https://i.pinimg.com/236x/8d/c2/7f/8dc27f41b0f665367a6bcf2f4dd93d0c.jpg', description: 'Kakashi Hatake' },
  { imageUrl: 'https://i.pinimg.com/236x/15/49/70/154970cf412d5d58a87efe5448d71a7e.jpg', description: 'Kakashi Hatake' },
  { imageUrl: 'https://i.pinimg.com/236x/6a/e6/04/6ae604758a1cf58ba999464a446179a3.jpg', description: 'Kakashi Hatake' },
  { imageUrl: 'https://i.pinimg.com/236x/5d/b3/dd/5db3dd3d13953fa38fe7d9978a4b8bd8.jpg', description: 'Kakashi Hatake' },
  { imageUrl: 'https://i.pinimg.com/236x/42/0c/a8/420ca8abbb375d29f482c3f90e1bfd60.jpg', description: 'Kakashi Hatake' },
  { imageUrl: 'https://i.pinimg.com/236x/ae/b6/c7/aeb6c75275f7535b2c6974e839a86771.jpg', description: 'Kakashi Hatake' }


                          

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

    document.getElementById("crear-button").addEventListener("click", function() {

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
