import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function SignIn() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation(); // ✅ get current location
  const from = location.state?.from?.pathname || "/"; // ✅ fallback to home
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (signIn(email, password)) {
      navigate(from); // ✅ go back to previous protected route
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white dark:bg-gray-800 shadow rounded">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Sign In</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          className="w-full p-2 mb-4 border dark:bg-gray-700 dark:text-white rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="w-full p-2 mb-4 border dark:bg-gray-700 dark:text-white rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
