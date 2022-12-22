import React from "react";
import { createContext, useContext, useState } from "react";

const cartContext = createContext([])

export const useCartContext = () => useContext(cartContext)


export default function CartContextProvider ({children}) {
    const [cartList, setCartList] = useState([])

    const addToCart = (item) => {

        // const index = cartList.findIndex(i => i.item.id === item.id)
        // if (index > -1){
        //     const oldQy = cartList[index.quantity]
            
        //     cartList.splice(index,1)
        //     setCartList ([...cartList, {item,quantity:quantity + oldQy}])
        // } 
        // else {
        //     setCartList([...cartList, {item,quantity}])
        // }

        let previousCart = [...cartList]
        if(previousCart.some( i => i.item.id === item.item.id)){
            previousCart.find( i => i.item.id === item.item.id).cantidad =+ item.quantity
            setCartList(previousCart)
        }else {
            setCartList([...cartList, item])
        }
    }

    // const removeItem = () =>{
    //     cartList([])
    // }

    console.log(cartList())

    return(
        <cartContext.Provider value={{
            cartList, 
            addToCart
        }}>
            {children}
        </cartContext.Provider>
    )
}


