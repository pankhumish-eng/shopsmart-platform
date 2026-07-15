import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-md-6">
            <h2 className="h5">ShopSmart</h2>
            <p className="text-white-50 mb-0">
              Full-stack e-commerce, automation testing, and analytics
              portfolio.
            </p>
          </div>

          <div className="col-md-3">
            <h2 className="h6">Shopping</h2>
            <div className="d-flex flex-column gap-2">
              <Link className="footer-link" to="/products">
                Products
              </Link>
              <Link className="footer-link" to="/cart">
                Cart
              </Link>
            </div>
          </div>

          <div className="col-md-3">
            <h2 className="h6">Account</h2>
            <div className="d-flex flex-column gap-2">
              <Link className="footer-link" to="/login">
                Login
              </Link>
              <Link className="footer-link" to="/register">
                Register
              </Link>
            </div>
          </div>
        </div>

        <hr className="border-secondary" />

        <p className="text-center text-white-50 mb-0">
          © 2026 ShopSmart. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;