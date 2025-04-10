const Profile = () => {
  // Mock user data with additional fields
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "user",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    phone: "+1 234 567 8900",
    address: "123 Main St, City, Country",
    joinDate: "January 2023",
    bio: "Passionate sports enthusiast and regular turf player. Love organizing matches and meeting new people.",
    preferences: {
      favoriteSports: ["Football", "Cricket"],
      preferredTiming: "Evening",
      preferredLocation: "Central City",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#727af9]/20 to-pink-100/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pt-24 sm:pt-32">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl">
          {/* Profile Image and Info */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 mb-4">
            <div className="rounded-[24px] sm:rounded-[32px] overflow-hidden w-[120px] h-[120px] sm:w-[180px] sm:h-[180px]">
              <img
                src={user.profileImage}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-0">
                <div className="text-center sm:text-left">
                  <h1 className="text-2xl sm:text-[32px] font-semibold text-[#1f1f1f] mb-2">
                    {user.name}
                  </h1>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">{user.bio}</p>
                  <p className="text-gray-500 text-sm sm:text-base">
                    based in {user.address.split(",").pop()}
                  </p>

                  {/* Stats Row */}
                  <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-6 mb-4 mt-4">
                    <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 rounded-xl sm:rounded-2xl">
                      <div className="p-1.5 sm:p-2 bg-blue-100 rounded-lg sm:rounded-xl">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-[#727af9]"
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
                      </div>
                      <div>
                        <p className="text-base sm:text-lg font-bold text-[#1f1f1f]">
                          26 Bookings
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 rounded-xl sm:rounded-2xl">
                      <div className="p-1.5 sm:p-2 bg-purple-100 rounded-lg sm:rounded-xl">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-[#727af9]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-base sm:text-lg font-bold text-[#1f1f1f]">
                          12 Reviews
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 rounded-xl sm:rounded-2xl">
                      <div className="p-1.5 sm:p-2 bg-green-100 rounded-lg sm:rounded-xl">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-[#727af9]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-base sm:text-lg font-bold text-[#1f1f1f]">
                          548 Points
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center sm:justify-end gap-2 sm:gap-3">
                  <button className="px-4 sm:px-6 py-2 sm:py-2.5 bg-[#1f1f1f] text-white rounded-full hover:bg-black/80 transition-colors text-sm sm:text-base">
                    Edit Profile
                  </button>
                  <button className="px-4 sm:px-6 py-2 sm:py-2.5 border border-gray-200 text-gray-700 rounded-full hover:bg-gray-50 transition-colors text-sm sm:text-base">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-8">
            <div>
              <h3 className="text-[#727af9] font-medium mb-4 text-base sm:text-lg">
                Contact Information
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="text-gray-500 text-sm sm:text-base">Email:</span>
                  <span className="text-[#1f1f1f] text-sm sm:text-base">{user.email}</span>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="text-gray-500 text-sm sm:text-base">Phone:</span>
                  <span className="text-[#1f1f1f] text-sm sm:text-base">{user.phone}</span>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="text-gray-500 text-sm sm:text-base">Location:</span>
                  <span className="text-[#1f1f1f] text-sm sm:text-base">{user.address}</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-[#727af9] font-medium mb-4 text-base sm:text-lg">
                Sports Preferences
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="text-gray-500 text-sm sm:text-base">Favorite Sports:</span>
                  <span className="text-[#1f1f1f] text-sm sm:text-base">
                    {user.preferences.favoriteSports.join(", ")}
                  </span>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="text-gray-500 text-sm sm:text-base">Preferred Time:</span>
                  <span className="text-[#1f1f1f] text-sm sm:text-base">
                    {user.preferences.preferredTiming}
                  </span>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="text-gray-500 text-sm sm:text-base">Location:</span>
                  <span className="text-[#1f1f1f] text-sm sm:text-base">
                    {user.preferences.preferredLocation}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
