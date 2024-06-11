import React from 'react';

export const Header = ({ cart, handleRemove, increaseGuitar, decreaseGuitar, clearCart }) => {

    const totalCart = () => cart.reduce((total, elem)=> total + (elem.quantity * elem.price), 0); // 0 is the initial value

    return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        {/* <a href="index.html">
                        <img className="img-fluid" 
                        src="./public/img/logo.jpg" alt="imagen logo" />
                    </a> */}
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <div className="carrito">
                            <img className="img-fluid" src="./public/img/carrito.png" alt="cart img" />

                            <div id="carrito" className="bg-white p-3">
                                {
                                    cart.length === 0 ? (
                                        <p className="text-center">The cart is empty</p>
                                    ) : (
                                        <>
                                        <table className="w-100 table">
                                            <thead>
                                                <tr>
                                                    <th>Image</th>
                                                    <th>Name</th>
                                                    <th>Price</th>
                                                    <th>Amount</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.map((item) => (
                                                    <tr key={item.id}>
                                                        <td>
                                                            <img className="img-fluid" src={`./public/img/${item.image}.jpg`} alt="guitar img" />
                                                        </td>
                                                        <td>{item.name}</td>
                                                        <td className="fw-bold">
                                                            {item.price}
                                                        </td>
                                                        <td className="flex align-items-start gap-4">
                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
                                                                onClick={() => decreaseGuitar(item.id)}
                                                            >
                                                                -
                                                            </button>
                                                            {item.quantity}
                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
                                                                onClick={() => increaseGuitar(item.id)}
                                                            >
                                                                +
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button
                                                                className="btn btn-danger"
                                                                type="button"
                                                                onClick={() => handleRemove(item.id)}
                                                            >
                                                                X
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <p className="text-end">Total to pay: <span className="fw-bold">${totalCart()}</span></p>
                                        <button className="btn btn-dark w-100 mt-3 p-2" onClick={clearCart}>Empty Cart</button>
                                        </>
                                    )}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}