import React from 'react';
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';
import './Navbar.css';
import './Button.css';

function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [button,setButton] = useState(true);

    const showButton = () => {
        if (window.innerWidth < 960) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    }
    useEffect(()=>{
        showButton()
    }, [])
    window.addEventListener('resize', showButton)
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className="navbar">
               <div className="navbar-container">
                    <Link to = "/" className="navbar-logo" onClick={closeMobileMenu}>
                        DK 
                        <i class="fas fa-heart"></i>
                    </Link> 
                    <div className="menu-icon" onClick={handleClick}>
                        <i className = {click ? 'fas fa-times': 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li>
                            <Link to = "/" onClick={closeMobileMenu} class="nav-links">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to = "/services" onClick={closeMobileMenu} class="nav-links">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to = "/products" onClick={closeMobileMenu} class="nav-links">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to = "/sign-up" onClick={closeMobileMenu} class="nav-links-mobile">
                                Sign up
                            </Link>
                        </li>
                    </ul>
                   {button && 
                   <Link to="/sign-up" className="btn-mobile">
                        <button className="btn--outline">SIGN UP</button>
                   </Link>
                   }
               </div> 
            </nav>
        </>
    )
}

export default Navbar
