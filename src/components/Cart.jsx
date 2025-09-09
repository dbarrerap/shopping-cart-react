import {CartItem} from "./CartItem.jsx";
import { FaTrashCan, FaCreditCard } from 'react-icons/fa6'
import {useCart} from "../contexts/CartProvider.jsx";
import {Link} from "react-router-dom";

export const Cart = () => {
    const {state, dispatch} = useCart()
    return (
        <>
            <div className="list-group">
                {state.cartItems.length > 0 ? (
                    state.cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))
                ) : (
                    <li className="list-group-item">
                        <h5>No items to show</h5>
                    </li>
                )}
            </div>
            {state.cartItems.length > 0 && (
                <div className="d-flex justify-content-between mt-3">
                    <button className="btn btn-sm btn-danger d-flex align-items-center" onClick={()=>dispatch({type: 'RESET_CART'})}>
                        <FaTrashCan className="me-2" />
                        Limpiar
                    </button>
                    <Link to="/checkout" className="btn btn-sm btn-primary">
                        <FaCreditCard className="me-2" />
                        Ir a Pagar
                    </Link>
                </div>
            )}

        </>
    );
};