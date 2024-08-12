import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom';

function Navbaar () {
    return(
    <>
        <div>
            <img src={logo} alt="" className='logo' /> 
        </div>
        <header className='navbari'>
            <nav >
                <ul>
               <button className='navBut'  ><Link to= "/">  Home </Link></button>
            <button className='navBut' > <Link to= "/convocados"> Convocados</Link></button>
           <button className='navBut'><Link to= "/titulos"> Titulos</Link></button> 
                </ul>
            </nav> 
        </header>    
    </>
        )
}

export default Navbaar;