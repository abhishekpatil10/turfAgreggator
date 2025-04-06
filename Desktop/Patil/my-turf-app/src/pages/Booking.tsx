import { useParams, useNavigate } from 'react-router-dom';

const Booking = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    // Mock turf data - in real app this would come from API
    const turfs = [
        {
            id: '1',
            name: 'Sports Arena',
            location: 'Mumbai',
            price: 1000,
            image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=2070',
            description: 'Premium sports facility with professional-grade turf and amenities',
            amenities: ['Changing Rooms', 'Parking', 'Water Dispenser', 'First Aid'],
            timings: '6:00 AM - 10:00 PM',
            sports: ['Football', 'Cricket', 'Hockey', 'Basketball'],
            capacity: '20 players',
            rating: 4.8,
            reviews: 120,
            userRatings: [
                { name: 'Rahul S.', rating: 5, comment: 'Great facility and well maintained' },
                { name: 'Priya M.', rating: 4, comment: 'Good experience overall' },
                { name: 'Amit K.', rating: 5, comment: 'Best turf in the area' },
                { name: 'Neha R.', rating: 5, comment: 'Excellent service and clean facilities' },
                { name: 'Vikram P.', rating: 4, comment: 'Good value for money' },
                { name: 'Sneha D.', rating: 5, comment: 'Perfect for weekend games' },
                { name: 'Arjun M.', rating: 4, comment: 'Well-maintained turf and helpful staff' },
                { name: 'Meera K.', rating: 5, comment: 'Great atmosphere and professional setup' }
            ]
        },
        // ... other turf data from Explore.tsx ...
    ];

    const turf = turfs.find(t => t.id === id) || turfs[0];

    const handleProceedToPayment = () => {
        // Collect booking details
        const bookingDetails = {
            turfId: id,
            turfName: turf.name,
            price: turf.price,
            turfLocation: turf.location,
            sports: turf.sports[0],
            // Add other booking details as needed
        };
        
        // Navigate to payment page with booking details
        navigate('/payment', { state: bookingDetails });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#727af9]/20 to-pink-100/20">
            <div className="max-w-7xl mx-auto px-6 py-8 pt-32">
                {/* Add breadcrumb navigation */}
                <div className="mb-6">
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-2 text-sm text-gray-500">
                            <li>
                                <a href="/explore" className="text-[#727af9] font-medium">Browse Turfs</a>
                            </li>
                            <li>
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </li>
                            <li>
                                <span className="text-gray-700">{turf.name}</span>
                            </li>
                        </ol>
                    </nav>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Turf Image and Details */}
                        <div>
                            <div className="rounded-2xl overflow-hidden mb-6">
                                <img 
                                    src={turf.image} 
                                    alt={turf.name}
                                    className="w-full h-[300px] object-cover"
                                />
                            </div>
                            <h1 className="text-3xl font-bold text-[#1f1f1f] mb-4">{turf.name}</h1>
                            <div className="flex items-center text-gray-500 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {turf.location}
                            </div>
                            <p className="text-gray-600 mb-6">{turf.description}</p>
                            
                            <div className="space-y-4">
                                <h3 className="text-[#727af9] font-medium">Amenities</h3>
                                <div className="flex flex-wrap gap-2">
                                    {turf.amenities.map((amenity, index) => (
                                        <span key={index} className="px-4 py-2 bg-gray-50 rounded-full text-gray-700">
                                            {amenity}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Booking Form */}
                        <div className="bg-gray-50 rounded-2xl p-6">
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-gray-700 mb-2">Select Sport</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#727af9]">
                                        {turf.sports.map((sport, index) => (
                                            <option key={index} value={sport}>{sport}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-700 mb-2">Select Date</label>
                                        <input 
                                            type="date" 
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#727af9]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Select Time</label>
                                        <input 
                                            type="time" 
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#727af9]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-2">Duration (hours)</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#727af9]">
                                        <option>1 hour</option>
                                        <option>2 hours</option>
                                        <option>3 hours</option>
                                        <option>4 hours</option>
                                    </select>
                                </div>

                                <div className="pt-4">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-gray-600">Price per hour</span>
                                        <span className="text-[#727af9] font-semibold">₹{turf.price}</span>
                                    </div>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-gray-600">Total Amount</span>
                                        <span className="text-[#1f1f1f] font-bold">₹{turf.price}</span>
                                    </div>
                                </div>

                                <button 
                                    onClick={handleProceedToPayment}
                                    className="w-full bg-[#727af9] text-white py-4 rounded-xl hover:bg-[#5457E5] transition-colors duration-300"
                                >
                                    Proceed to Payment
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Reviews Section */}
                    <div className="mt-12 w-full">
                        <h2 className="text-2xl font-bold text-[#1f1f1f] mb-6">Customer Reviews</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {turf.userRatings.slice(0, 4).map((review, index) => (
                                <div key={index} className="bg-gray-50 rounded-xl p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="font-medium text-gray-800">{review.name}</span>
                                        <div className="flex items-center">
                                            <span className="text-yellow-400">★</span>
                                            <span className="ml-1 text-gray-700">{review.rating}</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm line-clamp-3">{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;