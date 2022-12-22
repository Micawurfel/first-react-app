import React from "react";
import ItemCount from "./ItemCount";
import { useCartContext } from "../../context/cartContext";

const ItemDetail = ({item}) => {

    const {addToCart} = useCartContext()

    const onAdd = (cant) => {
        addToCart(item, cant)
    }

    console.log(addToCart)

    return(
        <>
            <div className="card">
                <div className="card-header">
                    <img src={item.photoURL} alt="" className="card-img-top" />
                </div>
                <div className="card-body">
                    <h2 className="card-title"> {item.title} </h2>
                    <p className="card-text"> {item.description}</p>
                    <p className="card-text">{item.price}$</p>
                </div>
                <div className="card-footer">
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
                </div>
            </div> 
        </>
    )
}

export default ItemDetail