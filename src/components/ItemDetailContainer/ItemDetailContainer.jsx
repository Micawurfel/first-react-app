import React from "react";
import { getFetchUno } from "../../utils/mock";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
const [item, setItem] = useState({})

    useEffect(() => {
        getFetchUno
        .then(data => 
            setItem(data)
        )
        .catch (err => console.log(err))
    },[])

    return(
        <>
            <ItemDetail item={item}/>
        </>
    )
}

export default ItemDetailContainer