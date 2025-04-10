import React, { useState } from 'react';

const Home = () => {
    const [selectedTab, setSelectedTab] = useState('Precision');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const content = {
        Precision: {
            title: "18 Masterfully\nDesigned Holes",
            description: "Challenge yourself on our 18 meticulously crafted holes, each presenting a unique strategic challenge. From deceptive bunkers to undulating greens, every hole is designed to test your skills while providing an enjoyable experience for players of all levels. Experience the perfect blend of challenge and playability.",
            images: [
                "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070",
                "https://images.unsplash.com/photo-1592919505780-303950717480?q=80&w=2070",
                "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070"
            ],
            alt: "Golf course hole"
        },
        Practice: {
            title: "World-Class Practice Facilities",
            description: "Elevate your game with our comprehensive practice facilities. Our state-of-the-art driving range features automated ball dispensers and target greens, while our expansive putting green complex offers various slopes and speeds. Professional coaching areas and short game practice zones ensure you can refine every aspect of your game.",
            images: [
                "https://images.unsplash.com/photo-1619631428091-1eaa03c3bdf1?q=80&w=2070",
                "https://images.unsplash.com/photo-1592919505780-303950717480?q=80&w=2070",
                "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070"
            ],
            alt: "Practice facility"
        },
        Scenery: {
            title: "Breathtaking\nNatural Beauty",
            description: "Immerse yourself in our stunning natural landscapes, where rolling fairways weave through ancient woodlands and pristine lakes reflect the changing skies. Each season brings new beauty, from spring's vibrant blooms to autumn's golden hues. Our course is not just a golfing destination, but a sanctuary of natural wonder.",
            images: [
                "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070",
                "https://images.unsplash.com/photo-1619631428091-1eaa03c3bdf1?q=80&w=2070",
                "https://images.unsplash.com/photo-1592919505780-303950717480?q=80&w=2070"
            ],
            alt: "Scenic golf course view"
        },
        Comfort: {
            title: "Premium\nClubhouse Experience",
            description: "Indulge in our luxurious clubhouse, where modern elegance meets timeless comfort. Enjoy gourmet dining in our restaurant, relax in our spa-like locker rooms, or unwind in our lounge with panoramic course views. Our attentive staff ensures every moment of your visit is exceptional, from arrival to departure.",
            images: [
                "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070",
                "https://images.unsplash.com/photo-1619631428091-1eaa03c3bdf1?q=80&w=2070",
                "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070"
            ],
            alt: "Clubhouse interior"
        }
    };

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
                    <div className="absolute inset-0 bg-black/25"></div>
                </div>
                
                {/* Content Container */}
                <div className="relative z-10 h-full">
                    {/* Main Content Area */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-32 sm:pt-24 md:pt-32">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
                            {['Football', 'Cricket', 'Training', 'Events'].map((tag) => (
                                <span key={tag} className="px-4 sm:px-6 py-1.5 sm:py-2 bg-white/20 rounded-full text-white text-sm sm:text-base">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Heading and Description */}
                        <div className="max-w-3xl">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                                Play in Perfect<br />Surroundings
                            </h1>

                            <p className="text-white text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-70">
                                Book your play time at premium turfs with world-class facilities and stunning landscapes.
                            </p>

                            <button className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                                Book Now
                                <span className="text-lg sm:text-xl">→</span>
                            </button>
                        </div>

                        {/* Featured Card */}
                        <div className="mt-8 sm:mt-0 sm:absolute sm:top-32 sm:right-8 w-full sm:w-[480px] bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl text-white shadow-lg">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1619631428091-1eaa03c3bdf1?q=80&w=2070"
                                    alt="Turf view"
                                    className="w-full h-40 sm:h-48 object-cover rounded-xl mb-4 sm:mb-6"
                                />
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-semibold tracking-wide">
                                    FEATURED
                                </div>
                            </div>
                            
                            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Premium Turf Experience</h3>
                            <p className="font-medium mb-4 sm:mb-6 text-white/90 text-sm sm:text-base">Limited slots available — book early!</p>
                            
                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                <div className="bg-white/5 hover:bg-white/10 transition-colors p-3 sm:p-4 rounded-xl border border-white/5">
                                    <span className="flex items-center gap-2 sm:gap-3">
                                        <span className="text-xl sm:text-2xl">⚽</span>
                                        <div>
                                            <p className="font-semibold text-sm sm:text-base">Football</p>
                                            <p className="text-xs sm:text-sm text-white/70">5-a-side</p>
                                        </div>
                                    </span>
                                </div>
                                <div className="bg-white/5 hover:bg-white/10 transition-colors p-3 sm:p-4 rounded-xl border border-white/5">
                                    <span className="flex items-center gap-2 sm:gap-3">
                                        <span className="text-xl sm:text-2xl">🏏</span>
                                        <div>
                                            <p className="font-semibold text-sm sm:text-base">Cricket</p>
                                            <p className="text-xs sm:text-sm text-white/70">Net Practice</p>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="relative z-20 -top-5 bg-gray-100 rounded-2xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
                    {/* About Content */}
                    <div className="mb-12 md:mb-20">
                        <div className="text-gray-500 text-sm md:text-base mb-2 md:mb-4">About</div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-3 md:mb-4">
                            We offer a great golf <span className="text-gray-700">experience</span>
                        </h2>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-4xl leading-relaxed">
                            for all skill levels, with a top course, scenic views, and simple booking. Whether for fun or growth, a memorable golf experience.
                        </p>
                    </div>

                    {/* Images and Features Section */}
                    <div className="flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-8 mb-12 md:mb-20">
                        {/* Images Section */}
                        <div className="flex gap-4 md:gap-6 w-full md:flex-1">
                            <div className="w-1/3 md:w-1/4">
                                <img 
                                    src="https://images.unsplash.com/photo-1592919505780-303950717480?q=80&w=1000"
                                    alt="Golf putting close-up"
                                    className="w-full h-32 sm:h-36 md:h-40 object-cover rounded-2xl md:rounded-3xl"
                                />
                            </div>
                            <div className="w-1/3 md:w-1/4">
                                <img 
                                    src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=1000"
                                    alt="Golf instructor teaching"
                                    className="w-full h-32 sm:h-36 md:h-40 object-cover rounded-2xl md:rounded-3xl"
                                />
                            </div>
                        </div>

                        {/* Feature Icons */}
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 w-full">
                            <div className="flex items-center gap-2 sm:flex-col sm:gap-3 group hover:scale-105 transition-transform w-[45%] sm:w-auto">
                                <div className="bg-white p-2.5 sm:p-3 md:p-4 rounded-xl group-hover:bg-gray-100 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-gray-800 transition-colors">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <p className="text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors">Unwind</p>
                            </div>
                            <div className="flex items-center gap-2 sm:flex-col sm:gap-3 group hover:scale-105 transition-transform w-[45%] sm:w-auto">
                                <div className="bg-white p-2.5 sm:p-3 md:p-4 rounded-xl group-hover:bg-gray-100 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-gray-800 transition-colors">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085.711l-.108.054a9 9 0 00-6.208.682L3 4.5M3 15V4.5" />
                                    </svg>
                                </div>
                                <p className="text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors">Play</p>
                            </div>
                            <div className="flex items-center gap-2 sm:flex-col sm:gap-3 group hover:scale-105 transition-transform w-[45%] sm:w-auto">
                                <div className="bg-white p-2.5 sm:p-3 md:p-4 rounded-xl group-hover:bg-gray-100 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-gray-800 transition-colors">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    </svg>
                                </div>
                                <p className="text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors">Games</p>
                            </div>
                            <div className="flex items-center gap-2 sm:flex-col sm:gap-3 group hover:scale-105 transition-transform w-[45%] sm:w-auto">
                                <div className="bg-white p-2.5 sm:p-3 md:p-4 rounded-xl group-hover:bg-gray-100 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-gray-800 transition-colors">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <p className="text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors">Course</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Course Features Section */}
            <div className="max-w-7xl mx-auto relative z-20 -top-5 bg-white px-4 sm:px-6 md:px-8 py-12 md:py-20 rounded-2xl">
                {/* Navigation Pills */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-16">
                    {['Precision', 'Practice', 'Scenery', 'Comfort'].map((item) => (
                        <button
                            key={item}
                            className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors
                                ${item === selectedTab 
                                    ? 'bg-black text-white' 
                                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                            onClick={() => setSelectedTab(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-20">
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight font-medium mb-4 lg:mb-6">
                            {content[selectedTab].title}
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed">
                            {content[selectedTab].description}
                        </p>
                        
                        {/* Slide Indicators */}
                        <div className="flex gap-2 mt-6 sm:mt-8 lg:mt-12">
                            {content[selectedTab].images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all
                                        ${index === currentImageIndex 
                                            ? 'w-6 sm:w-8 bg-black' 
                                            : 'bg-gray-200'}`}
                                    onClick={() => setCurrentImageIndex(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Image Carousel */}
                    <div className="relative">
                        {/* Main Image */}
                        <div className="mb-4">
                            <img
                                src={content[selectedTab].images[currentImageIndex]}
                                alt={content[selectedTab].alt}
                                className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] aspect-square object-cover rounded-2xl lg:rounded-[32px]"
                            />
                        </div>
                        
                        {/* Navigation Row */}
                        <div className="flex items-center justify-end gap-3">
                            {/* Navigation Arrows */}
                            <button 
                                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-11 lg:h-11 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors"
                                onClick={() => setCurrentImageIndex((prev) => 
                                    (prev - 1 + content[selectedTab].images.length) % content[selectedTab].images.length
                                )}
                            >
                                <span className="sr-only">Previous slide</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <button 
                                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-11 lg:h-11 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors"
                                onClick={() => setCurrentImageIndex((prev) => 
                                    (prev + 1) % content[selectedTab].images.length
                                )}
                            >
                                <span className="sr-only">Next slide</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Booking Section */}
                <div className="mt-16 sm:mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 bg-gray-900 rounded-3xl overflow-hidden">
                    <div className="relative h-[250px] sm:h-[300px] md:h-auto">
                        {/* Reviews Badge */}
                        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/90 backdrop-blur rounded-full py-1.5 sm:py-2 px-3 sm:px-4 flex items-center gap-2">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-200 border-2 border-white"/>
                                ))}
                            </div>
                            <span className="text-sm sm:text-base font-medium">172+ Reviews</span>
                        </div>
                        
                        <img 
                            src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070"
                            alt="Golfers with umbrellas"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                    <div className="p-4 sm:p-6 md:p-12 flex flex-col justify-center">
                        <button className="self-start mb-4 sm:mb-6 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors text-sm sm:text-base">
                            Reserve spot
                        </button>
                        
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium text-white mb-3 sm:mb-4">
                            Effortless Booking<br />
                            for Your Next Game
                        </h2>
                        
                        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8">
                            Exceptional Experience
                        </p>
                        
                        <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">
                            Pick your date, choose your tee time, and enjoy the game.
                        </p>
                        
                        <div className="flex items-center gap-3">
                            <button className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base">
                                Book Now
                            </button>
                            <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white/40 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;