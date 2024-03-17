import React from 'react'
import OpenRaiseVisualizer from './OpenRaiseVisualizer'
import ReraiseVisualizer from './ReraiseVisualizer'

function Visualizer({ opcion, cambiarImagen }) {

    

  return (
    <div>
      <div>
        {opcion === "open-raise"?<OpenRaiseVisualizer />:<ReraiseVisualizer />}
          <img src={imagenActual} alt='Imagen actual' />
        </div>
    </div>
  )
}

export default Visualizer
