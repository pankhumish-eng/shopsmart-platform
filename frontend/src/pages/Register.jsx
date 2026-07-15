import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(
      "Frontend registration submitted. The backend API will be connected next.",
    );
  }

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center mb-2">Create Account</h1>

              <p className="text-muted text-center mb-4">
                Register to start shopping with ShopSmart.
              </p>

              {message && (
                <div className="alert alert-success">{message}</div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="registerEmail" className="form-label">
                    Email address
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    id="registerEmail"
                    placeholder="name@example.com"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="registerPassword" className="form-label">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    id="registerPassword"
                    placeholder="Minimum six characters"
                    minLength="6"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Repeat your password"
                    minLength="6"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-success w-100">
                  Create Account
                </button>
              </form>

              <p className="text-center mt-4 mb-0">
                Already registered? <Link to="/login">Login here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;