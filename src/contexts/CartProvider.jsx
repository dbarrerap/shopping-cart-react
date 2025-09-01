import {CartContext} from "./CartContext.js";
import {useReducer} from "react";

export const CartProvider = ({ children }) => {
    const initialState = {
        cartItems: []
    }

    const cartReducer = (state = initialState, action) => {
        switch (action.type) {
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

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}