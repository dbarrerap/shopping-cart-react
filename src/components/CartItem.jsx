import {useContext} from "react";
import {CartContext} from "../contexts/CartContext.js";
import { FaPlus, FaMinus, FaTrashCan } from 'react-icons/fa6'

export const CartItem = ({item}) => {
    const {dispatch} = useContext(CartContext)
    return (
        <div className="list-group-item">
            <h5>{item.name} <small>Cant: {item.quantity}</small></h5>
            <div className="d-flex justify-content-around">
                <button className="btn btn-light" onClick={() => dispatch({type: 'DECREASE_ITEM', payload: item})}>
                    <FaMinus size={20} />
                </button>

                <button className="btn btn-light" onClick={() => dispatch({type: 'INCREASE_ITEM', payload: item})}>
                    <FaPlus size={20} />
                </button>
            </div>
        </div>
    );
};