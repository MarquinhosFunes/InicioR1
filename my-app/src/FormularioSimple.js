import React, { useState } from 'react';
import './FormularioSimple.css'

function FormularioSimple() {
  const [nombre, setNombre] = useState('');
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMostrarMensaje(true);
  };

  return (
    <div>
      <p>Formulario Simple</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        <button type="submit">Enviar</button>
      </form>
      {mostrarMensaje && <p>Bienvenido, {nombre}</p>}
    </div>
  );
}

export default FormularioSimple;