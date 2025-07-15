import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-white">
          Welcome to Sheba.xyz
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
          Get professional services at your doorstep — fast, easy, reliable.
        </p>
        <Link
          to="/services"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
        >
          Explore Services
        </Link>
      </section>

      {/* Featured Services */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Featured Services</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {/* Static Sample Cards (replace with dynamic later) */}
          {["AC Repair", "Salon at Home", "Cleaning", "Plumbing", "Pest Control", "Electrician"].map(
            (service, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 p-6 rounded shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">{service}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  Quick and trusted {service.toLowerCase()} service from trained professionals.
                </p>
                <Link
                  to="/services"
                  className="text-sm text-blue-500 hover:underline mt-4 inline-block"
                >
                  View More →
                </Link>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
