import carruseluno from '../../assets/img/carruseluno.jpg'
import carruseldos from '../../assets/img/carruseldos.jpeg'
import carruseltres from '../../assets/img/carruseltres.jpeg'
import Carousel from 'react-bootstrap/Carousel'
import './carrusel.css'

function Carrusel() {
  return (
    <>
    <div className='divcarr'>
    <Carousel className='carrusel'>
      <Carousel.Item  className='itemcarrusel'>
      <img src={carruseluno} alt="" className='carruselfoto' />
      </Carousel.Item>


      <Carousel.Item  className='itemcarrusel'>
      <img src={carruseldos} alt="" className='carruselfoto' />
      </Carousel.Item>


      <Carousel.Item  className='itemcarrusel'>
      <img src={carruseltres} alt=""  className='carruselfoto' />
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
  
}

export default Carrusel;