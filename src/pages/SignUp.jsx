import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function SignUp() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (signUp(email, password)) {
      navigate("/"); // ✅ redirect to home
    } else {
      setError("Sign up failed. Try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white dark:bg-gray-800 shadow rounded">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Sign Up</h2>
      <form onSubmit={handleSignup}>
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
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
