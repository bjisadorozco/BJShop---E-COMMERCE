// Array de objetos de los productos
const productos = [
  {
    id: "abrigo-01",
    titulo: "Abrigo 01",
    imagen: "../img/abrigos/01.jpg",
    categoria: {
      nombre: "Abrigos",
      id: "abrigos",
    },
    precio: 1000,
  },
  {
    id: "abrigo-02",
    titulo: "Abrigo 02",
    imagen: "../img/abrigos/02.jpg",
    categoria: {
      nombre: "Abrigos",
      id: "abrigos",
    },
    precio: 1000,
  },
  {
    id: "abrigo-03",
    titulo: "Abrigo 03",
    imagen: "../img/abrigos/03.jpg",
    categoria: {
      nombre: "Abrigos",
      id: "abrigos",
    },
    precio: 1000,
  },
  {
    id: "abrigo-04",
    titulo: "Abrigo 04",
    imagen: "../img/abrigos/04.jpg",
    categoria: {
      nombre: "Abrigos",
      id: "abrigos",
    },
    precio: 1000,
  },
  {
    id: "abrigo-05",
    titulo: "Abrigo 05",
    imagen: "../img/abrigos/05.jpg",
    categoria: {
      nombre: "Abrigos",
      id: "abrigos",
    },
    precio: 1000,
  },
  {
    id: "camiseta-01",
    titulo: "Camiseta 01",
    imagen: "../img/camisetas/01.jpg",
    categoria: {
      nombre: "Camisetas",
      id: "camisetas",
    },
    precio: 1000,
  },
  {
    id: "camiseta-02",
    titulo: "Camiseta 02",
    imagen: "../img/camisetas/02.jpg",
    categoria: {
      nombre: "Camisetas",
      id: "camisetas",
    },
    precio: 1000,
  },
  {
    id: "camiseta-03",
    titulo: "Camiseta 03",
    imagen: "../img/camisetas/03.jpg",
    categoria: {
      nombre: "Camisetas",
      id: "camisetas",
    },
    precio: 1000,
  },
  {
    id: "camiseta-04",
    titulo: "Camiseta 04",
    imagen: "../img/camisetas/04.jpg",
    categoria: {
      nombre: "Camisetas",
      id: "camisetas",
    },
    precio: 1000,
  },
  {
    id: "camiseta-05",
    titulo: "Camiseta 05",
    imagen: "../img/camisetas/05.jpg",
    categoria: {
      nombre: "Camisetas",
      id: "camisetas",
    },
    precio: 1000,
  },
  {
    id: "camiseta-06",
    titulo: "Camiseta 06",
    imagen: "../img/camisetas/06.jpg",
    categoria: {
      nombre: "Camisetas",
      id: "camisetas",
    },
    precio: 1000,
  },
  {
    id: "camiseta-07",
    titulo: "Camiseta 07",
    imagen: "../img/camisetas/07.jpg",
    categoria: {
      nombre: "Camisetas",
      id: "camisetas",
    },
    precio: 1000,
  },
  {
    id: "camiseta-08",
    titulo: "Camiseta 08",
    imagen: "../img/camisetas/08.jpg",
    categoria: {
      nombre: "Camisetas",
      id: "camisetas",
    },
    precio: 1000,
  },
  {
    id: "pantalon-01",
    titulo: "Pantalón 01",
    imagen: "../img/pantalones/01.jpg",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones",
    },
    precio: 1000,
  },
  {
    id: "pantalon-02",
    titulo: "Pantalón 02",
    imagen: "../img/pantalones/02.jpg",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones",
    },
    precio: 1000,
  },
  {
    id: "pantalon-03",
    titulo: "Pantalón 03",
    imagen: "../img/pantalones/03.jpg",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones",
    },
    precio: 1000,
  },
  {
    id: "pantalon-04",
    titulo: "Pantalón 04",
    imagen: "../img/pantalones/04.jpg",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones",
    },
    precio: 1000,
  },
  {
    id: "pantalon-05",
    titulo: "Pantalón 05",
    imagen: "../img/pantalones/05.jpg",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones",
    },
    precio: 1000,
  },
];

const contenedorProductos = document.querySelector("#contenedor-productos"); //trae los productos
const botonesCategorias = document.querySelectorAll(".boton-categoria"); // array que trae todos los botones categoria
const tituloPrincipal = document.querySelector(".titulo-principal"); //obteniendo el titulo principal
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

// Funcion para cargar los productos
function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = ""; //borra el contenido del contenedor
  productosElegidos.forEach((producto) => {
    //  div contenedor de cada producto
    const div = document.createElement("div");
    div.classList.add("producto"); //añadimos la clase de producto
    // anexamos la informacion que va a tener ese div
    div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}<" />
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
    `;
    // anexamos el div al contenedor de productos
    contenedorProductos.append(div);
  });
  // para separar los botones agregar segun su categoria
  actualizarBotonesAgregar();
  //   console.log(botonesAgregar);
}
cargarProductos(productos);

botonesCategorias.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    // Elimina la clase 'active' de todos los botones
    botonesCategorias.forEach((btn) => btn.classList.remove("active"));
    // Añade la clase 'active' al botón clicado
    e.currentTarget.classList.add("active");
    // Obtenemos el id del botón clicado
    const categoriaId = e.currentTarget.id;
    // Filtramos los productos por la categoria clicada
    const productosFiltrados = productos.filter((producto) => {
      return producto.categoria.id == categoriaId;
    });
    // Eliminamos los productos anteriores
    contenedorProductos.innerHTML = "";
    // Cargamos los productos filtrados y mostramos su categoria correspondiente
    if (e.currentTarget.id != "todos") {
      const productosCategoria = productos.find(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      tituloPrincipal.innerText = productosCategoria.categoria.nombre;
      cargarProductos(productosFiltrados);
    } else {
      tituloPrincipal.innerText = "Todos los productos";
      cargarProductos(productos);
    }
  });
});

function actualizarBotonesAgregar() {
  // se asigna a una variable lo que se va a traer del DOM
  botonesAgregar = document.querySelectorAll(".producto-agregar");
  // se recorre el array de botones agregando un evento click a cada uno
  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}
// Array de productos agregados al carrito
let productosEnCarrito;
const productosEnCarritoLS = JSON.parse(
  localStorage.getItem("productosEnCarrito")
);

// Si hay algo en el JSON.parse que estamos trayendo del localStorage
// lo asignamos a la variable productosEnCarrito y sino
// creamos un array vacio
if (productosEnCarritoLS) {
  productosEnCarrito = productosEnCarritoLS;
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}

function agregarAlCarrito(e) {
  // para obtener el id del producto que queremos agregar al carrito
  const idBoton = e.currentTarget.id;
  //   console.log(idBoton);
  const productoAgregado = productos.find(
    (producto) => producto.id === idBoton
  );
  //   console.log(productoAgregado);

  //verificamos que el producto ya esta agregado y aumentamos la cantidad agregada
  if (productosEnCarrito.some((producto) => producto.id === idBoton)) {
    const index = productosEnCarrito.findIndex(
      (producto) => producto.id === idBoton
    );
    productosEnCarrito[index].cantidad++;
  } else {
    //agregamos productos al array
    productosEnCarrito.push(productoAgregado);
    //   console.log(productosEnCarrito);
    productoAgregado.cantidad = 1; // cuando agreguemos un producto, la cantidad de ese producto va aser igual 1
  }
  //actualizasmo el numero de productos agregados
  actualizarNumerito();
  // almacenamos los productos agregados en el localStorage
  localStorage.setItem(
    "productosEnCarrito",
    JSON.stringify(productosEnCarrito)
  );
}

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );
  numerito.innerText = nuevoNumerito;
}
