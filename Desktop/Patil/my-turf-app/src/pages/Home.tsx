const Home = () => {
    return (
        <div className="bg-white min-h-screen relative">
            {/* Hero Section */}
            <div className="relative h-screen">
                {/* Image with overlay */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070"
                        alt="Football turf close-up"
                        className="w-full h-full object-cover"
                    />
                    {/* Black overlay */}
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>
                
                {/* Content Container */}
                <div className="relative z-10 h-full">
                    {/* Main Content Area */}
                    <div className="max-w-7xl mx-auto px-8 pt-32">
                        {/* Tags */}
                        <div className="flex gap-3 mb-4">
                            {['Football', 'Cricket', 'Training', 'Events'].map((tag) => (
                                <span key={tag} className="px-6 py-2 bg-white/20 rounded-full text-white">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Heading and Description */}
                        <div className="max-w-3xl">
                            <h1 className="text-8xl font-bold text-white mb-4 leading-tight">
                                Play in Perfect<br />Surroundings
                            </h1>

                            <p className="text-white text-xl mb-8 opacity-90">
                                Book your play time at premium turfs with world-class facilities and stunning landscapes.
                            </p>

                            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                                Book Now
                                <span className="text-xl">→</span>
                            </button>
                        </div>

                        {/* Featured Card */}
                        <div className="absolute top-32 right-8 w-[480px] bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-white shadow-lg">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1619631428091-1eaa03c3bdf1?q=80&w=2070"
                                    alt="Turf view"
                                    className="w-full h-48 object-cover rounded-xl mb-6"
                                />
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
                                    FEATURED
                                </div>
                            </div>
                            
                            <h3 className="text-2xl font-bold mb-3">Premium Turf Experience</h3>
                            <p className="font-medium mb-6 text-white/90">Limited slots available — book early!</p>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-xl border border-white/5">
                                    <span className="flex items-center gap-3">
                                        <span className="text-2xl">⚽</span>
                                        <div>
                                            <p className="font-semibold">Football</p>
                                            <p className="text-sm text-white/70">5-a-side</p>
                                        </div>
                                    </span>
                                </div>
                                <div className="bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-xl border border-white/5">
                                    <span className="flex items-center gap-3">
                                        <span className="text-2xl">🏏</span>
                                        <div>
                                            <p className="font-semibold">Cricket</p>
                                            <p className="text-sm text-white/70">Net Practice</p>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="relative z-20 bg-white">
                <div className="max-w-6xl mx-auto px-8 py-20 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        We offer a great <span className="text-gray-400">golf experience</span>
                    </h2>
                    <p className="text-2xl text-gray-500">
                        for all skill levels, with a top course, scenic<br />
                        views, and simple booking. Whether for fun<br />
                        or growth, a memorable golf experience.
                    </p>
                    
                    {/* Golf Images */}
                    <div className="flex gap-4 justify-center mt-12 mb-16">
                        <img 
                            src="https://images.unsplash.com/photo-1535132011086-b8818f016104?q=80&w=2000" 
                            alt="Golf putting" 
                            className="w-48 h-48 rounded-2xl object-cover"
                        />
                        <img 
                            src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2000" 
                            alt="Golf player" 
                            className="w-48 h-48 rounded-2xl object-cover"
                        />
                    </div>

                    {/* Feature Icons */}
                    <div className="flex justify-center gap-16">
                        <div className="text-center">
                            <span className="text-3xl">🍃</span>
                            <p className="mt-2">Unwind</p>
                        </div>
                        <div className="text-center">
                            <span className="text-3xl">⛳</span>
                            <p className="mt-2">Play</p>
                        </div>
                        <div className="text-center">
                            <span className="text-3xl">🏌️‍♂️</span>
                            <p className="mt-2">Games</p>
                        </div>
                        <div className="text-center">
                            <span className="text-3xl">🏌️</span>
                            <p className="mt-2">Course</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;