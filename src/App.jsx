import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Convocados from "./components/convocados/convocados";
import Titulos from "./components/titulos/titulos";
import Inicio from "./components/Inicio/inicio";
import Navbaar from "./components/Navbar/navbar";

function App() {
  return (
    <Router basename="reactNuevoProyecto">
      <>
      <div className="divnav">
      <Navbaar />
          </div>
        <main>
          <Routes>
            <Route path="/" element={<Inicio />}/>
            <Route path="/convocados" element={<Convocados />} />
            <Route path="/titulos" element={<Titulos />} />
          </Routes>
        </main>
      </>
    </Router>
  );
}

export default App;
