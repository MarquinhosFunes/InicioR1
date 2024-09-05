import './ListaTarea.css'
import React, { useState } from 'react';

function ListaTarea() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
      setNuevaTarea(''); 
    }
  };

  const marcarCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  return (
    <div className='listaTarea-recuadro'>
      <p>Lista de Tareas</p>
      <input type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)}/>
      <button onClick={agregarTarea}>Agregar</button>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            <input type="checkbox" checked={tarea.completada} onChange={() => marcarCompletada(index)}/>
            <span>
              {tarea.texto}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTarea;