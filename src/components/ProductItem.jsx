import {useCart} from "../contexts/CartProvider.jsx";
import {Link} from "react-router-dom";

export const ProductItem = ({product}) => {
    const { dispatch } = useCart()

    return (
        <div className="col">
            <div className="card h-100">
                <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">{product.name}</h5>
                        <span className="badge bg-primary p-2">${product.price}</span>
                    </div>
                </div>
                <div className="card-body">{product.description}</div>
                <div className="card-footer">
                    <Link to={`/product/${product.id}`} className="btn btn-sm btn-secondary me-2">
                        Ver detalles
                    </Link>
                    <button
                        className="btn btn-sm btn-primary"
                        onClick={() => dispatch({type: "ADD_ITEM", payload: product})}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};