import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"


const CartWidget = () => {
    return(
        <> 
            <FontAwesomeIcon icon={faCartShopping} style={{fontSize:"26px", margin:"10px"}} />
        </>
    )
}

export default CartWidget