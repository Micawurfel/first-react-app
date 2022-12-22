import React from "react"
import ItemList from "./ItemList"
import '../ItemDetailContainer/ItemDetail.css';
import { useState, useEffect} from "react";
import {getFetch} from "../../utils/mock" 
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {idCategoria} = useParams()

    useEffect(() => {
        if(idCategoria){

            getFetch
            .then(data => {
                setProductos( data.filter( producto => producto.category === idCategoria) )
            })
            .catch (err => console.log(err)) 

        }else {
            getFetch
            .then(data => {
                setProductos(data)
            })
            .catch (err => console.log(err))   
        }
    },[idCategoria])
    
    return(
        <div className="containerList">
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer