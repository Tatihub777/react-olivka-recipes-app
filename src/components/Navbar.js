import React, { useState } from 'react'
import Logo from '../assets/logo-olives.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';


function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar = ()=> {
        setOpenLinks(!openLinks);
    };
  return (
    <header>
    <div className='navbar'>
      <div className="leftSide" id={openLinks ? 'open' : 'close'}>
        <img className='logoOlive' src={Logo} alt="logo" />
        
        <div className='hiddenLinks ' >
            <Link to='/'>Home</Link>
            <Link to='/recipes_search'>Recipes</Link>
            <Link to='/weekly_planner'>Planner</Link>
            
            
        </div>
      </div>
      <div className="rightSide">
      <nav>
            <Link to='/'>Home</Link>
            <Link to='/recipes_search'>Recipes</Link>
            <Link to='/weekly_planner'>Planner</Link>
            
            

            
            <button onClick={toggleNavbar}>
                <ReorderIcon />
            </button>
        </nav>
      </div>

    </div> 
    </header>
  )
}

export default Navbar
