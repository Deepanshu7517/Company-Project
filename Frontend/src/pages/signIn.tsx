import { useState, useEffect } from "react";
import "../css/signIn.css"; // Import the CSS file
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loginError) {
      const timer = setTimeout(() => setLoginError(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [loginError]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoginError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem("authToken", data.token);
        const verifyResponse = await fetch("http://localhost:5000/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.token}`,
          },
        });

        if (verifyResponse.ok) {
          window.location.href = "/";
        } else {
          setLoginError("Token verification failed. Please try again.");
          localStorage.removeItem("authToken");
        }
      } else {
        setLoginError(data.message || "Invalid email or password.");
      }
    } catch (err) {
      console.error("Error during login:", err);
      setLoginError("Failed to connect to the server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Error message */}
      <div className={`error-toast ${loginError ? "show" : ""}`}>
        <p>{loginError}</p>
        <button onClick={() => setLoginError("")}>&times;</button>
      </div>

      {/* Sign In Box */}
      <div className="signIn">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Enter email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Enter password"
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
