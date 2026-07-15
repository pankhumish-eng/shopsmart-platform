import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";

function ProductDetails() {
  const { productId } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(productId),
  );

  if (!product) {
    return (
      <main className="container py-5 text-center">
        <h1>Product not found</h1>
        <Link to="/products" className="btn btn-primary mt-3">
          Return to Products
        </Link>
      </main>
    );
  }

  return (
    <main className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow-sm w-100"
          />
        </div>

        <div className="col-lg-6">
          <span className="badge text-bg-secondary mb-3">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <p className="text-warning">★ {product.rating} / 5</p>

          <p className="lead">{product.description}</p>

          <p className="text-muted">{product.stock} items available</p>

          <p className="display-6 fw-bold text-primary">
            €{product.price.toFixed(2)}
          </p>

          <div className="d-flex flex-wrap gap-3">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>

            <Link to="/products" className="btn btn-outline-dark btn-lg">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;