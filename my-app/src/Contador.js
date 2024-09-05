import './Contador.css';
import React, { useState } from 'react';

function Contador({valorInicial}) {
    const [contador, setContador] = useState(valorInicial);
    const incrementar = () => {
        setContador(contador + 1);
      };
    
      const decrementar = () => {
        setContador(contador   
     - 1);
      };
  return (
    <div className="contador-recuadro">
        <div className="contador-display">{contador}</div>
      <button onClick={decrementar}>-</button>
      <button onClick={incrementar}>+</button>
    </div>
  );
}

export default Contador;