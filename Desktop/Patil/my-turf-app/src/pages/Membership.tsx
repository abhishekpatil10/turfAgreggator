const Membership = () => {
  // Mock membership data
  const membershipData = {
    status: "Active",
    type: "Premium",
    since: "March 2024",
    validUntil: "March 2025",
    benefits: [
      "Unlimited Court Bookings",
      "Priority Scheduling",
      "Free Equipment Rental",
      "Access to Premium Events",
    ],
    usage: {
      bookingsThisMonth: 8,
      savedAmount: "$120",
      pointsEarned: 240,
    },
  };

  // Add hasMembership state (you might want to get this from your actual auth/membership service)
  const hasMembership = false;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#727af9]/20 to-pink-100/20">
      <div className="max-w-7xl mx-auto px-6 py-8 pt-32">
        {hasMembership ? (
          // Existing membership card code
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            {/* Membership Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <h1 className="text-[32px] font-semibold text-[#1f1f1f] mb-2">
                  {membershipData.type} Membership
                </h1>
                <p className="text-gray-600">
                  Member since {membershipData.since}
                </p>
              </div>
              <div className="flex gap-3">
                <button className="px-6 py-2.5 bg-[#1f1f1f] text-white rounded-full hover:bg-black/80 transition-colors">
                  Upgrade Plan
                </button>
                <button className="px-6 py-2.5 border border-gray-200 text-gray-700 rounded-full hover:bg-gray-50 transition-colors">
                  Manage
                </button>
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex gap-6 mb-12">
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-2xl">
                <div className="p-2 bg-blue-100 rounded-xl">
                  <svg
                    className="w-5 h-5 text-[#727af9]"
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
                  <p className="text-lg font-bold text-[#1f1f1f]">
                    {membershipData.usage.bookingsThisMonth} Bookings
                  </p>
                  <p className="text-sm text-gray-500">This Month</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-2xl">
                <div className="p-2 bg-green-100 rounded-xl">
                  <svg
                    className="w-5 h-5 text-[#727af9]"
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
                  <p className="text-lg font-bold text-[#1f1f1f]">
                    {membershipData.usage.savedAmount}
                  </p>
                  <p className="text-sm text-gray-500">Saved</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-2xl">
                <div className="p-2 bg-purple-100 rounded-xl">
                  <svg
                    className="w-5 h-5 text-[#727af9]"
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
                  <p className="text-lg font-bold text-[#1f1f1f]">
                    {membershipData.usage.pointsEarned} Points
                  </p>
                  <p className="text-sm text-gray-500">Earned</p>
                </div>
              </div>
            </div>

            {/* Membership Details Grid */}
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h3 className="text-[#727af9] font-medium mb-4">
                  Membership Details
                </h3>
                <div className="space-y-4">
                  <p className="flex items-center gap-3">
                    <span className="text-gray-500">Status:</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      {membershipData.status}
                    </span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-gray-500">Valid Until:</span>
                    <span className="text-[#1f1f1f]">{membershipData.validUntil}</span>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-[#727af9] font-medium mb-4">
                  Membership Benefits
                </h3>
                <div className="space-y-3">
                  {membershipData.benefits.map((benefit, index) => (
                    <p key={index} className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-[#1f1f1f]">{benefit}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          // New membership plans section
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-[32px] font-semibold text-[#1f1f1f] mb-3">
                Choose Your Membership Plan
              </h1>
              <p className="text-gray-600">
                Select the perfect membership plan for your fitness journey
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Basic Plan */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gray-100 rounded-xl">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Basic</h3>
                </div>
                <p className="text-3xl font-bold mb-6">$29<span className="text-lg text-gray-500">/mo</span></p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>5 Court Bookings/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Basic Equipment Access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    <span className="text-gray-500">Priority Scheduling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    <span className="text-gray-500">Free Equipment Rental</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    <span className="text-gray-500">VIP Event Access</span>
                  </li>
                </ul>
                <button className="w-full px-6 py-2.5 border border-gray-200 text-gray-700 rounded-full hover:bg-gray-50 transition-colors">
                  Select Plan
                </button>
              </div>

              {/* Premium Plan */}
              <div className="bg-white rounded-3xl p-8 shadow-xl relative border-2 border-[#727af9]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#727af9] text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-[#727af9]/10 rounded-xl">
                    <svg className="w-6 h-6 text-[#727af9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Premium</h3>
                </div>
                <p className="text-3xl font-bold mb-6">$49<span className="text-lg text-gray-500">/mo</span></p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Unlimited Court Bookings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Full Equipment Access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Priority Scheduling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Free Equipment Rental</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    <span className="text-gray-500">VIP Event Access</span>
                  </li>
                </ul>
                <button className="w-full px-6 py-2.5 bg-[#727af9] text-white rounded-full hover:bg-[#5c64f8] transition-colors">
                  Select Plan
                </button>
              </div>

              {/* Pro Plan */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Pro</h3>
                </div>
                <p className="text-3xl font-bold mb-6">$79<span className="text-lg text-gray-500">/mo</span></p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Unlimited Court Bookings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Full Equipment Access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Priority Scheduling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Free Equipment Rental</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>VIP Event Access</span>
                  </li>
                </ul>
                <button className="w-full px-6 py-2.5 border border-gray-200 text-gray-700 rounded-full hover:bg-gray-50 transition-colors">
                  Select Plan
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Membership;