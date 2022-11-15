import React from 'react';

export default function Basket(props) {
  const { listaProductos, onAdd, onRemove } = props;
  const precioProducto = listaProductos.reduce((a, c) => a + c.cantidad * c.cantidad, 0);
  const precioEnvio = precioProducto > 2000 ? 0 : 20;
  const precioTotal = precioProducto + precioEnvio;
  return (
    <aside className="block col-1">
      <h2>Carrito</h2>
      <div id='divCarrito'>
        {listaProductos.length === 0 && <div>Carrito vacío</div>}
        {listaProductos.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.cantidad} x €{item.cantidad.toFixed(2)}
            </div>
          </div>
        ))}

        {listaProductos.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Precio Productos</div>
              <div className="col-1 text-right">{precioProducto.toFixed(2)}€</div>
            </div>
            <div className="row">
              <div className="col-2">Precio Envio</div>
              <div className="col-1 text-right">
                {precioEnvio.toFixed(2)}€
              </div>
            </div>

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