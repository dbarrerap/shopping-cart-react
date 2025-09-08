import {Link, useParams} from "react-router-dom";
import {useCart} from "../contexts/CartProvider.jsx";
import { FaCartPlus } from "react-icons/fa6"

export const ProductDetail = () => {
    const {id} = useParams();
    const {dispatch, products} = useCart();

    // Obtener el producto
    const product = products.find((elem) => elem.id === parseInt(id));
    console.log(product);

    // Validar si el producto existe
    if (!product) {
        return (
            <div>
                <h2>Producto no encontrado</h2>
                <Link to="/">Volver a la tienda</Link>
            </div>
        );
    }

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_ITEM', payload: product });
    };

    return (
        <div className="row">
            <div className="col-12 col-md-5">
                <img className="img-fluid" src={product.image_full} alt={product.name} />
            </div>
            <div className="col-12 col-md-7">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-12 col-md-9">
                                <h3 className="card-title">{product.name}</h3>
                            </div>
                            <div className="col-12 col-md-3">
                                <button className="btn btn-sm btn-primary" onClick={handleAddToCart}>
                                    <FaCartPlus size={20} />
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="card-body">
                        <p>{product.description}</p>
                        <p>
                            <strong>Precio:</strong> ${product.price}
                        </p>
                    </div>
                    <div className="card-footer">
                        <p className="text-muted">
                            <strong>Category:</strong> {product.category}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}