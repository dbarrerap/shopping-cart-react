import { FaCartShopping } from 'react-icons/fa6'
import {Cart} from "./Cart.jsx";
import {useState} from "react";
import {useCart} from "../contexts/CartProvider.jsx";
import {Link} from "react-router-dom";
export const Header = () => {
    const [showCart, setShowCart] = useState(false);
    const { state } = useCart()

    const toggleCart = () => {
        setShowCart(!showCart);
    }

    return (
        <nav className="navbar navbar-expand-lg bg-warning-subtle mb-3">
            <div className="container justify-content-start">
                <Link className="navbar-brand" to="/">Shopping Cart</Link>
                <div className="dropdown">
                    <button className="btn dropdown-toggle btn-outline-secondary" onClick={toggleCart}>
                        <FaCartShopping size={20} />
                        <span className="ms-2">Carrito ({ state.cartItems.reduce((acc, curr) => acc + curr.quantity, 0) })</span>
                    </button>
                    <div className={`dropdown-menu p-3 ${showCart ? 'show' : ''}`} style={{width: '350px'}}>
                        <Cart />
                    </div>
                </div>
            </div>
        </nav>
    );
};