import { createContext, useContext, useEffect, useState } from "react";

// Create the context
const AuthContext = createContext();

// Provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // null = not logged in

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const signIn = (email, password) => {
    // Fake login: Accept any non-empty email/password
    if (email && password) {
      const fakeToken = "fake-jwt-token";
      const fakeUser = { email };
      localStorage.setItem("token", fakeToken);
      localStorage.setItem("user", JSON.stringify(fakeUser));
      setUser(fakeUser);
      return true;
    }
    return false;
  };

  const signUp = (email, password) => {
    // Simulate account creation (same as sign-in for fake auth)
    return signIn(email, password);
  };

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for easier use
export function useAuth() {
  return useContext(AuthContext);
}
