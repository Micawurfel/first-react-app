import React from "react";
import { useCartContext } from "../../context/cartContext";

const Cart = () => {

    const {cartList} = useCartContext
    console.log(cartList)

    return(
        <>
            <h1>Carrito de Compras</h1>
            <div>
                {/* {cartList.map = (item) => <h2>{item.item.nombre}</h2>
                
                } */}

            </div>
        </>
    )

}

export default Cart