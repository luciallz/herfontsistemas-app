import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function ListaProductos(props) {
    const editarProduto = (produto) => {
        props.editarProduto(produto)
    }

    const borrarProduto = (produto) => {
        APIService.BorrarProduto(produto.id)
            .then(() => props.borrarProduto(produto))
    }

    const anadirProducto = (producto) => {

    }
    return (
        <div id='hola'>
            {props.productos && props.productos.map(producto => {
                return (
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>{producto.nom_producto}</Card.Title>
                                <Card.Text>
                                    {producto.descripcion}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted"><button onClick={() => handleClick(producto)}>Añadir al carrito</button></small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>{producto.nom_producto}</Card.Title>
                                <Card.Text>
                                {producto.descripcion}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted"><button onClick={() => handleClick(producto)}>Añadir al carrito</button></small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>{producto.nom_producto}</Card.Title>
                                <Card.Text>
                                {producto.descripcion}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted"><button onClick={() => handleClick(producto)}>Añadir al carrito</button></small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                )
            }
            )}
        </div>

    );
}

export default ListaProductos;