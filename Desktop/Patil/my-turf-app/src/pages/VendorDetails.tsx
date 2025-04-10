import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface Vendor {
  id: number;
  name: string;
  description: string;
  rating: number;
  location: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
}

const VendorDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [productQuantities, setProductQuantities] = useState<Record<number, number>>({});
  const [showQuotationModal, setShowQuotationModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [vendor, setVendor] = useState<Vendor>({
    id: Number(id),
    name: "Sports Equipment Solutions",
    description: "Leading provider of professional sports equipment and installation services",
    rating: 4.8,
    location: "Mumbai, India"
  });
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Artificial Football Turf",
      price: 249999,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&auto=format&fit=crop&q=60",
      description: "Premium quality artificial turf for football fields, 40mm pile height",
      quantity: 0,
    },
    {
      id: 2,
      name: "Tennis Court Net",
      price: 12999,
      image: "https://images.unsplash.com/photo-1592656094267-764d93492a40?w=800&auto=format&fit=crop&q=60",
      description: "Professional tennis net with aluminum posts and tension system",
      quantity: 0,
    },
    {
      id: 3,
      name: "Basketball Court Flooring",
      price: 189999,
      image: "https://images.unsplash.com/photo-1546519638-68e109cddcc2?w=800&auto=format&fit=crop&q=60",
      description: "Shock-absorbent sports flooring for basketball courts",
      quantity: 0,
    },
    {
      id: 4,
      name: "Cricket Practice Nets",
      price: 34999,
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&auto=format&fit=crop&q=60",
      description: "Durable cricket practice nets with steel frame structure",
      quantity: 0,
    },
    {
      id: 5,
      name: "Badminton Court Mat",
      price: 45999,
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop&q=60",
      description: "Professional grade badminton court mat with anti-slip surface",
      quantity: 0,
    },
    {
      id: 6,
      name: "Volleyball Court System",
      price: 29999,
      image: "https://images.unsplash.com/photo-1592656094267-764d93492a40?w=800&auto=format&fit=crop&q=60",
      description: "Complete volleyball court setup with poles, net, and boundary lines",
      quantity: 0,
    },
    {
      id: 7,
      name: "Hockey Turf Installation",
      price: 199999,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&auto=format&fit=crop&q=60",
      description: "Professional hockey turf with water-based surface technology",
      quantity: 0,
    },
    {
      id: 8,
      name: "Multi-Sport Court Tiles",
      price: 89999,
      image: "https://images.unsplash.com/photo-1546519638-68e109cddcc2?w=800&auto=format&fit=crop&q=60",
      description: "Interlocking tiles suitable for multiple sports activities",
      quantity: 0,
    },
    {
      id: 9,
      name: "Athletics Track Surface",
      price: 349999,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&auto=format&fit=crop&q=60",
      description: "Professional grade athletics track with shock absorption",
      quantity: 0,
    },
    {
      id: 10,
      name: "Golf Putting Green",
      price: 129999,
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop&q=60",
      description: "Artificial putting green with realistic roll and feel",
      quantity: 0,
    }
  ]);

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    setProductQuantities(prev => ({
      ...prev,
      [productId]: newQuantity
    }));
    
    setProducts(prevProducts => 
      prevProducts.map(product => {
        if (product.id === productId) {
          return { ...product, quantity: newQuantity };
        }
        return product;
      })
    );
    
    setSelectedProducts(prevProducts => {
      const updatedProducts = prevProducts.filter(p => p.id !== productId);
      if (newQuantity > 0) {
        const product = products.find(p => p.id === productId);
        if (product) {
          updatedProducts.push({ ...product, quantity: newQuantity });
        }
      }
      return updatedProducts;
    });
  };

  const calculateTotal = () => {
    return selectedProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#727af9]/20 to-pink-100/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24 sm:pt-32">
        <button
          onClick={() => navigate("/vendors")}
          className="mb-4 sm:mb-6 flex items-center text-[#727af9] hover:text-[#727af9]/80 text-sm sm:text-base"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Vendors
        </button>

        {/* Vendor Information */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800">{vendor.name}</h1>
              <p className="text-sm sm:text-base text-gray-600 mt-2">{vendor.description}</p>
              <div className="flex items-center mt-3 sm:mt-4">
                <span className="text-yellow-500 mr-2">★</span>
                <span className="text-sm sm:text-base text-gray-600">{vendor.rating}</span>
                <span className="mx-2">•</span>
                <span className="text-sm sm:text-base text-gray-600">{vendor.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
              <h1 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Available Products</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col p-3 sm:p-4 border rounded-xl hover:shadow-md transition-shadow"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 sm:h-48 object-cover rounded-lg mb-3 sm:mb-4"
                    />
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-medium mb-2">{product.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2">
                        {product.description}
                      </p>
                      <p className="text-[#727af9] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                        ₹{product.price.toLocaleString('en-IN')}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            handleQuantityChange(
                              product.id,
                              Math.max(0, (productQuantities[product.id] || 0) - 1)
                            )
                          }
                          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-sm sm:text-base"
                        >
                          -
                        </button>
                        <span className="w-7 sm:w-8 text-center text-sm sm:text-base">{productQuantities[product.id] || 0}</span>
                        <button
                          onClick={() =>
                            handleQuantityChange(
                              product.id,
                              (productQuantities[product.id] || 0) + 1
                            )
                          }
                          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-sm sm:text-base"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 sticky top-20 sm:top-28">
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Order Summary</h2>
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                {selectedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <p className="font-medium text-sm sm:text-base">{product.name}</p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {product.quantity} × ₹{product.price.toLocaleString('en-IN')}
                      </p>
                    </div>
                    <p className="font-semibold text-sm sm:text-base">
                      ₹{(product.price * product.quantity).toLocaleString('en-IN')}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t pt-3 sm:pt-4">
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <span className="font-semibold text-sm sm:text-base">Total</span>
                  <span className="text-lg sm:text-xl font-bold text-[#727af9]">
                    ₹{calculateTotal().toLocaleString('en-IN')}
                  </span>
                </div>
                <button
                  onClick={() => setShowQuotationModal(true)}
                  className="w-full bg-[#727af9] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:bg-[#727af9]/90 transition-colors duration-300 text-sm sm:text-base"
                  disabled={selectedProducts.length === 0}
                >
                  Request Quotation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quotation Modal */}
      {showQuotationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Quotation Request</h2>
              <button
                onClick={() => setShowQuotationModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/2961/2961957.png"
                  alt="Close"
                  className="w-6 h-6"
                />
              </button>
            </div>
            
            <div className="space-y-4 mb-6">
              <p className="text-gray-600">Please review your quotation request before submitting.</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Order Summary</h3>
                {selectedProducts.map((product) => (
                  <div key={product.id} className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">{product.name} (x{product.quantity})</span>
                    <span className="text-sm font-medium">₹{(product.price * product.quantity).toLocaleString('en-IN')}</span>
                  </div>
                ))}
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total</span>
                    <span className="text-lg font-bold text-[#727af9]">
                      ₹{calculateTotal().toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowQuotationModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowQuotationModal(false);
                  setShowThankYouModal(true);
                  // Here you can add logic to actually submit the quotation
                }}
                className="px-4 py-2 bg-[#727af9] text-white rounded-lg hover:bg-[#727af9]/90"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {showThankYouModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 text-center">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setShowThankYouModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/2961/2961957.png"
                  alt="Close"
                  className="w-6 h-6"
                />
              </button>
            </div>
            <img 
              src="https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif"
              alt="Thank you"
              className="w-48 h-48 mx-auto mb-6"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h2>
            <p className="text-gray-600 mb-6">Your quotation request has been submitted successfully.</p>
            <button
              onClick={() => setShowThankYouModal(false)}
              className="px-6 py-2 bg-[#727af9] text-white rounded-lg hover:bg-[#727af9]/90 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorDetail