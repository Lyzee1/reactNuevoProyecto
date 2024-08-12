import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Convocados from "./components/convocados/convocados";
import Titulos from "./components/titulos/titulos";
import Inicio from "./components/Inicio/inicio";

function App() {
  return (
    <Router>
      <>
        <main>
          <Inicio />
          <Routes>
            <Route path="/convocados" element={<Convocados />} />
            <Route path="/titulos" element={<Titulos />} />
          </Routes>
        </main>
      </>
    </Router>
  );
}

export default App;
