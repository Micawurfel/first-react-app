import React from "react";
import './NavBar.css';
import logo from '../../assets/img/logo.png'
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="navbar container-fluid">
            <div>
                <a href="#">
                    <img className="imgLogo" src={logo} alt="logo" />
                </a>
            </div>
            
            <ul>
                <Link className="nav-item" to={`/categoria`}>
                    Categorias
                </Link>
                <Link className="nav-item" to={`/detalle`}>
                    Categorias 2
                </Link>
            </ul>

            <CartWidget/>
        </div>
    )
}

export default NavBar;