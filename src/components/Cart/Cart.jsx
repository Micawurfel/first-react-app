import React, { useState} from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import CartDetail from "./CartDetail";
import CartForm from "./CartForm";
import firebase from "firebase";
import 'firebase/firestore';
import { getFirestore } from "../../services/getFirebase";


const Cart = () => {

    const {cartList, totalPrice, borrarLista} = useCartContext()

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: ''
    })

    const handleOnSubmit=(e) =>{
        e.preventDefault()

        let orden = {}

        orden.date = firebase.firestore.Timestamp.fromDate ( new Date() );

        orden.buyer = formData

        orden.total = totalPrice()

        orden.items = cartList.map( cartList => {
            const id = cartList.item.id;
            const title = cartList.item.title;
            const price = cartList.item.price * cartList.quantity 

            return{id, title, price}
        })

        const db = getFirestore()
        db.collection("orders").add(orden)
        .then((docRef) => {
            console.log("ID: ", docRef.id);
        })
        .catch((err) => {
            console.error("Error: ", err);
        })
        .finally(() => {
            setFormData({
                fullName: '',
                email: '',
                phone: ''
            })
            borrarLista()
        })


        //añadir productos

        // const producto = {
        //     category: 'tops',
        //     title: 'Camiseta rayada',
        //     description: 'Camiseta con rayas blancas y negras' ,
        //     price: 9,
        //     stock: 20,
        //     photoURL: 'https://img.ltwebstatic.com/images3_pi/2020/05/07/158883849921561561f6cbe0805d57910b35e0df60_thumbnail_900x.webp'
        // }

        // db.collection("productos").add(producto)
        // .then((docRef) => {
        //     console.log("ID: ", docRef.id);
        // })
        // .catch((err) => {
        //     console.error("Error: ", err);
        // })
        


        const itemsUptades = db.collection('productos').where(
            firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=> i.item.id)
        )
        const batch = db.batch();

        //restar stock
        itemsUptades.get()
        .then( collection => {
            collection.docs.forEach(docSnapshot => { 
                batch.update(docSnapshot.ref,{
                    stock: docSnapshot.data().stock - cartList.find(item => item.item.id === docSnapshot.id).quantity
                })
            })
            batch.commit().then(res => {
                console.log('resultado batch:', res)
            })
        })

    }

    function handleOnChange(e){
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    return(
        <>
            <h1>Carrito de Compras</h1>

            {cartList.length === 0 ?
                <div>
                    <h3>No hay productos en el Carrito</h3>
                    <Link to={'/'}>
                        <button className="btn btn-outline-success"> Seguir comprando</button> 
                    </Link>
                </div>
                :
                <div className="row">
                    <div className="col" >
                        {cartList.map(item =>  <CartDetail item={item} key={item.id}/>)}
                    </div>
                    <div className="col">
                        <CartForm setFormData={setFormData} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}/>
                    </div>
                </div>
            }
        </> 
    )
}

export default Cart