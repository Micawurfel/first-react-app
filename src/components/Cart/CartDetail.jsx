import React from 'react'
import "./Cart.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTrash} from "@fortawesome/free-solid-svg-icons"
import { useCartContext } from "../../context/cartContext";

const CartDetail = ({item}) => {

    const {removeItem} = useCartContext()

return (
    <div className="cartContainer">
        <div>
            <img src={item.item.photoURL} alt="" />
        </div>
        <div>
            <h2>{item.item.title}</h2>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: {item.item.price}$</p>
        </div>
        <button onClick={()=>removeItem(item)} style={{border:"none", backgroundColor: "transparent"}}>
            <FontAwesomeIcon icon={faTrash} style={{fontSize:"26px", margin:"10px"}}/>
        </button>
    </div>
)
}

export default CartDetail
