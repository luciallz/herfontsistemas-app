import React from 'react';

export default function ListarCarrito() {
  var listaCarrito = []
  if (localStorage.getItem('listaCarrito')){
    listaCarrito = JSON.parse(localStorage.getItem('listaCarrito'))
  }
  const eliminarCesta = (producto) => {
    var posicion = listaCarrito.findIndex((x) => x.id === producto.id);
    console.log(posicion)
    if(posicion != -1){
        listaCarrito.splice(posicion, 1);
        localStorage.setItem("listaCarrito", JSON.stringify(listaCarrito));
    }
  }
  //const listaCarrito = props.listaCarrito
  const precioProducto = listaCarrito.reduce((a, c) => a + c.cantidad * c.cantidad, 0);
  console.log(precioProducto)
  //const precioEnvio = precioProducto > 2000 ? 0 : 20;
  const precioTotal = precioProducto; //+ precioEnvio;
  return (
    <aside className="block col-1">
      <h2>Carrito</h2>
      <div id='divCarrito'>
        {listaCarrito.length === 0 && <div>Carrito vacío</div>}
        {listaCarrito.map((producto) => (
          <div key={producto.id} className="row">
            <div className="col-2">{producto.nombre}</div>
            <div className="col-2 text-right">
              {producto.cantidad} x €{producto.precio.toFixed(2)}
              <button onClick={() => eliminarCesta(producto)} className="remove">
              <i class="fa fa-trash" aria-hidden="true"></i>
              </button>{' '}
            </div>
          </div>
        ))}

        {listaCarrito.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Precio Productos</div>
              <div className="col-1 text-right">{precioProducto.toFixed(2)}€</div>
            </div>
            {/* <div className="row">
              <div className="col-2">Precio Envio</div>
              <div className="col-1 text-right">
                {precioEnvio.toFixed(2)}€
              </div>
            </div> */}

            <div className="row">
              <div className="col-2">
                <strong>Precio Total</strong>
              </div>
              <div className="col-1 text-right">
                <strong>{precioTotal.toFixed(2)}€</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Compra Finalizada!')}>
                Finalizar Compra
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}