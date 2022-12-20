import React from "react"
import ItemList from "./ItemList"
import './ItemDetail.css';
import { useState, useEffect} from "react";
import {getFetch} from "../../utils/mock" 

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getFetch
        .then(data => {
            setProductos(data)
        })
        .catch (err => console.log(err))
    },[])
    
    return(
        <div className="containerList">
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer