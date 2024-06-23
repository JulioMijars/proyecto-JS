// tienda

let telefonos = [];

fetch("./js/productos.json")
  .then(response => response.json())
  .then(data => {
    telefonos = data;
    localStorage.setItem('productos', JSON.stringify(telefonos));
    mostrarTelefonos();
  })
  .catch(error => console.error('Error al obtener los productos:', error));



function mostrarTelefonos(){
    let contenedor = document.querySelector('#telefonos');

    for(const product of telefonos){
    contenedor.innerHTML += 
    `
    <div class="card" id=${product.id}>
            <img src=${product.img} alt="${product.descripcion}">
            <div class="card-product">
                <h3>${product.name}</h3>
                <p>${product.descripcion}</p>
                <b>${product.price}</b>
                <button class="agregar-carrito" data-id=${product.id}>agregar</button>
            </div>
    </div>
    `;
    }


    document.querySelectorAll('.agregar-carrito').forEach(btn => {
        btn.addEventListener('click', () => {
          Toastify({
            text: "Producto Agregado.",
            offset: {
              x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
              y: 50 // vertical axis - can be a number or a string indicating unity. eg: '2em'
            },
          }).showToast();
          const productoID = btn.getAttribute('data-id');
          agregarAlCarrito(productoID);
        });
      });   
}



function agregarAlCarrito(productoID) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const products = telefonos.find(product => product.id === productoID);
    const productosEnCarrito = carrito.find(p => p.id === productoID);
  
    if (productosEnCarrito) {
      productosEnCarrito.cantidad += 1;
      productosEnCarrito.totalPrice = productosEnCarrito.cantidad * productosEnCarrito.price;
    } else {
      carrito.push({
        id: productoID,
        name: products.name,
        price: products.price,
        cantidad: 1,
        totalPrice: products.price
      });
    }
  
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
  }

  
  function mostrarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let contenedorCarrito = document.querySelector('#contenedor-carrito');
    let footer = document.querySelector('#total');
    let carritoHTML = '';
  
    for (const p of carrito) {
      carritoHTML += `
        <div class="card-carrito" id=${p.id}>
          <h3>${p.name}</h3>
          <p>$${p.price}</p>
          <p>Cantidad: ${p.cantidad}</p>
          <p>Total: $${p.totalPrice}</p>
          <button class="eliminar-carrito" data-id=${p.id}>Eliminar</button>
        </div>
      `;
    }
  
    contenedorCarrito.innerHTML = carritoHTML;
  
    document.querySelectorAll('.eliminar-carrito').forEach(btn => {
      btn.addEventListener('click', () => {
        Swal.fire({
          title: "Producto eliminado.",
          icon: "success"
        });
        let btnDelete = btn.getAttribute('data-id');
        eliminarDelCarrito(btnDelete);
      });
    });
  
    let totalCarrito = carrito.reduce((acc, p) => acc + p.totalPrice, 0);
  
    footer.innerHTML = `Total: $${totalCarrito}`
  }
  
  function eliminarDelCarrito(deleteID) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const nuevoCarrito = carrito.filter(p => p.id !== deleteID);
  
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    mostrarCarrito();
  }





mostrarTelefonos()
mostrarCarrito()
