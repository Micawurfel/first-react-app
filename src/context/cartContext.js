import { createContext, useContext, useState } from "react";

const cartContext = createContext([])

export const useCartContext = () => useContext(cartContext)


export default function CartContextProvider ({children}) {
    const [cartList, setCartList] = useState([])

    function addToCart(item){

        if(cartList.some( i => i.item.id === item.item.id)){
            cartList.find( i => i.item.id === item.item.id).quantity += item.quantity 
            setCartList(cartList)
        }else {
            setCartList([...cartList, item])
        }
    }

    const removeItem = (item) => {
        const removeProduct = cartList.filter(i => i.item.id !== item.item.id)
        setCartList([...removeProduct])
        console.log(cartList)
    }


    const totalQuantity = () => {
        return cartList.reduce((total, item) => total + item.quantity, 0 )
    }
    const totalPrice = (item) => {
        return cartList.reduce(item.price * item.quantity )
    }

    return(
        <cartContext.Provider value={{
            cartList, 
            addToCart,
            removeItem,
            totalQuantity, 
            totalPrice
        }}>
            {children}
        </cartContext.Provider>
    )
}

