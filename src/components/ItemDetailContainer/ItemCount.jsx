import React, {useState} from "react";
import './ItemDetail.css';
import { Link } from "react-router-dom";

const ItemCount = ({stock, initial, onAdd}) => {
    const [cambiarBoton, setCambiarBoton] = useState(true)

    initial = 1

    const [contador, setContador] = useState(initial)

    const Aumentar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        } else {
            alert("no hay mas stock")
        }
    }

    const Reducir = () => {
        if (contador > initial){
        setContador(contador - 1)
        }
    }
    
    const AddCart = () => {
        onAdd(contador)
        setCambiarBoton(false)
    }


    return(
        <>
            <div className="counterContainer">
                <button className="btn" onClick={Reducir}>-</button>
                <h4 className="number">{contador} </h4>
                <button className="btn" onClick={Aumentar}>+</button>
            </div>
            <div>
                {cambiarBoton ?
                    <button onClick={AddCart} className="btn btn-outline-primary">Agragar al carrito</button>
                    :
                    <div>
                        <Link to={'/'}>
                            <button className="btn btn-outline-success"> Seguir comprando</button> 
                        </Link>
                        <Link to={'/carrito'}>
                            <button className="btn btn-outline-danger">  Terminar compra </button> 
                        </Link>
                    </div>
                }
            </div>
        </>
    )
}

export default ItemCount