import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Tournaments = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // @ts-expect-error - AOS is imported via CDN and types are not available
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  // Mock tournament data
  const tournaments = [
    {
      id: 1,
      name: "Summer Pickleball Classic",
      sport: "Pickleball",
      startDate: "June 15, 2024",
      status: "Upcoming",
      participants: 12,
      prize: "$1000",
      location: "Central City Courts",
      image: "https://images.unsplash.com/photo-1534158914592-062992fbe900?q=80&w=3784&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Pickleball Pro Championship",
      sport: "Pickleball",
      startDate: "July 1, 2024",
      status: "Registration Open",
      participants: 8,
      prize: "$1500",
      location: "Sports Complex",
      image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=3870&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Pickleball Doubles Tournament",
      sport: "Pickleball",
      startDate: "August 5, 2024",
      status: "Registration Open",
      participants: 16,
      prize: "$2000",
      location: "Downtown Courts",
      image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=3870&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Pickleball Masters Cup",
      sport: "Pickleball",
      startDate: "September 10, 2024",
      status: "Coming Soon",
      participants: 32,
      prize: "$3000",
      location: "Grand Pickleball Club",
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=3270&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Beach Pickleball Championship",
      sport: "Pickleball",
      startDate: "July 20, 2024",
      status: "Registration Open",
      participants: 24,
      prize: "$1800",
      location: "Sunset Beach Courts",
      image: "https://images.unsplash.com/photo-1526307616774-60d0098f7642?q=80&w=3024&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#727af9]/20 to-pink-100/20">
      <div className="max-w-7xl mx-auto px-6 py-8 pt-32">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8" data-aos="fade-down">
          <div>
            <h1 className="text-[32px] font-semibold text-[#1f1f1f]">Tournaments</h1>
            <p className="text-gray-600">Find and join exciting sports tournaments</p>
          </div>
          <button 
            onClick={() => navigate('/tournaments/create')}
            className="px-6 py-2.5 bg-[#1f1f1f] text-white rounded-full hover:bg-black/80 transition-colors"
            data-aos="fade-left"
          >
            Create Tournament
          </button>
        </div>

        {/* Tournaments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((tournament, index) => (
            <div 
              key={tournament.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col">
                <div className="w-full h-[200px] relative">
                  <img
                    src={tournament.image}
                    alt={tournament.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow p-6">
                  <div className="flex justify-between items-start gap-4">
                    <h2 className="text-xl font-semibold text-[#1f1f1f]">{tournament.name}</h2>
                    {tournament.status === "Registration Open" ? (
                      <span className="whitespace-nowrap px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {tournament.status}
                      </span>
                    ) : (
                      <span className="whitespace-nowrap px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        {tournament.status}
                      </span>
                    )}
                  </div>
                  <div className="mt-4 space-y-2.5">
                    <p className="flex items-center gap-2 text-gray-600">
                      <span className="w-5 text-center">🏆</span>
                      <span>Prize Pool: {tournament.prize}</span>
                    </p>
                    <p className="flex items-center gap-2 text-gray-600">
                      <span className="w-5 text-center">📅</span>
                      <span>Starts: {tournament.startDate}</span>
                    </p>
                    <p className="flex items-center gap-2 text-gray-600">
                      <span className="w-5 text-center">👥</span>
                      <span>{tournament.participants} Teams Registered</span>
                    </p>
                    <p className="flex items-center gap-2 text-gray-600">
                      <span className="w-5 text-center">📍</span>
                      <span>{tournament.location}</span>
                    </p>
                  </div>
                  <button className="mt-6 w-full px-6 py-2.5 bg-[#727af9] text-white rounded-full hover:bg-[#5c64d8] transition-colors">
                    View Details
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

export default Tournaments;