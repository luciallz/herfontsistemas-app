import React, {useState,useEffect} from 'react';

export default function Product(props) {
  // const [setProducto]=useState([])

  // useEffect(()=>{
  //   fetch("http://127.0.0.1:5000/productos",{
  //     'method':'GET',
  //     headers:{"Content-type": "application/json"}
  //   }).then(
  //     res=>res.json()
  //   ).then(
  //     res=>{
  //       setProducto(res)
  //     }
  //   ).catch(error=>console.log(error))
  // }, [])
  const { onAdd } = props;
  console.log('aaaaaaaaaaaaaaaaaaaaaa')
  console.log(props)
  return (
    <div>
      <img className="small" src={props.product.image} alt={props.product.name} />
      <h3>{props.product.name}</h3>
      <div>{props.product.cantidad}€</div>
      <div>
        <button onClick={() => onAdd(props)}>Añadir al carrito</button>
      </div>
    </div>
  );
}
