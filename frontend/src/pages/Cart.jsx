import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    subtotal,
    removeFromCart,
    updateQuantity,
  } = useCart();

  const delivery = subtotal > 100 || subtotal === 0 ? 0 : 5.99;
  const total = subtotal + delivery;

  if (cartItems.length === 0) {
    return (
      <main className="container py-5 text-center">
        <div className="empty-cart-box mx-auto">
          <h1>Your cart is empty</h1>
          <p className="text-muted">
            Add products to your cart to continue.
          </p>

          <Link to="/products" className="btn btn-primary">
            Browse Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container py-5">
      <h1 className="mb-4">Shopping Cart</h1>

      <div className="row g-4">
        <div className="col-lg-8">
          {cartItems.map((item) => (
            <div className="card shadow-sm mb-3" key={item.id}>
              <div className="card-body">
                <div className="row align-items-center g-3">
                  <div className="col-md-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded"
                    />
                  </div>

                  <div className="col-md-4">
                    <h2 className="h5">{item.name}</h2>
                    <p className="text-muted mb-1">{item.category}</p>
                    <p className="fw-bold mb-0">
                      €{item.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="col-md-3">
                    <label
                      htmlFor={`quantity-${item.id}`}
                      className="form-label"
                    >
                      Quantity
                    </label>

                    <input
                      id={`quantity-${item.id}`}
                      type="number"
                      className="form-control"
                      min="1"
                      max={item.stock}
                      value={item.quantity}
                      onChange={(event) =>
                        updateQuantity(
                          item.id,
                          Number(event.target.value),
                        )
                      }
                    />
                  </div>

                  <div className="col-md-2 text-md-end">
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h2 className="h4 mb-4">Order Summary</h2>

              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>€{subtotal.toFixed(2)}</span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Delivery</span>
                <span>
                  {delivery === 0 ? "Free" : `€${delivery.toFixed(2)}`}
                </span>
              </div>

              <hr />

              <div className="d-flex justify-content-between fw-bold h5">
                <span>Total</span>
                <span>€{total.toFixed(2)}</span>
              </div>

              <Link to="/checkout" className="btn btn-success w-100 mt-3">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;