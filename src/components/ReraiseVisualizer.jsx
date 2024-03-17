import React, { useState } from 'react'

function ReraiseVisualizer({ cambiarImagen }) {

  const [opcionesMostradas, setOpcionesMostradas] = useState([])
  const [opcionActual, setOpcionActual] = useState(null)

  const botones = [
    { label: 'BB', opciones: ['BTN', 'CO', 'EP', 'MP', 'SB'] },
    { label: 'SB', opciones: ['BTN', 'CO', 'EP', 'MP'] },
    { label: 'BTN', opciones: ['CO', 'EP', 'MP'] },
    { label: 'CO', opciones: ['EP', 'MP'] },
    // { label: 'EP', opciones: ['3bet-call-EP-vs-MP'] },
    { label: 'MP', opciones: [] },
    
    
  ];

  const mostrarOpciones = (opcion, opciones) => {
    setOpcionActual(opcion)
    setOpcionesMostradas(opciones)
  }

  return (
    <div>
      <div>
        {botones.map((boton, index) => (
          <button key={index} onClick={() => mostrarOpciones(boton.label, boton.opciones)}>
            {boton.label}
          </button>
        ))}
      </div>
      <div>
        {opcionesMostradas.map((opcion, index) => (
          <button key={index} onClick={() => cambiarImagen(opcionActual, opcion)}>
            {opcion}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ReraiseVisualizer

