import React from "react";

const Item = ({producto}) => {
    return(
        <div className="card" key={producto.id}>
            <div className="card-header">
                <img src={producto.photoURL} alt="" className="card-img-top" />
            </div>
            <div className="card-body">
                <h2 className="card-title"> {producto.title} </h2>
                <p className="card-text"> {producto.description}</p>
                <button className="btn btn-primary"> mas detalles</button>
            </div>
        </div> 
    )
}

export default Item
