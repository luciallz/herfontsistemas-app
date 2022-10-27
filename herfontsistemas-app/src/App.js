import React, {useState,useEffect} from 'react'

function App() {
  const [data, setData]=useState([{}])

  useEffect(()=>{
    fetch("/new").then(
      res=>res.json()
    ).then(
      data=>{
        setData(data)
        console.log(data)
        console.log(typeof data)
      }
    )
  }, [])
  return (
    <div className='container'>
      <div>
        {(typeof data.prueba ==='undefined')? (
          <p>Loading...</p>
        ):(
          data.prueba.map((elemento, i)=>(
            <p key={i}>{elemento}</p>
          ))
        )}
      </div>
    </div>
  )
}

export default App