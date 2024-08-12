import React, { useState, useEffect } from 'react';

const CopaArgentina = () => {
  const [index, setIndex] = useState(0);
  const [copa, setCopa] = useState(null);

  const copas = [
    { nombre: 'Copa América', año: 1921, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-america.png' },
    { nombre: 'Copa América', año: 1925, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-america.png' },
    { nombre: 'Copa América', año: 1927, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-america.png' },
    { nombre: 'Copa América', año: 1929, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-america.png' },
    { nombre: 'Copa América', año: 1937, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-america.png' },
    { nombre: 'Copa América', año: 1941, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-america.png' },
    { nombre: 'Copa América', año: 1945, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-america.png' },
    { nombre: 'Copa América', año: 1946, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-america.png' },
    { nombre: 'Copa América', año: 1947, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-america.png' },
    { nombre: 'Copa América', año: 1955, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-america.png' },
    { nombre: 'Copa América', año: 1957, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-america.png' },
    { nombre: 'Copa América', año: 1959, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-america.png' },
    { nombre: 'Copa Mundial', año: 1978, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-del-mundo.png' },
    { nombre: 'Copa del Mundo Sub-20', año: 1979, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-del-mundo-sub20-02_1.png' },
    { nombre: 'Copa Mundial', año: 1986, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-del-mundo.png' },
    { nombre: 'Copa América', año: 1991, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-america.png' },
    { nombre: 'Copa Confederaciones', año: 1992, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-confederaciones.png' },
    { nombre: 'Copa América', año: 1993, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-america.png' },
    { nombre: 'Copa Artemio Franchi', año: 1993, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-artemio-franchi-finalisima.png' },
    { nombre: 'Copa del Mundo Sub-20', año: 1995, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-del-mundo-sub20-02_1.png' },
    { nombre: 'Copa del Mundo Sub-20', año: 1997, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-del-mundo-sub20-02_1.png' },
    { nombre: 'Copa del Mundo Sub-20', año: 2001, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-del-mundo-sub20-02.png' },
    { nombre: 'Copa América de Futsal', año: 2003, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-america-futsal.png' },
    { nombre: 'Medalla de Oro - JJOO Atenas', año: 2004, img: 'https://assets1.afa.com.ar/Palmares/afa-medalla-de-oro-olimpica.png' },
    { nombre: 'Copa del Mundo Sub-20', año: 2005, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-del-mundo-sub20-02.png' },
    { nombre: 'Copa América Femenina', año: 2006, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-america-femenina.png' },
    { nombre: 'Copa del Mundo Sub-20', año: 2007, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-del-mundo-sub20-02.png' },
    { nombre: 'Medalla de Oro - JJOO Beijing', año: 2008, img: 'https://assets1.afa.com.ar/Palmares/afa-medalla-de-oro-olimpica.png' },
    { nombre: 'Copa del Mundo de Futbol Sala', año: 2016, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-de-mundo-futsal.png' },
    { nombre: 'Copa América', año: 2021, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-america.png' },
    { nombre: 'Finalissima', año: 2022, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-artemio-franchi-finalisima.png' },
    { nombre: 'Copa Mundial', año: 2022, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-del-mundo.png' },
    { nombre: 'Copa América', año: 2024, img: 'https://assets1.afa.com.ar/Palmares/afa-copa-america.png' },
  ];

  useEffect(() => {
    setCopa(copas[index]);
  }, [index]);

  const mostrarAnterior = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const mostrarSiguiente = () => {
    if (index < copas.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div>
      {copa && (
        <div>
          <h2 className='copasNombre'>{copa.nombre}</h2>
          <img src={copa.img} alt="" width="300px" height="450px" className='copasImagen' />
          <p className='copasAnio'>Año: {copa.año}</p>
        </div>
      )}
      <div>
        <button onClick={mostrarAnterior} className='botonizq'>
          Anterior
        </button>
        <button onClick={mostrarSiguiente} className='botonder'>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default CopaArgentina;