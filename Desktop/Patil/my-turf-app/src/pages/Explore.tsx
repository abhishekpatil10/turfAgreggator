import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface PickleballCourt {
    id: string;
    name: string;
    location: string;
    price: number;
    image: string;
}

const Explore = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);
    const [newCourt, setNewCourt] = useState<Partial<PickleballCourt>>({
        name: '',
        location: '',
        price: 0,
        image: ''
    });

    const pickleballCourts = [
        {
            id: 'p1',
            name: 'Pickleball Pro Arena',
            location: 'Mumbai',
            price: 800,
            image: 'https://images.unsplash.com/photo-1614632537197-38a17061c2bd?q=80&w=2070'
        },
        {
            id: 'p2',
            name: 'Golden Pickle Court',
            location: 'Delhi',
            price: 700,
            image: 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=2069'
        },
        {
            id: 'p3',
            name: 'Elite Pickleball Center',
            location: 'Bangalore',
            price: 750,
            image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2070'
        },
        {
            id: 'p4',
            name: 'Royal Pickleball Club',
            location: 'Hyderabad',
            price: 850,
            image: 'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?q=80&w=2072'
        },
        {
            id: 'p5',
            name: 'Sunrise Pickleball Courts',
            location: 'Chennai',
            price: 720,
            image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2070'
        },
        {
            id: 'p6',
            name: 'Ocean View Pickleball',
            location: 'Goa',
            price: 900,
            image: 'https://images.unsplash.com/photo-1626162987518-4fee900a9323?q=80&w=2070'
        }
    ];

    const filteredCourts = pickleballCourts.filter(court => 
        court.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        court.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleAddCourt = (e: React.FormEvent) => {
        e.preventDefault();
        // Generate a unique ID
        const newId = `p${pickleballCourts.length + 1}`;
        const courtData = {
            ...newCourt,
            id: newId,
            price: Number(newCourt.price)
        } as PickleballCourt;
        
        // Add the new court to the array
        pickleballCourts.push(courtData);
        setShowAddModal(false);
        setNewCourt({ name: '', location: '', price: 0, image: '' });
    };

    // Initialize AOS
    useEffect(() => {
        // @ts-ignore
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out'
        });
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#727af9]/20 to-pink-100/20">
            <div className="max-w-7xl mx-auto px-6 py-8 pt-32">
                <div className="flex justify-between items-center mb-8" data-aos="fade-down">
                    <h1 className="text-3xl font-bold text-[#1f1f1f]">
                        Explore <span className="text-[#727af9]">Pickleball Courts</span>
                    </h1>
                    <div className="flex items-center gap-4">
                        <div className="relative w-[400px]">
                            <input
                                type="text"
                                placeholder="Search courts..."
                                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#727af9] focus:border-transparent"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
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
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="bg-[#727af9] text-white px-6 py-2 rounded-full hover:bg-[#5457E5] transition-colors duration-300 flex items-center gap-2"
                            data-aos="fade-left"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>
                            Add Court
                        </button>
                    </div>
                </div>
                {filteredCourts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCourts.map((court, index) => (
                            <div 
                                key={court.id} 
                                className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-[#727af9]/20 transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src={court.image} 
                                        alt={court.name} 
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-xl font-semibold text-[#1f1f1f] mb-2">{court.name}</h3>
                                    <div className="flex items-center text-gray-500 mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {court.location}
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#727af9] font-semibold">₹{court.price}/hr</span>
                                        <button 
                                            className="bg-[#727af9] text-white px-4 py-2 rounded-full hover:bg-[#5457E5] transition-colors duration-300"
                                            onClick={() => navigate(`/turf/${court.id}`)}
                                        >
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-8" data-aos="fade-up">
                        <div className="text-center py-8">
                            <h2 className="text-2xl font-semibold text-gray-700 mb-2">No courts found in your area</h2>
                            <p className="text-gray-500">We couldn't find any pickleball courts matching your search.</p>
                        </div>
                        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-xl">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#1f1f1f] mb-4">Interested in building a court in your area?</h3>
                                <p className="text-gray-600 mb-6">Help grow the pickleball community by creating a new court!</p>
                                <div className="flex gap-4">
                                    <button 
                                        className="flex-1 bg-[#727af9] text-white px-4 py-2 rounded-full hover:bg-[#5457E5] transition-colors duration-300"
                                        onClick={() => navigate('/vendors')}
                                    >
                                        Yes, I'm interested
                                    </button>
                                    <button 
                                        className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors duration-300"
                                    >
                                        No, thanks
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Add Court Modal */}
                {showAddModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div 
                            className="bg-white rounded-2xl p-8 max-w-md w-full"
                            data-aos="zoom-in"
                            data-aos-duration="300"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-[#1f1f1f]">Add New Court</h2>
                                <button
                                    onClick={() => setShowAddModal(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <form onSubmit={handleAddCourt} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Court Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={newCourt.name}
                                        onChange={(e) => setNewCourt({...newCourt, name: e.target.value})}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#727af9] focus:border-transparent"
                                        placeholder="Enter court name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                    <input
                                        type="text"
                                        required
                                        value={newCourt.location}
                                        onChange={(e) => setNewCourt({...newCourt, location: e.target.value})}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#727af9] focus:border-transparent"
                                        placeholder="Enter location"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Price per Hour (₹)</label>
                                    <input
                                        type="number"
                                        required
                                        min="0"
                                        value={newCourt.price}
                                        onChange={(e) => setNewCourt({...newCourt, price: Number(e.target.value)})}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#727af9] focus:border-transparent"
                                        placeholder="Enter price per hour"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                                    <input
                                        type="url"
                                        required
                                        value={newCourt.image}
                                        onChange={(e) => setNewCourt({...newCourt, image: e.target.value})}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#727af9] focus:border-transparent"
                                        placeholder="Enter image URL"
                                    />
                                </div>
                                <div className="flex gap-4 mt-8">
                                    <button
                                        type="button"
                                        onClick={() => setShowAddModal(false)}
                                        className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 px-4 py-2 bg-[#727af9] text-white rounded-full hover:bg-[#5457E5] transition-colors"
                                    >
                                        Add Court
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Explore;