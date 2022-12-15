import React from "react";
import './NavBar.css';
import logo from '../../assets/img/logo.png'
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
        <div className="navbar container-fluid">
            <div>
                <a href="#">
                    <img className="imgLogo" src={logo} alt="logo" />
                </a>
            </div>
            <ul>
                <li className="nav-item">
                    <a href="#">Nosotros</a>
                </li>
                <li className="nav-item">
                    <a href="#">Productos</a>
                </li>
                <li className="nav-item">
                    <a href="#">Categorias</a>
                </li>
                <li className="nav-item">
                    <a href="#">Contacto</a>
                </li>
            </ul>
            <CartWidget/>
        </div>
    )
}

export default NavBar;