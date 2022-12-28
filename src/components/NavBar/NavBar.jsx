import React from "react";
import './NavBar.css';
import logo from '../../assets/img/logo.png'
import CartWidget from "../Cart/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="navbar container-fluid">
            <div>
                <Link to='/'>
                    <img className="imgLogo" src={logo} alt="logo" />
                </Link>
            </div>
            
            <ul>
                <li>
                    <Link className="nav-item" to='/categoria/tops'>Tops</Link>
                </li>
                <li>
                    <Link className="nav-item" to='/categoria/bottoms'> Bottoms </Link>
                </li>
                <li>
                    <Link className="nav-item" to='/categoria/abrigos'>Abrigos</Link>
                </li>
            </ul>

            <CartWidget/>
        </div>
    )
}

export default NavBar;