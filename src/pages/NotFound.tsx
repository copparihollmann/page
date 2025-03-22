
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-green p-6">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-9xl font-display text-light-brown mb-8 animate-fade-in">404</h1>
        <p className="text-2xl text-cream mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          The page you're looking for can't be found.
        </p>
        <Link 
          to="/" 
          className="btn-primary inline-flex items-center animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <ArrowLeft className="mr-2" size={18} />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
