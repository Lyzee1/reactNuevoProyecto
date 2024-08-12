import "./convocados.css";
import Jugadores from "../Desliz/desliz";
import Abajo from "../footer/footer"



function Convocados() {
  return (
    <>
      
      <Jugadores />
      <div className="footerdiv">
        <Abajo />
      </div>
    </>
  );
}

export default Convocados;
