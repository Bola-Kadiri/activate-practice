
import react_img from '../../assets/react.svg'
import {Link} from 'react-router-dom'
import './Nav.css'
import { FaBars } from "react-icons/fa";
import { useState } from 'react';




const Nav = () => {

  const [show, setShow] = useState(false);

const toggleMenu =()=>{
  setShow(!show) // this is going to toggle our state 
}


const closeMenu=()=>{
  setShow(false)
}
  return (
    <div>
         <nav>
            <img src={react_img} alt="" />
            <div className={show ? "open" : "links"}>
                <Link to='/'onClick={closeMenu} >Home</Link>
                <Link to='/about' onClick={closeMenu}>About</Link>
                <Link to='/contact' onClick={closeMenu}>Contact</Link>
                <Link to='/services' onClick={closeMenu}>Services</Link>
                <Link to='/blog' onClick={closeMenu}>Blog</Link>
            </div>
            <FaBars className='bar' onClick={toggleMenu}/>
        </nav>
    </div>
  )
}

export default Nav