import { useState } from "react";
import servicesData from "../data/services";
import { Link } from "react-router-dom";

function ServiceList() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = ["All", ...new Set(servicesData.map((s) => s.category))];

  const filteredServices = servicesData.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || s.category === category;
    return matchesSearch && matchesCategory;
  });

  const visibleServices = filteredServices.slice(0, visibleCount);
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search services..."
          className="w-full md:w-1/2 p-2 border rounded dark:bg-gray-700 dark:text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded dark:bg-gray-700 dark:text-white"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleServices.map((service) => (
          <div key={service.id} className="border p-4 rounded shadow dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{service.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{service.description}</p>
            <p className="text-blue-600 font-bold mt-2">৳ {service.price}</p>
            <Link
              to={`/services/${service.id}`}
              className="mt-2 inline-block text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      {visibleCount < filteredServices.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleLoadMore}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default ServiceList;
