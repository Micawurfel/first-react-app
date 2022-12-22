import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'


const CartWidget = () => {
    return(
        <> 
            <Link to={`/carrito`}>
                <FontAwesomeIcon icon={faCartShopping} style={{fontSize:"26px", margin:"10px"}} />
            </Link>
        </>
    )
}

export default CartWidget