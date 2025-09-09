import {useCart} from "../contexts/CartProvider.jsx";
import {Link} from "react-router-dom";
import {CartItem} from "../components/index.js";

export const CheckoutPage = () => {
    const { state } = useCart()
    const total = state.cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0)

    return (
        <div className="container py-5">
            <h2>Checkout</h2>
            <hr/>
            { state.cartItems.length > 0 ? (
                <div className="row">
                    <div className="col-12 col-md-7">
                        <h4>Resumen de Orden</h4>
                        <ul className="list-group mb-3">
                            { state.cartItems.map((item) => (
                                <CartItem key={item.id} item={item} />
                            )) }
                            <li className="list-group-item d-flex justify-content-between">
                                <strong>Total</strong>
                                <strong>${total.toFixed(2)}</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-5">
                        <h4>Formulario de Pago</h4>
                        <div className="row g-2">
                            <div className="col-12"><input type="text" className="form-control" placeholder="Numero de Tarjeta"/></div>
                            <div className="col-6"><input type="text" className="form-control" placeholder="Fecha Expiracion" /></div>
                            <div className="col-6"><input type="text" className="form-control" placeholder="CCV" /></div>
                        </div>
                        <button className="btn btn-primary mt-3">Pagar</button>
                    </div>
                </div>
            ) : (
                <p>El carrito esta vacio. <Link to="/">Regrese</Link> al inicio.</p>
            )}
        </div>
    )
}