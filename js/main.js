const botonesComprar = document.querySelectorAll(".button");

const itemsCarrito = document.querySelector(".items");

const totalPrecio = document.querySelector(".total-precio");

const botonConfirmar = document.querySelector(".boton-confirmar");

let productosEnCarrito = [];

function agregarAlCarrito(evento) {
  const precio = Number(evento.target.getAttribute("data-price"));

  productosEnCarrito.push({ precio: precio });

  actualizarCarrito();
}

function actualizarCarrito() {
  itemsCarrito.innerHTML = "";

  // Calcular el total de precio
  let total = 0;
  for (const producto of productosEnCarrito) {
    total += producto.precio;
    const item = document.createElement("li");
    item.innerText = `$${producto.precio}`;
    itemsCarrito.appendChild(item);
  }
  totalPrecio.innerText = `$${total}`;

  // Habilitar o deshabilitar el botón de confirmar compra
  if (productosEnCarrito.length > 0) {
    botonConfirmar.removeAttribute("disabled");
  } else {
    botonConfirmar.setAttribute("disabled", "disabled");
  }
}

for (const botonComprar of botonesComprar) {
  botonComprar.addEventListener("click", agregarAlCarrito);
}

// Agregar un listener de click al botón de confirmar compra
botonConfirmar.addEventListener("click", () => {
  alert("Compra confirmada");
  // Limpiar la lista de productos en el carrito
  productosEnCarrito = [];
  actualizarCarrito();
});
