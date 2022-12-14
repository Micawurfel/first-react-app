import React from "react";
import { useState } from "react";

const Counter = () => {

    const [numero, updateNumero] = useState(0)

    const Aumentar = () => {
        updateNumero(numero + 1)
    }

    const Reducir = () => {
        updateNumero(numero - 1)
    }

    return(
        <>
            <button onClick={Aumentar}>+</button>
            <h1>Contador:{numero} </h1>
            <button onClick={Reducir}>-</button>
        </>
    )
}

export default Counter