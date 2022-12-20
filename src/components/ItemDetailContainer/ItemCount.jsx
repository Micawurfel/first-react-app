import React, {useState} from "react";
import './ItemDetail.css';

const ItemCount = ({stock, initial, onAdd}) => {
    initial = 1

    const [numero, setNumero] = useState(initial)

    const Aumentar = () => {
        if (numero < stock) {
            setNumero(numero + 1)
        } else {
            alert("no hay mas stock")
        }
    }

    const Reducir = () => {
        if (numero > initial){
        setNumero(numero - 1)
        }
    }
    
    const AddCart = () => {
        onAdd(numero)
    }

    return(
        <>
            <div className="counterContainer">
                <button className="btn" onClick={Reducir}>-</button>
                <h4 className="number">{numero} </h4>
                <button className="btn" onClick={Aumentar}>+</button>
            </div>
            <button onClick={AddCart} className="btn btn-primary">Agragar al carrito</button>
        </>
    )
}

export default ItemCount