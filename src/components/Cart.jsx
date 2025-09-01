import {useContext} from "react";
import {CartContext} from "../contexts/CartContext.js";
import {CartItem} from "./CartItem.jsx";
import { FaTrashCan } from 'react-icons/fa6'

export const Cart = () => {
    const {state, dispatch} = useContext(CartContext)
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
            <button className="btn btn-sm btn-danger d-flex align-items-center mt-3" onClick={()=>dispatch({type: 'RESET_CART'})}>
                <FaTrashCan size={14} />
                Limpiar
            </button>
        </>
    );
};