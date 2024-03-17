import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SB from './assets/SB.png'
import { getImageURL, getImageRaiseURL } from './utils/image-util'
import OpenRaiseVisualizer from './components/OpenRaiseVisualizer'
import ReraiseVisualizer from './components/ReraiseVisualizer'

function App() {
  const [imagenActual, setImagenActual] = useState(SB)
  const [opciones, setOpciones] = useState(1)
  const [botonActivo, setBotonActivo] = useState(1);


  const cambiarImagen = (nuevaImagen) => {
    const newImage = getImageURL(nuevaImagen)
    setImagenActual(newImage)
  }  
  
  const cambiarImagen2 = (opcion1, opcion2) => {
    const newImage = getImageRaiseURL(opcion1, opcion2)
    setImagenActual(newImage)
  }
  
  const cambiarOpciones = (numVisualizador) => {
    setOpciones(numVisualizador)
    setBotonActivo(numVisualizador); 
  }

  

  return (
    <>
      <div className='container'>
        <div className='opciones'>
        <button className={botonActivo === 1 ? 'active' : ''} onClick={() => cambiarOpciones(1)}>open-raise</button>
        <button className={botonActivo === 2 ? 'active' : ''} onClick={() => cambiarOpciones(2)}>3bet/call</button>
        </div>
        <div className='imagen'>
        {opciones === 1 ?<OpenRaiseVisualizer cambiarImagen={cambiarImagen}/>:<ReraiseVisualizer cambiarImagen={cambiarImagen2}/>}
          <img src={imagenActual} alt='Imagen actual' />
        </div>
      </div>
      
    </>
  )
}

export default App
