import {ProductItem} from "../components";
import {useCart} from "../contexts/CartProvider.jsx";

export const ProductList = () => {
    const { products, isLoading, hasError } = useCart();

    if (isLoading) {
        return (
            <p>Loading...</p>
        )
    }

    if (hasError) {
        return <p>Error al cargar los productos: {hasError.message}</p>;
    }

    return (
        <div className="row row-cols-1 row-cols-lg-3 g-4">
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};