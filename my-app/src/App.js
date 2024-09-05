import logo from './logo.svg';
import imagen from './imagen.png';
import './App.css';
import Tarjeta from './Tarjeta';
import Contador from './Contador';
import ListaTarea from './ListaTarea';
import Formulario from './FormularioSimple';

function App() {
    const nombre = "Juan"
    const apellido = "Gomez"
    const profesion = "Verdulero"


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="Titulo">Hola Mundo!</h2>

        <div className="Tarjeta">
        <img src={imagen} className="Imagen" alt="imagen"/>
        <div className='Texto'>
        <Tarjeta valor={nombre} />
        <Tarjeta valor={apellido} />
        <Tarjeta valor={profesion} />
        </div>
        </div>
        
        <div className="Contador">
            <Contador valorInicial={0}/>
        </div>
        <div className='ListaTarea'>
            <ListaTarea/>
        </div>
        <div className="FormularioSimple">
            <Formulario />
            </div>
        </header>
    </div>
  );
}

export default App;