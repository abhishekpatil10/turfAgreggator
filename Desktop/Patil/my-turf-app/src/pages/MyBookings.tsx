const MyBookings = () => {
  const mockBookings = [
    {
      id: 1,
      title: "Pickleball Court 1",
      date: "2024-03-20 14:00",
      description: "Court 1 - 1 hour session",
      image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=300",
    },
    {
      id: 2,
      title: "Pickleball Court 2",
      date: "2024-03-22 10:00",
      description: "Court 2 - 45 minute session",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=300",
    },
    {
      id: 3,
      title: "Pickleball Court 3",
      date: "2024-03-23 16:00",
      description: "Court 3 - 2 hours",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300",
    },
    {
      id: 4,
      title: "Basketball Court",
      date: "2024-03-24 15:30",
      description: "Full court - 2 hour session",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300",
    },
    {
      id: 5,
      title: "Yoga Class",
      date: "2024-03-25 09:00",
      description: "Beginner friendly - 1 hour class",
      image:
        "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=300",
    },
    {
      id: 6,
      title: "Squash Court",
      date: "2024-03-26 18:00",
      description: "Court 2 - 45 minute session",
      image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=300",
    },
    {
      id: 7,
      title: "Badminton Court",
      date: "2024-03-27 12:00",
      description: "Court 5 - 1 hour session",
      image:
        "https://images.unsplash.com/photo-1613918431703-aa50889e3be9?w=300",
    },
    {
      id: 8,
      title: "Cycling Studio",
      date: "2024-03-28 07:30",
      description: "Spin class - 45 minute session",
      image: "https://images.unsplash.com/photo-1561214078-f3247647fc5e?w=300",
    },
    {
      id: 9,
      title: "Boxing Ring",
      date: "2024-03-29 17:00",
      description: "Training session - 1 hour",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=300",
    },
    {
      id: 10,
      title: "Personal Training",
      date: "2024-03-30 11:00",
      description: "One-on-one session - 1 hour",
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#727af9]/20 to-pink-100/20">
      <div className="max-w-7xl mx-auto px-6 py-8 pt-32">
        <h1 className="text-2xl font-bold mb-6">My Bookings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockBookings
            .filter(booking => booking.title.toLowerCase().includes('pickleball'))
            .map((booking) => (
            <div
              key={booking.id}
              className="group border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="relative">
                <img
                  src={booking.image}
                  alt={booking.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 right-4 bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                  Active
                </span>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {booking.title}
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-sm font-medium">{booking.date}</p>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-sm">{booking.description}</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-2">
                  <button
                    className="w-full px-4 py-2 text-sm font-medium rounded-lg border border-red-200 
                        text-red-600 hover:bg-red-50 hover:border-red-300 transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    className="w-full px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 
                        text-white hover:bg-blue-700 shadow-sm hover:shadow transition-all duration-200"
                  >
                    Reschedule
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

export default MyBookings;
