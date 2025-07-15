import { useEffect, useState } from "react";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(data);
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">My Bookings</h2>
      {bookings.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">No bookings yet.</p>
      ) : (
        <ul className="space-y-4">
          {bookings.map((b) => (
            <li key={b.id} className="border p-4 rounded shadow dark:bg-gray-800">
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                {b.serviceName}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                📅 {b.date} ⏰ {b.time}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                📍 {b.address}
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
                ✅ {b.status}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyBookings;
