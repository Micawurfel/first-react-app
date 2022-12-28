import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';


const CartWidget = () => {

    const { totalQuantity } = useCartContext()

    return(
        <> 
            <Link to={`/carrito`}>
                <FontAwesomeIcon icon={faCartShopping} style={{fontSize:"28px", margin:"10px"}}/>
                <p className='cartIconQuantity' style={{display:totalQuantity()<= 0 ? "none" : "inline"}}>
                    {totalQuantity()} 
                </p>
            </Link>
        </>
    )
}

export default CartWidget