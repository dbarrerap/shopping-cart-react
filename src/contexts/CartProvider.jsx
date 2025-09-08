import {CartContext} from "./CartContext.js";
import {useContext, useEffect, useReducer, useState} from "react";
import axios from "axios";
import localforage from "localforage";

export const CartProvider = ({ children }) => {
    const initialState = {
        cartItems: []
    }

    const cartReducer = (state = initialState, action) => {
        switch (action.type) {
            case 'INIT_CART':
                return {
                    ...state,
                    cartItems: action.payload
                }
            case 'ADD_ITEM':
                // Obtener el producto a agregar
                const newProduct = action.payload;
                // Buscar el producto en el carrito
                const existingItem = state.cartItems.find(elem => elem.id === newProduct.id)

                if (existingItem) {
                    // Si existe, actualizar la cantidad +1
                    const updatedCartItems = state.cartItems.map(elem =>
                        elem.id === newProduct.id
                            ? { ...elem, quantity: elem.quantity + 1 }
                            : elem
                    );

                    return {
                        ...state,
                        cartItems: updatedCartItems
                    }
                }

                // Si no existe, crear nuevo item en carrito con cantidad 1
                return {
                    ...state,
                    cartItems: [...state.cartItems, {...newProduct, quantity: 1 }]
                }

            case 'INCREASE_ITEM':
                const productToIncrease = action.payload;
                const updatedCartItems = state.cartItems.map(item =>
                    item.id === productToIncrease.id
                        ? { ...item, quantity: item.quantity + 1 } // Simplemente incrementamos
                        : item
                );
                return {
                    ...state,
                    cartItems: updatedCartItems,
                };

            case 'DECREASE_ITEM':
                const productToDecrease = action.payload;

                if (productToDecrease.quantity === 1) {
                    // Remover el Item
                    const updatedCartItems = state.cartItems.filter(item => item.id !== productToDecrease.id);
                    return {
                        ...state,
                        cartItems: updatedCartItems,
                    };
                } else {
                    const updatedCartItems = state.cartItems.map(item =>
                        item.id === productToDecrease.id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    );
                    return {
                        ...state,
                        cartItems: updatedCartItems,
                    };
                }
            case 'RESET_CART':
                return {
                    ...state,
                    cartItems: [],
                };
            default:
                return {...state}
        }
    }

    const [state, dispatch] = useReducer(cartReducer, initialState)
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/products')
                setProducts(response.data)
            } catch (error) {
                setHasError(error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchProducts();
    }, [])

    useEffect(() => {
        const loadCart = async () => {
            const cart = await localforage.getItem("cart")
            if (cart) dispatch({type: 'INIT_CART', payload: cart})
        }
        loadCart();
    }, [])

    return (
        <CartContext.Provider value={{state, dispatch, products, isLoading, hasError}}>
            {children}
        </CartContext.Provider>
    )
}

// Custom Hook
export const useCart = () => {
    const context = useContext(CartContext)

    if (context === undefined) {
        throw new Error("useCart debe ser usado dento de CartProvider")
    }

    return context;
}