import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card product-card h-100 shadow-sm">
      <img
        src={product.image}
        className="card-img-top product-image"
        alt={product.name}
      />

      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <span className="badge text-bg-secondary">{product.category}</span>
          <span className="small text-warning">★ {product.rating}</span>
        </div>

        <h2 className="h5">{product.name}</h2>

        <p className="text-muted product-description">
          {product.description}
        </p>

        <p className="h5 text-primary mt-auto">
          €{product.price.toFixed(2)}
        </p>

        <div className="d-grid gap-2">
          <Link
            to={`/products/${product.id}`}
            className="btn btn-outline-dark"
          >
            View Details
          </Link>

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;