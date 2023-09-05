document.addEventListener("DOMContentLoaded", () => {
const arbol = document.querySelector(".arbol");

fetch('https://fakestoreapi.com/products')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error al cargar.');
        }
        return response.json();
    })
    .then((data) => {
        const products = data;
        let content = '';

        products.forEach((product) => {
            content += `
                <div class="objeto"> 
                    <h2 class="objeto__nombre">${product.title}</h2>
                    <h2 class="objeto__categoria">Categoria:${product.category}</h2>
                    <h2 class="objeto__precio">Precio: $${product.price}</h2>
                    <img class="objeto__img" src='${product.image}' alt='${product.title}' />
                    <h2 class="objeto__descripcion">Descripcion: ${product.description}</h2>
                </div>`;
        });

        arbol.innerHTML += content;
    })
    .catch((error) => {
        console.error(error);
    });
})
