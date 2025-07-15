import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import services from "../data/services";

function BookingForm() {
  const { id } = useParams(); // service ID from URL
  const navigate = useNavigate();

  const service = services.find((s) => s.id === id);
  const serviceName = service ? service.name : "Unknown Service";


  // You could fetch real service info using id
  const [form, setForm] = useState({
    date: "",
    time: "",
    address: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!form.date || !form.time || !form.address) {
    setError("Please fill in all fields");
    return;
  }

  const booking = {
    id: Date.now(),
    serviceId: id,
    serviceName: serviceName,
    ...form,
    status: "Confirmed",
  };

  const existing = JSON.parse(localStorage.getItem("bookings") || "[]");
  localStorage.setItem("bookings", JSON.stringify([...existing, booking]));

  setSuccess(true);

  setTimeout(() => {
    navigate("/my-bookings");
  }, 2000);
};


  return (
    <div className="max-w-lg mx-auto p-6 mt-10 bg-white dark:bg-gray-800 shadow rounded">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        Book: {serviceName}
      </h2>
      {success ? (
        <div className="text-green-600 dark:text-green-400 font-medium">
          Booking confirmed! Redirecting...
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm font-medium dark:text-gray-200">Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-white"
            required
          />

          <label className="block mb-2 text-sm font-medium dark:text-gray-200">Time</label>
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-white"
            required
          />

          <label className="block mb-2 text-sm font-medium dark:text-gray-200">Address</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-white"
            placeholder="Enter your address"
            required
          />

          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
          >
            Book Now
          </button>
        </form>
      )}
    </div>
  );
}

export default BookingForm;
