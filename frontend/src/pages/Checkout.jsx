import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cartItems, subtotal, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const delivery = subtotal > 100 || subtotal === 0 ? 0 : 5.99;
  const total = subtotal + delivery;

  function handleSubmit(event) {
    event.preventDefault();
    clearCart();
    setOrderPlaced(true);
  }

  if (orderPlaced) {
    return (
      <main className="container py-5 text-center">
        <div className="order-success-box mx-auto">
          <div className="success-icon">✓</div>

          <h1>Order Placed Successfully</h1>

          <p className="text-muted">
            Thank you for shopping with ShopSmart.
          </p>

          <Link to="/products" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  if (cartItems.length === 0) {
    return (
      <main className="container py-5 text-center">
        <h1>No products available for checkout</h1>

        <Link to="/products" className="btn btn-primary mt-3">
          Browse Products
        </Link>
      </main>
    );
  }

  return (
    <main className="container py-5">
      <h1 className="mb-4">Checkout</h1>

      <form onSubmit={handleSubmit}>
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h2 className="h4 mb-4">Delivery Details</h2>

                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="checkoutName" className="form-label">
                      Full name
                    </label>

                    <input
                      id="checkoutName"
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="checkoutEmail" className="form-label">
                      Email
                    </label>

                    <input
                      id="checkoutEmail"
                      type="email"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="checkoutAddress" className="form-label">
                      Address
                    </label>

                    <input
                      id="checkoutAddress"
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-md-5">
                    <label htmlFor="checkoutCity" className="form-label">
                      City
                    </label>

                    <input
                      id="checkoutCity"
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="checkoutCountry" className="form-label">
                      Country
                    </label>

                    <input
                      id="checkoutCountry"
                      type="text"
                      className="form-control"
                      defaultValue="Ireland"
                      required
                    />
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="checkoutEircode" className="form-label">
                      Eircode
                    </label>

                    <input
                      id="checkoutEircode"
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <h2 className="h4 mt-5 mb-4">Payment Details</h2>

                <div className="row g-3">
                  <div className="col-12">
                    <label htmlFor="cardName" className="form-label">
                      Name on card
                    </label>

                    <input
                      id="cardName"
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="cardNumber" className="form-label">
                      Card number
                    </label>

                    <input
                      id="cardNumber"
                      type="text"
                      className="form-control"
                      placeholder="1111 2222 3333 4444"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="cardExpiry" className="form-label">
                      Expiry date
                    </label>

                    <input
                      id="cardExpiry"
                      type="text"
                      className="form-control"
                      placeholder="MM/YY"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="cardCvv" className="form-label">
                      CVV
                    </label>

                    <input
                      id="cardCvv"
                      type="password"
                      className="form-control"
                      maxLength="4"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h2 className="h4 mb-4">Payment Summary</h2>

                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span>€{subtotal.toFixed(2)}</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span>Delivery</span>
                  <span>
                    {delivery === 0
                      ? "Free"
                      : `€${delivery.toFixed(2)}`}
                  </span>
                </div>

                <hr />

                <div className="d-flex justify-content-between h5 fw-bold">
                  <span>Total</span>
                  <span>€{total.toFixed(2)}</span>
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100 mt-3"
                >
                  Place Order
                </button>

                <p className="small text-muted mt-3 mb-0">
                  This is a portfolio demonstration. Do not enter real payment
                  details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Checkout;