import React, {useState,useEffect} from 'react'
import "./App.css"
function App() {
  const [usuarios, setUsuario]=useState([])

  useEffect(()=>{
    fetch("http://127.0.0.1:5000",{
      'methods':'GET',
      headers:{"Content-type": "application/json"}
    }).then(
      res=>res.json()
    ).then(
      res=>{
        setUsuario(res)
      }
    ).catch(error=>console.log(error))
  }, [])
  return (
    <div className='container'>
      {usuarios.map(usuario=>{
        return(
          <div key={usuario.id}>
            <h2>{usuario.nombre}</h2>
            <p>{usuario.apellidos}</p>
            <p>{usuario.correo}</p>
            
          </div>
        )
      })}
    </div>
  )
}

export default App