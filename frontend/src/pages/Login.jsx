import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(
      "Frontend login form submitted. Backend authentication will be connected next.",
    );
  }

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-5">
          <div className="card shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center mb-2">Welcome Back</h1>

              <p className="text-muted text-center mb-4">
                Login to continue shopping.
              </p>

              {message && (
                <div className="alert alert-success">{message}</div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="loginEmail" className="form-label">
                    Email address
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    id="loginEmail"
                    placeholder="name@example.com"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="loginPassword" className="form-label">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    id="loginPassword"
                    placeholder="Enter your password"
                    minLength="6"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>

              <p className="text-center mt-4 mb-0">
                New to ShopSmart?{" "}
                <Link to="/register">Create an account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;