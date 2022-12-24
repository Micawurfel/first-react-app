import React from "react";
import { useCartContext } from "../../context/cartContext";
import CartDetail from "./CartDetail";

const Cart = () => {

    const {cartList} = useCartContext()

    console.log(cartList)

    return(
        <>
            <h1>Carrito de Compras</h1>
            {cartList.map(item =>  <CartDetail item={item} key={item.id} />)}
                                    
        </> 
    )

}

export default Cart