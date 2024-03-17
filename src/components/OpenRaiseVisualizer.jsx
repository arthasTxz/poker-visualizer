import React from 'react'

function OpenRaiseVisualizer({ cambiarImagen }) {
    const botones = ['SB', 'BTN', 'CO', 'MP', 'EP']
   

    return (
      <div className='opcionesOpenRaise'>
        {botones.map((imagen, index) => (
          <button key={index} onClick={() => cambiarImagen(imagen)}>
              {imagen}
          </button>
        ))}
      </div>
    )
}

export default OpenRaiseVisualizer
