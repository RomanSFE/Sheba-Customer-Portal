import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-white">
          Sheba.xyz
        </Link>

        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-700 dark:text-gray-200 focus:outline-none"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <DesktopNavLinks
            user={user}
            signOut={signOut}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 bg-white dark:bg-gray-900 rounded shadow p-4 space-y-2 list-none">
          <MobileNavLinks
            user={user}
            signOut={signOut}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            closeMenu={() => setMenuOpen(false)}
          />
        </ul>
      )}
    </nav>
  );
}

function DesktopNavLinks({ user, signOut, darkMode, setDarkMode }) {
  return (
    <>
      <Link to="/services" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
        Services
      </Link>
      <Link to="/my-bookings" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
        My Bookings
      </Link>

      {user ? (
        <>
          <span className="text-sm text-gray-600 dark:text-gray-300">{user.email}</span>
          <button onClick={signOut} className="text-sm text-red-500 hover:underline">
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/signin" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
            Sign In
          </Link>
          <Link to="/signup" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
            Sign Up
          </Link>
        </>
      )}

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-gray-200 dark:bg-gray-700 text-sm rounded px-3 py-1 text-gray-800 dark:text-gray-200"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </>
  );
}

function MobileNavLinks({ user, signOut, darkMode, setDarkMode, closeMenu }) {
  const linkClass = "block text-gray-700 dark:text-gray-200 hover:text-blue-600";

  return (
    <>
      <li>
        <Link to="/services" className={linkClass} onClick={closeMenu}>
          Services
        </Link>
      </li>
      <li>
        <Link to="/my-bookings" className={linkClass} onClick={closeMenu}>
          My Bookings
        </Link>
      </li>

      {user ? (
        <>
          <li className="text-sm text-gray-600 dark:text-gray-300">{user.email}</li>
          <li>
            <button
              onClick={() => {
                signOut();
                closeMenu();
              }}
              className="text-red-500 hover:underline text-sm"
            >
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/signin" className={linkClass} onClick={closeMenu}>
              Sign In
            </Link>
          </li>
          <li>
            <Link to="/signup" className={linkClass} onClick={closeMenu}>
              Sign Up
            </Link>
          </li>
        </>
      )}

      <li>
        <button
          onClick={() => {
            setDarkMode(!darkMode);
            closeMenu();
          }}
          className="w-full text-left bg-gray-200 dark:bg-gray-700 text-sm rounded px-3 py-1 text-gray-800 dark:text-gray-200"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </li>
    </>
  );
}

export default Navbar;
