const Tournaments = () => {
  // Mock tournament data
  const tournaments = [
    {
      id: 1,
      name: "Summer Football League",
      sport: "Football",
      startDate: "June 15, 2024",
      status: "Upcoming",
      participants: 12,
      prize: "$1000",
      location: "Central City Stadium",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=3270&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Cricket Championship",
      sport: "Cricket",
      startDate: "July 1, 2024",
      status: "Registration Open",
      participants: 8,
      prize: "$1500",
      location: "Sports Complex",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=3267&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Basketball 3v3 Tournament",
      sport: "Basketball",
      startDate: "August 5, 2024",
      status: "Registration Open",
      participants: 16,
      prize: "$2000",
      location: "Downtown Arena",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=3270&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Tennis Masters Cup",
      sport: "Tennis",
      startDate: "September 10, 2024",
      status: "Coming Soon",
      participants: 32,
      prize: "$3000",
      location: "Grand Tennis Club",
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=3270&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Volleyball Beach Championship",
      sport: "Volleyball",
      startDate: "July 20, 2024",
      status: "Registration Open",
      participants: 24,
      prize: "$1800",
      location: "Sunset Beach",
      image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=3270&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#727af9]/20 to-pink-100/20">
      <div className="max-w-7xl mx-auto px-6 py-8 pt-32">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-[32px] font-semibold text-[#1f1f1f]">Tournaments</h1>
            <p className="text-gray-600">Find and join exciting sports tournaments</p>
          </div>
          <button className="px-6 py-2.5 bg-[#1f1f1f] text-white rounded-full hover:bg-black/80 transition-colors">
            Create Tournament
          </button>
        </div>

        {/* Tournaments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tournaments.map((tournament) => (
            <div key={tournament.id} className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="flex">
                <div className="w-[280px] relative">
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