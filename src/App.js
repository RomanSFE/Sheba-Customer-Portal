import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServiceList from "./pages/ServiceList";
import ServiceDetail from "./pages/ServiceDetail";
import BookingForm from "./pages/BookingForm";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import MyBookings from "./pages/MyBookings";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Navbar />
      <div className="px-4 py-6">
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/book/:id"
            element={
              <PrivateRoute>
                <BookingForm />
              </PrivateRoute>
            }
          />
          <Route path="/services" element={<ServiceList />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/book/:id" element={<BookingForm />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/my-bookings" element={<MyBookings />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
