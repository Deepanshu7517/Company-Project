import { useState, useEffect } from "preact/hooks";
import { signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from "firebase/auth";
import { auth } from "../config/firebase";
import "../css/global.css";
import { useNavigate } from "react-router-dom";

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
      // ⏩ Set session persistence to LOCAL
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
          setLoginError("Access to this account has been temporarily disabled due to many failed login attempts.");
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
    <div>
      <div className={`error-toast ${loginError ? "show" : ""}`}>
        <p>{loginError}</p>
        <button onClick={() => setLoginError("")}>&times;</button>
      </div>

      <div className="signIn">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
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