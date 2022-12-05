import React, { useState, useEffect } from 'react';
import APIService from "./componentes/APIService";

// function hola(props){
//   console.log('ccccccccccccccccccccc')
//   const data = {
//     products: [{
//         'id': '1',
//         'name': 'MacBook',
//         'cantidad': 1400,
//         'image': 'https://picsum.photos/id/180/2400/1600',
//       },
//       {
//         'id': '2',
//         'name': 'Old Car',
//         'cantidad': 2400,
//         'image': 'https://picsum.photos/id/111/4400/2656',
//       },
//       {
//         'id': '3',
//         'name': 'W Shoes',
//         'cantidad': 1000,
//         'image': 'https://picsum.photos/id/21/3008/2008',
//       }
//     ]
//   }
// }
function data(props){
  const [setProducto]=useState([])

  useEffect(()=>{
    fetch("http://127.0.0.1:5000/productos",{
      'method':'GET',
      headers:{"Content-type": "application/json"}
    }).then(
      res=>res.json()
    ).then(
      res=>{
        setProducto(res)
      }
    ).catch(error=>console.log(error))
  }, [])
  console.log('ddddddddddddddddddddd')
  console.log(props.producto)
  
  products = props.producto
}
  

export default data;