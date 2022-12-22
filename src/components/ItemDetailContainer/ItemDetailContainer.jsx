import React from "react";
import { getFetch } from "../../utils/mock";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
const [item, setItem] = useState({})
const {id} = useParams()

    useEffect(() => {

        getFetch
        .then(data => {
            setItem( data.find( producto => producto.id == parseInt(id) ))
        })
        .catch (err => console.log(err))  

    },[id])



    return(
        <div className="containerList">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer