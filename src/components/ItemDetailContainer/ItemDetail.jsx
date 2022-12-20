import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {

    const onAdd = (numero) => {
        alert(`agregaste ${numero} item al carrito`)
    }

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
                    <ItemCount stock={5} onAdd={onAdd}/>
                </div>
            </div> 
        </>
    )
}

export default ItemDetail