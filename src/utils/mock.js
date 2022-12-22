const productos = [
    {id: 1, category:"top", title: "Remera negra", description: "Camiseta negra, con mangas", price: 5, stock: 3, photoURL: "http://bit.ly/3BPUJDV"},
    {id: 2, category:"top", title: "Remera blanca", description: "Camiseta blanca, con mangas", price: 5, stock: 3, photoURL: "http://bit.ly/3jgEHwv"},
    {id: 3, category:"bottom", title: "Jean", description: "Jeans de ajuste mom con bolsillo oblicuo", price: 20, stock: 3, photoURL: "http://bit.ly/3v4iMLx"},
    {id: 4, category:"bottom", title: "Pollera roja", description: "Falda en mezclilla de talle alto", price: 12, stock: 3, photoURL: "http://bit.ly/3WqySLq"},
    {id: 5, category:"top", title: "Abrigo", description: "Abrigo de cuello con solapa con botones", price: 29, stock: 3, photoURL: "https://bit.ly/3jlznYV"},
    {id: 6, category:"top", title: "Remera negra", description: "Camiseta negra, con mangas", price: 5, stock: 3, photoURL: "http://bit.ly/3BPUJDV"},
    {id: 7, category:"top", title: "Remera negra", description: "Camiseta negra, con mangas", price: 5, stock: 3, photoURL: "http://bit.ly/3BPUJDV"},
    {id: 8, category:"bottom", title: "Remera negra", description: "Camiseta negra, con mangas", price: 5, stock: 3, photoURL: "http://bit.ly/3BPUJDV"},
    {id: 9, category:"top", title: "Remera negra", description: "Camiseta negra, con mangas", price: 5, stock: 3, photoURL: "http://bit.ly/3BPUJDV"},
    {id: 10, category:"top", title: "Remera negra", description: "Camiseta negra, con mangas", price: 5, stock: 3, photoURL: "http://bit.ly/3BPUJDV"},
    {id: 11, category:"top", title: "Remera negra", description: "Camiseta negra, con mangas", price: 5, stock: 3, photoURL: "http://bit.ly/3BPUJDV"},
]

export const getFetch = new Promise ( (resolve) => {

    setTimeout (()=>{
        resolve(productos)
    }, 2000 )

})

