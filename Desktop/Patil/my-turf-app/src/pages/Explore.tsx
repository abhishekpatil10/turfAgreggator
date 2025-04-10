import { useNavigate } from 'react-router-dom';

const Explore = () => {
    const navigate = useNavigate();

    // This would come from your API in a real app
    const turfs = [
        {
            id: '1',
            name: 'Sports Arena',
            location: 'Mumbai',
            price: 1000,
            image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=2070'
        },
        {
            id: '2',
            name: 'Green Field Turf',
            location: 'Delhi',
            price: 1200,
            image: 'https://images.unsplash.com/photo-1536122985607-4fe00b283652?q=80&w=2069'
        },
        {
            id: '3',
            name: 'Victory Ground',
            location: 'Bangalore',
            price: 800,
            image: 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=2070'
        },
        {
            id: '4',
            name: 'Premier Pitch',
            location: 'Chennai',
            price: 950,
            image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2070'
        },
        {
            id: '5',
            name: 'Golden Goal Arena',
            location: 'Pune',
            price: 1100,
            image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2070'
        }
    ];

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

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#727af9]/20 to-pink-100/20">
            <div className="max-w-7xl mx-auto px-6 py-8 pt-32">
                <h1 className="text-3xl font-bold mb-8 text-[#1f1f1f]">
                    Explore <span className="text-[#727af9]">Pickleball Courts</span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pickleballCourts.map((court) => (
                        <div key={court.id} className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-[#727af9]/20 transition-all duration-300">
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
            </div>
        </div>
    );
};

export default Explore;