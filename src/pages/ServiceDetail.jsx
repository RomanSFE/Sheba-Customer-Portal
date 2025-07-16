import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import services from "../data/services";

function ServiceDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [service, setService] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const found = services.find((s) => s.id === id);
      setService(found);
      setLoading(false);
    }, 1200);
  }, [id]);

  useEffect(() => {
    if (service) {
      const shortDesc = service.description.length > 50
        ? service.description.substring(0, 50) + "..."
        : service.description;

      document.title = `${service.name} - ${shortDesc}`;
    }
    return () => {
      document.title = "Sheba.xyz";
    };
  }, [service]);

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto mt-10 p-6 space-y-4 animate-pulse">
        <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
        <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-32"></div>
        <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-full mt-6"></div>
        <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="text-center mt-10 text-red-500 font-semibold">
        Service not found.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded shadow">
      <div>
        <img
          src={service.img}
          alt={service.name}
          className="w-full h-40 object-cover rounded"
        />
      </div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold dark:text-white">{service.name}</h2>
        <Link
          to="/services"
          className="text-sm text-blue-500 hover:underline"
        >
          ← Back to Services
        </Link>
      </div>

      <p className="mb-2 text-gray-700 dark:text-gray-300">{service.description}</p>
      <p className="mb-4 text-blue-600 font-semibold">৳ {service.price}</p>

      <Link
        to={`/book/${service.id}`}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Book Now
      </Link>

      {service.faqs && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2 dark:text-white">FAQs</h3>
          <ul className="space-y-2">
            {service.faqs.map((faq, index) => (
              <li key={index}>
                <p className="font-medium text-gray-700 dark:text-gray-200">Q: {faq.q}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">A: {faq.a}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {service.reviews && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2 dark:text-white">Customer Reviews</h3>
          <ul className="space-y-2">
            {service.reviews.map((review, index) => (
              <li key={index} className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-bold">{review.user}</span>: {review.comment} ⭐ {review.rating}/5
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ServiceDetail;
