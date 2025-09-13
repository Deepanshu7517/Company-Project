import { useState, useEffect } from "preact/hooks";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import "../css/global.css"; // ✅ Reuse the modern CSS UI we made

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (loginError) {
      const timer = setTimeout(() => setLoginError(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [loginError]);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setLoginError("");
    setLoading(true);

    try {
      // Set session persistence to LOCAL
      await setPersistence(auth, browserLocalPersistence);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/", { replace: true });
    } catch (firebaseError: any) {
      console.error("Firebase Login Error:", firebaseError);

      switch (firebaseError.code) {
        case "auth/user-not-found":
          setLoginError("No user found with this email.");
          break;
        case "auth/wrong-password":
          setLoginError("Incorrect password. Please try again.");
          break;
        case "auth/invalid-email":
          setLoginError("Please enter a valid email address.");
          break;
        case "auth/invalid-credential":
          setLoginError("Invalid email or password. Please try again.");
          break;
        case "auth/too-many-requests":
          setLoginError(
            "Access to this account has been temporarily disabled due to many failed login attempts."
          );
          break;
        default:
          setLoginError("An unexpected error occurred. Please try again.");
          break;
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      {/* ✅ Error Toast */}
      {loginError && (
        <div className="error-toast show">
          <p>{loginError}</p>
          <button onClick={() => setLoginError("")}>&times;</button>
        </div>
      )}

      <div className="login-card">
        {/* Left Side */}
        <div className="login-left">
          <h1>IoTelligence</h1>
          <p>An IOT Data management company</p>
        </div>

        {/* Right Side */}
        <div className="login-right">
          <h2>Hello Again!</h2>
          <p>Welcome Back</p>

          <form onSubmit={handleSubmit} className="login-form">
            {/* Email Input */}
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                placeholder="Email address"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Login Button */}
            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
