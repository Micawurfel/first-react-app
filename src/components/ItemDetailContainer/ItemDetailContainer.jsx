import React from "react";
// import { getFetch } from "../../utils/mock";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../services/getFirebase";

const ItemDetailContainer = () => {
const [item, setItem] = useState({})
const {id} = useParams()

    useEffect(() => {

        const db = getFirestore()
        db.collection('item').doc(id).get()
        .then(resp => {
            setItem({ id, ...resp.data() }) 
        })
        .catch(err => console.log(err))

    },[id])


    return(
        <div className="containerList">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer