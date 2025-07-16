import { Link } from "react-router-dom";
import bannerImg from "../assets/home-banner.webp";
import img1 from "../assets/ac1.jpg";
import img2 from "../assets/ac2.jpg";
import img3 from "../assets/cleaning.jpg";
import img4 from "../assets/carwash.jpg";
import img5 from "../assets/salon1.jpg";
import img6 from "../assets/salon2.jpg";

const services = [
  { name: "AC Repair", img: img1 },
  { name: "AC Doctor", img: img2 },
  { name: "Cleaning", img: img3 },
  { name: "Plumbing", img: img4 },
  { name: "Pest Control", img: img5 },
  { name: "Electrician", img: img6 },
];

function Home() {
  return (
    <div>
      <section
        className="relative text-center mb-12 bg-cover bg-center bg-no-repeat py-16 md:py-24 rounded-lg"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
        <div className="relative z-10 p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Welcome to Sheba.xyz
          </h1>
          <p className="mt-4 text-gray-200 text-lg">
            Get professional services at your doorstep — fast, easy, reliable.
          </p>
          <Link
            to="/services"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 dark:text-blue-600 dark:bg-white dark:hover:bg-gray-200"
          >
            Explore Services
          </Link>
        </div>
      </section>

      {/* Featured Services */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Featured Services</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 p-6 rounded shadow hover:shadow-lg transition"
              >
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-full h-40 object-cover rounded"
                />
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-4">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  Quick and trusted {service.name.toLowerCase()} service from trained professionals.
                </p>
                <Link
                  to="/services"
                  className="text-sm text-blue-500 hover:underline mt-4 inline-block"
                >
                  View More →
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
