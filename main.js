const productos = [
    {nombre:"leche",
     precio:200},
    {nombre:"azucar",
     precio:150},
    {nombre:"harina",
     precio:230,},
    {nombre:"pan",
     precio:300,}
];

const fragment = document.createDocumentFragment();

const contenedor = document.getElementById("divproductos");

const pintarDato = (productos) => {
    productos.forEach(producto => {
        contenedor.querySelector("h3").textContent = producto.nombre;
        contenedor.querySelector("p").textContent = producto.precio;
        const clon = contenedor.cloneNode(true);
        fragment.appendChild(clon);
    });

    contenedor.appendChild(fragment);
}

pintarDato(productos);

const botonCompra = document.getElementById("botonCompra");

botonCompra.addEventListener("click", e=>{agregarACarrito(e)});

function agregarACarrito(e) {
    botonCompra.innerText = "AGREGADO";
    console.log(e.target);
  }