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
    }


    const totalQuantity = () => {
        return cartList.reduce((acum, value) => acum + value.quantity, 0 )
    }


    const totalPrice = () =>{
        return cartList.reduce((acum, value)=> acum + (value.item.price * value.quantity), 0 )
    }

    const borrarLista = () => {
        cartList([])
    }
    
    return(
        <cartContext.Provider value={{
            cartList, 
            addToCart,
            removeItem,
            totalQuantity, 
            totalPrice, 
            borrarLista
        }}>
                {children}
        </cartContext.Provider>
    )
}

