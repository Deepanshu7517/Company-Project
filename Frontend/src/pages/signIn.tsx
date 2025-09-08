import { useState } from "react";
import "../css/signIn.css"; // Import the CSS file

const SignIn = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // ⏩ Instead of calling backend, just redirect
    setTimeout(() => {
      window.location.href = "/"; // go to dashboard
    }, 1000);
  };

  return (
    <div>
      {/* Sign In Box */}
      <div className="signIn">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email (not checked)"
            required
          />
          <input
            type="password"
            placeholder="Enter password (not checked)"
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
1