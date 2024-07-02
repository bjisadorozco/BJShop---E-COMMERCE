// traemos los productos que estan almacenados en el localStorage
let productosEnCarrito = JSON.parse(localStorage.getItem("productosEnCarrito"));
console.log(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");

function cargarProductosCarrito() {
  if (productosEnCarrito && productosEnCarrito.length > 0) {
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled");

    // Limpiamos el contenedor
    contenedorCarritoProductos.innerHTML = "";

    // Por cada producto vamos a crear un div con la class carrito-producto
    productosEnCarrito.forEach((producto) => {
      const div = document.createElement("div");
      div.classList.add("carrito-producto");
      div.innerHTML = `
      <img
        class="carrito-producto-imagen"
        src="${producto.imagen}"
        alt="${producto.titulo}"
      />
      <div class="carrito-producto-titulo">
        <small>Titulo</small>
        <h3>${producto.titulo}</h3>
      </div>
      <div class="carrito-producto-cantidad">
        <small>Cantidad</small>
        <p>${producto.cantidad}</p>
      </div>
      <div class="carrito-producto-precio">
        <small>Precio</small>
        <p>$${producto.precio}</p>
      </div>
      <div class="carrito-producto-subtotal">
        <small>Subtotal</small>
        <p>$${producto.precio * producto.cantidad}</p>
      </div>
      <button class="carrito-producto-eliminar" id="${producto.id}">
        <i class="bi bi-trash-fill"></i>
      </button>
    `;
      // Agregamos el div al contenedor
      contenedorCarritoProductos.append(div);
    });
  } else {
    contenedorCarritoVacio.classList.remove("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.add("disabled");
  }
  actualizarBotonesEliminar();
  actualizarTotal();
}
cargarProductosCarrito();

function actualizarBotonesEliminar() {
  // se asigna a una variable lo que se va a traer del DOM
  botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
  // se recorre el array de botones agregando un evento click a cada uno
  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", eliminarDelCarrito);
  });
}

function eliminarDelCarrito(e) {
  let idBoton = e.currentTarget.id;

  // Buscamos en el carrito
  const productoEliminado = productosEnCarrito.find(
    (producto) => producto.id === idBoton
  );

  // Traemos el index del producto
  const index = productosEnCarrito.indexOf(productoEliminado);
  // Eliminamos el producto del carrito
  productosEnCarrito.splice(index, 1);
  console.log(productosEnCarrito);
  // Cargamos los productos en el carrito
  cargarProductosCarrito();
  // Eliminamos los productos del localStorage
  localStorage.setItem(
    "productosEnCarrito",
    JSON.stringify(productosEnCarrito)
  );
}

// Cuando haga click en el boton vaciar llama a la funcion vaciarCarrito
botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
  // Vacea los productos en el carrito
  productosEnCarrito.length = 0;
  // Vacea los productos en el localStorage
  localStorage.setItem(
    "productosEnCarrito",
    JSON.stringify(productosEnCarrito)
  );
  cargarProductosCarrito();
}

function actualizarTotal() {
  const totalCalculado = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );
  contenedorTotal.innerText = `$${totalCalculado}`;
}

// Cuando haga click en el boton comprar llama a la funcion comprarCarrito
botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito() {
  // Vacea los productos en el carrito
  productosEnCarrito.length = 0;
  // Vacea los productos en el localStorage
  localStorage.setItem(
    "productosEnCarrito",
    JSON.stringify(productosEnCarrito)
  );
  contenedorCarritoVacio.classList.add("disabled");
  contenedorCarritoProductos.classList.add("disabled");
  contenedorCarritoAcciones.classList.add("disabled");
  contenedorCarritoComprado.classList.remove("disabled");
}
