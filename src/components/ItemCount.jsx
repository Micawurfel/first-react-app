import React, {useState} from "react";

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
            <h3>Remera negra</h3>
            <div>
                <button className="btn" onClick={Aumentar}>+</button>
                <h4>{numero} </h4>
                <button className="btn" onClick={Reducir}>-</button>
            </div>
            <button onClick={AddCart} className="btn">Agragar al carrito</button>
        </>
    )
}

export default ItemCount