import "./App.css";
import freecodecamplogo from "./imagenes/freecodecamp-logo.png";
import Boton from "./componentes/Boton";

function App() {
  const manejarClic = () => {
    console.log("clic");
  };

  const reiniciarContador = () => {
    console.log("reiniciar");
  };

  return (
    //Logo de freecodeCamp
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freecodecamplogo}
          alt="logo de freecodeCamp"
        ></img>
      </div>
      <div className="contenedor-principal">
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>

      {/*Fin de la aplicacion*/}
    </div>
  );
}

export default App;
