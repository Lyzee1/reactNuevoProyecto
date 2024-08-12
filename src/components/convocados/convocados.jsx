import "./convocados.css";
import Jugadores from "../Desliz/desliz";
import Navbaar from "../navbar/navbar";
import Abajo from "../footer/footer"


function Convocados() {
  return (
    <>
      <div className="divnav">
        <Navbaar />
      </div>
      
      <Jugadores />
      <div className="footerdiv">
        <Abajo />
      </div>
    </>
  );
}

export default Convocados;
