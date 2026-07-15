import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="container py-5 text-center">
      <p className="display-1 fw-bold text-primary mb-0">404</p>
      <h1>Page Not Found</h1>

      <p className="text-muted">
        The page you requested does not exist.
      </p>

      <Link to="/" className="btn btn-primary">
        Return Home
      </Link>
    </main>
  );
}

export default NotFound;