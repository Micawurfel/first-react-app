import ItemCount from "./ItemCount"

const ItemListContainer = () => {

    const onAdd = (numero) => {
        alert(`agregaste ${numero} item al carrito`)
    }
    
    return(

        <>
            <ItemCount stock={5} onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer