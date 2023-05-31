/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const [nombre, setNombre] = useState("")
  const [perfil, setPerfil] = useState("")

  const [show, setShow] = useState(false)
  const [error, setError] = useState(null)

  /* USE VALIDACION DEL SEGUNDO INPUT >7, POR EL STORYTELLING */
  const handleSubmit = (e) => {
    e.preventDefault()
    if(nombre.length > 3 && perfil.length > 7){
      setShow(true)
      setError(false)
    } else {
      setShow(false)
      setError(true)
    }
  }



  return (
    <>
    <div className='app'>

      <h2>Tu Carnet de Developer</h2>

        <form onSubmit={handleSubmit}>
          <label >Tu nombre completo:</label>
          <input type="text" onChange={ (e)=> setNombre(e.target.value)}/>

          <label >Tu Perfil como Dev?</label>
          <input type="text" onChange={ (e)=> setPerfil(e.target.value)}/>
          <p>Colocá "Frontend" o "Backend"</p> <br />

          <button type="submit" >
            Crear Carnet
          </button>
        </form>

      {show && <Card nombre={nombre} perfil={perfil}/>}
      {error && <p className='warning'>“Por favor chequea que la información sea correcta”</p>}

    </div>
    </>
  )
}

export default App