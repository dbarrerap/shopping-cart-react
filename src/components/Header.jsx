import { FaCartShopping } from 'react-icons/fa6'
import {Cart} from "./Cart.jsx";
import {useState} from "react";
export const Header = () => {
    const [showCart, setShowCart] = useState(false);

    const toggleCart = () => {
        setShowCart(!showCart);
    }

    return (
        <nav className="navbar navbar-expand-lg bg-warning-subtle mb-3">
            <div className="container justify-content-start">
                <span className="navbar-brand mb-0 h1">Shopping Cart</span>
                <div className="dropdown">
                    <button className="btn dropdown-toggle btn-outline-secondary" onClick={toggleCart}>
                        <FaCartShopping size={20} />
                        <span className="ms-2">Carrito</span>
                    </button>
                    <div className={`dropdown-menu p-3 ${showCart ? 'show' : ''}`} style={{width: '350px'}}>
                        <Cart />
                    </div>
                </div>
            </div>
        </nav>
    );
};