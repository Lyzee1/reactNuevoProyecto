import './titulos.css'
import React, { useEffect, useState } from "react";
import CopaArgentina from "../Partidos/Copas";
import Abajo from '../footer/footer';
import Navbaar from '../navbar/navbar';




function Titulos() {
  return (
    <>
    <div className='divnav'>
<Navbaar />
</div>

<CopaArgentina />

<Abajo />

</>
  );
};

  
export default Titulos;
