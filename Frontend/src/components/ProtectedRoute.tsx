import { Navigate } from "react-router-dom";
import { useEffect, useState, type JSX } from "react";
import "../css/protectedRoute.css";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    console.log(token);
    if (!token) {
      setIsAuthenticated(false);
      return;
    }

    // Verify token with backend
    fetch("http://localhost:5000/users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem("authToken");
          setIsAuthenticated(false);
        }
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  }, []);

  if (isAuthenticated === null) {
    return <div className="auth-checking">Checking authentication...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
