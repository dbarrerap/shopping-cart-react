import {ProductItem} from "./ProductItem.jsx";

export const ProductList = ({products}) => {
    return (
        <div className="row row-cols-1 row-cols-lg-3 g-4">
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};