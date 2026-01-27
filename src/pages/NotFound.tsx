import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="content">
      <div className="content-container" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <h1 style={{ fontSize: '6rem', color: 'var(--color-light-blue)', marginBottom: '1rem' }}>404</h1>
        <h2 className="page-title">Page Not Found</h2>
        <p style={{ margin: '2rem 0', opacity: 0.8 }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </div>
  );
}
