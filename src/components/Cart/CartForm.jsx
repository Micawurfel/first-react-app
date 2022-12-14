import React from 'react'

const CartForm = ({handleOnChange, handleOnSubmit, setFormData}) => {

    return (
        <>
            <form
                className="form-group mt-4 me-4" 
                onSubmit={handleOnSubmit}
                onChange={handleOnChange} 
            >
                    <input 
                        name='fullName'
                        value={setFormData.fullName}
                        className="form-control"
                        type="text" 
                        placeholder="Imgrese su nombre"
                        required
                    />
                    <input 
                        name='email'
                        value={setFormData.email}
                        className="form-control mt-4"
                        type="email" 
                        placeholder="Ingrese su email"
                        required
                    />
                    <input 
                        name='phone'
                        value={setFormData.phone}
                        className="form-control mt-4"
                        type="phone" 
                        placeholder="Ingrese su numero de telefono"
                        required
                    />
                    <input 
                        className="btn btn-dark mt-4 mx-auto"
                        type="submit" 
                        value="Comprar"                
                    />
            </form>
        </>
    )
}

export default CartForm