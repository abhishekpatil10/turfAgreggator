import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Vendors = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Mock vendors data
  const vendors = [
    {
      id: 1,
      name: "Sports Equipment Store",
      image: "https://placehold.co/400x300?text=Sports+Store",
      location: "Mumbai",
      rating: 4.8,
      reviews: 120,
      description: "Premium sports equipment and accessories",
      categories: ["Equipment", "Accessories", "Training"],
    },
    {
      id: 2,
      name: "Fitness Nutrition",
      image: "https://placehold.co/400x300?text=Fitness+Nutrition",
      location: "Delhi",
      rating: 4.5,
      reviews: 85,
      description: "Sports nutrition and supplements",
      categories: ["Nutrition", "Supplements"],
    },
    {
      id: 3,
      name: "Sports Apparel",
      image: "https://placehold.co/400x300?text=Sports+Apparel",
      location: "Pune",
      rating: 4.7,
      reviews: 150,
      description: "High-quality sports clothing and footwear",
      categories: ["Clothing", "Footwear"],
    },
    {
      id: 4,
      name: "Sports Academy",
      image: "https://placehold.co/400x300?text=Sports+Academy",
      location: "Banglore",
      rating: 4.9,
      reviews: 200,
      description: "Professional sports training and coaching",
      categories: ["Training", "Coaching"],
    },
  ];

  // Filter vendors based on search query
  const filteredVendors = vendors.filter((vendor) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      vendor.name.toLowerCase().includes(searchLower) ||
      vendor.description.toLowerCase().includes(searchLower) ||
      vendor.location.toLowerCase().includes(searchLower) ||
      vendor.categories.some((category) =>
        category.toLowerCase().includes(searchLower)
      )
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#727af9]/20 to-pink-100/20">
      <div className="max-w-7xl mx-auto px-6 py-8 pt-32">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#1f1f1f]">
            Explore <span className="text-[#727af9]">Vendors</span>
          </h1>
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search vendors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#727af9] focus:border-transparent"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVendors.map((vendor) => (
            <div
              key={vendor.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-medium">{vendor.rating}</span>
                  <span className="text-xs text-gray-500">
                    ({vendor.reviews})
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-[#1f1f1f]">
                      {vendor.name}
                    </h2>
                    <p className="text-gray-600">{vendor.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{vendor.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {vendor.categories.map((category, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => navigate(`/vendor/${vendor.id}`)}
                  className="w-full bg-[#727af9] text-white px-6 py-3 rounded-xl hover:bg-[#727af9]/90 transition-colors duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vendors;
