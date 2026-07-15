import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <main>
      <section className="hero-section">
        <div className="container py-5 text-center">
          <p className="text-uppercase fw-semibold mb-2">
            Shopping made simple
          </p>

          <h1 className="display-4 fw-bold">Welcome to ShopSmart</h1>

          <p className="lead mt-3 mx-auto hero-description">
            Discover quality products, simple shopping, and a smooth checkout
            experience.
          </p>

          <div className="d-flex justify-content-center gap-3 mt-4">
            <Link to="/products" className="btn btn-light btn-lg">
              Shop Now
            </Link>

            <Link to="/register" className="btn btn-outline-light btn-lg">
              Create Account
            </Link>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <h2 className="text-center mb-4">Why ShopSmart?</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm text-center">
              <div className="card-body p-4">
                <div className="feature-icon">✓</div>
                <h3 className="h5">Quality Products</h3>
                <p className="text-muted mb-0">
                  Browse carefully selected products across popular
                  categories.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm text-center">
              <div className="card-body p-4">
                <div className="feature-icon">🔒</div>
                <h3 className="h5">Secure Shopping</h3>
                <p className="text-muted mb-0">
                  Enjoy a simple and secure online shopping experience.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm text-center">
              <div className="card-body p-4">
                <div className="feature-icon">🚚</div>
                <h3 className="h5">Fast Delivery</h3>
                <p className="text-muted mb-0">
                  Place your order quickly and track it from checkout to
                  delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="mb-1">Featured Products</h2>
            <p className="text-muted mb-0">Popular choices from ShopSmart.</p>
          </div>

          <Link to="/products" className="btn btn-outline-primary">
            View All
          </Link>
        </div>

        <div className="row g-4">
          {featuredProducts.map((product) => (
            <div className="col-md-6 col-lg-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;