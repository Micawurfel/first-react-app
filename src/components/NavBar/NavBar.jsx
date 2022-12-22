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
                    <Link className="nav-item" to='/categoria/top'>Remeras</Link>
                </li>
                <li>
                    <Link className="nav-item" to='/categoria/bottom'> Pantalones </Link>
                </li>
            </ul>

            <CartWidget/>
        </div>
    )
}

export default NavBar;