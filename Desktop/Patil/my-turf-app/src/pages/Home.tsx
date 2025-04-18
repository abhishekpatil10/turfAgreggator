import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Gallery3D from '../components/Gallery3D';

// Add type for content tabs
type TabType = 'Courts' | 'Training' | 'Community' | 'Amenities';

const Home = () => {
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState<TabType>('Courts');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    // Initialize AOS
    useEffect(() => {
        // @ts-ignore
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out'
        });
    }, []);

    // Type the content object
    const content: Record<TabType, {
        title: string;
        description: string;
        images: string[];
        alt: string;
    }> = {
        Courts: {
            title: "6 Professional\nPickleball Courts",
            description: "Experience the thrill of pickleball on our 6 professionally designed courts. Each court features premium surfaces, proper line markings, and tournament-grade nets. Perfect for both casual players and competitive matches, our courts provide the ideal environment for this fast-growing sport.",
            images: [
                "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070",
                "https://images.unsplash.com/photo-1592919505780-303950717480?q=80&w=2070",
                "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070"
            ],
            alt: "Pickleball court view"
        },
        Training: {
            title: "Expert Pickleball Training",
            description: "Whether you're new to pickleball or looking to enhance your game, our certified instructors offer comprehensive training programs. Learn proper techniques, strategic gameplay, and scoring systems. Join our clinics, private lessons, or group sessions to improve your skills.",
            images: [
                "https://images.unsplash.com/photo-1619631428091-1eaa03c3bdf1?q=80&w=2070",
                "https://images.unsplash.com/photo-1592919505780-303950717480?q=80&w=2070",
                "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070"
            ],
            alt: "Pickleball training session"
        },
        Community: {
            title: "Vibrant Pickleball\nCommunity",
            description: "Join our thriving pickleball community where players of all levels come together. Participate in regular social mixers, tournaments, and leagues. Our welcoming atmosphere makes it easy to find playing partners and make lasting friendships through the love of pickleball.",
            images: [
                "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070",
                "https://images.unsplash.com/photo-1619631428091-1eaa03c3bdf1?q=80&w=2070",
                "https://images.unsplash.com/photo-1592919505780-303950717480?q=80&w=2070"
            ],
            alt: "Pickleball community event"
        },
        Amenities: {
            title: "Premium\nFacility Amenities",
            description: "Enjoy top-notch amenities designed for pickleball enthusiasts. Our facility features comfortable lounging areas, equipment rentals, a pro shop with the latest gear, and clean locker rooms. Stay refreshed with our water stations and cool down areas between matches.",
            images: [
                "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070",
                "https://images.unsplash.com/photo-1619631428091-1eaa03c3bdf1?q=80&w=2070",
                "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070"
            ],
            alt: "Facility amenities"
        }
    };

    // Update galleryItems type
    const galleryItems = [
        {
            type: 'image',
            url: 'https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?q=80&w=2070',
            title: 'Professional Pickleball Match'
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/fTvPYdKZqO0?si=PxcHCpjw6RUpB0RB',
            title: 'Pickleball Basic Rules'
        },
        {
            type: 'image',
            url: 'https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?q=80&w=2070',
            title: 'Court Dimensions'
        },
        {
            type: 'image',
            url: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2070',
            title: 'Scoring Rules'
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/zc1gBxurrCA',
            title: 'Advanced Techniques'
        }
    ];

    // Update the map functions with proper types
    const handleImageIndicatorClick = (index: number) => {
        setCurrentImageIndex(index);
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
                        <div className="flex flex-wrap gap-2 sm:gap-3 mb-4" data-aos="fade-down" data-aos-delay="200">
                            {['Pickleball', 'Training', 'Tournaments', 'Social'].map((tag) => (
                                <span key={tag} className="px-4 sm:px-6 py-1.5 sm:py-2 bg-white/20 rounded-full text-white text-sm sm:text-base">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Heading and Description */}
                        <div className="max-w-3xl" data-aos="fade-up" data-aos-delay="400">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                                Premium Pickleball<br />Experience
                            </h1>

                            <p className="text-white text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-70">
                                Book your court time at our state-of-the-art pickleball facility with professional courts and expert instruction.
                            </p>

                            <button className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                                Book Now
                                <span className="text-lg sm:text-xl">→</span>
                            </button>
                        </div>

                        {/* Featured Card */}
                        <div className="mt-8 sm:mt-0 sm:absolute sm:top-32 sm:right-8 w-full sm:w-[375px] bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl text-white shadow-lg"
                            data-aos="fade-left"
                            data-aos-delay="600">
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
                            
                            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Premium Pickleball Experience</h3>
                            <p className="font-medium mb-4 sm:mb-6 text-white/90 text-sm sm:text-base">Limited court times available — book early!</p>
                            
                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                <div className="bg-white/5 hover:bg-white/10 transition-colors p-3 sm:p-4 rounded-xl border border-white/5">
                                    <span className="flex items-center gap-2 sm:gap-3">
                                        <span className="text-xl sm:text-2xl">🏓</span>
                                        <div>
                                            <p className="font-semibold text-sm sm:text-base">Singles</p>
                                            <p className="text-xs sm:text-sm text-white/70">1v1 Play</p>
                                        </div>
                                    </span>
                                </div>
                                <div className="bg-white/5 hover:bg-white/10 transition-colors p-3 sm:p-4 rounded-xl border border-white/5">
                                    <span className="flex items-center gap-2 sm:gap-3">
                                        <span className="text-xl sm:text-2xl">👥</span>
                                        <div>
                                            <p className="font-semibold text-sm sm:text-base">Doubles</p>
                                            <p className="text-xs sm:text-sm text-white/70">2v2 Play</p>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="relative z-20 -top-5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24">
                    {/* About Content */}
                    <div className="relative">
                        {/* Background Elements */}
                        <div className="absolute -top-10 -left-4 w-72 h-72 bg-indigo-50 rounded-full filter blur-3xl opacity-50"></div>
                        <div className="absolute -bottom-10 -right-4 w-72 h-72 bg-purple-50 rounded-full filter blur-3xl opacity-50"></div>
                        
                        {/* Content Grid */}
                        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                            {/* Left Column - Text Content */}
                            <div className="space-y-8" data-aos="fade-right">
                                <div className="inline-block">
                                    <span className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                                        About Us
                                    </span>
                                </div>
                                
                                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                    Experience the 
                                    <span className="relative inline-block px-2">
                                        <span className="absolute inset-0 transform -skew-x-12 bg-indigo-100"></span>
                                        <span className="relative">thrill</span>
                                    </span>
                                    of Pickleball
                                </h2>
                                
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Join our vibrant community where passion meets play. Whether you're a beginner or a seasoned player, our world-class facilities and expert instruction create the perfect environment for your pickleball journey.
                                </p>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-indigo-600">6+</div>
                                        <div className="text-sm text-gray-500 mt-1">Pro Courts</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-indigo-600">500+</div>
                                        <div className="text-sm text-gray-500 mt-1">Members</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-indigo-600">50+</div>
                                        <div className="text-sm text-gray-500 mt-1">Weekly Events</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-indigo-600">12+</div>
                                        <div className="text-sm text-gray-500 mt-1">Trainers</div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Features Grid */}
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: "🎯",
                                        title: "Skill Development",
                                        description: "Structured training programs for all skill levels"
                                    },
                                    {
                                        icon: "🤝",
                                        title: "Community Events",
                                        description: "Regular tournaments and social mixers"
                                    },
                                    {
                                        icon: "🏆",
                                        title: "Pro Equipment",
                                        description: "Access to premium gear and facilities"
                                    },
                                    {
                                        icon: "📱",
                                        title: "Easy Booking",
                                        description: "Seamless court reservations"
                                    }
                                ].map((feature, index) => (
                                    <div 
                                        key={index}
                                        className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-indigo-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="relative">
                                            <span className="text-3xl mb-4 block">{feature.icon}</span>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="mt-16 text-center">
                            <button 
                                onClick={() => navigate('/explore')} 
                                className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-indigo-700 transition-colors inline-flex items-center gap-2"
                            >
                                Start Playing Today
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Course Features Section */}
            <div className="max-w-7xl mx-auto relative z-20 -top-5 bg-white px-4 sm:px-6 md:px-8 py-12 md:py-10 rounded-2xl">
                {/* Navigation Pills */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-16" data-aos="fade-down">
                    {['Courts', 'Training', 'Community', 'Amenities'].map((item) => (
                        <button
                            key={item}
                            className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors
                                ${item === selectedTab 
                                    ? 'bg-black text-white' 
                                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                            onClick={() => setSelectedTab(item as TabType)}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-20">
                    <div data-aos="fade-right">
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
                                    onClick={() => handleImageIndicatorClick(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Image Carousel */}
                    <div className="relative" data-aos="fade-left">
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
                                onClick={() => handleImageIndicatorClick((currentImageIndex - 1 + content[selectedTab].images.length) % content[selectedTab].images.length)}
                            >
                                <span className="sr-only">Previous slide</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <button 
                                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-11 lg:h-11 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors"
                                onClick={() => handleImageIndicatorClick((currentImageIndex + 1) % content[selectedTab].images.length)}
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

            {/* Rules & Regulations Section */}
            <div className="max-w-7xl mx-auto relative z-20 -top-5 bg-gray-100 px-4 sm:px-6 md:px-8 py-12 md:py-20 rounded-2xl mb-12">
                <div data-aos="fade-up">
                    <div className="text-gray-500 text-sm md:text-base mb-2 md:mb-4">Rules & Regulations</div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-8 md:mb-12">
                        Essential Pickleball <span className="text-gray-700">Guidelines</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Basic Rules */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <span className="text-2xl">📋</span> Basic Rules
                        </h3>
                        <ul className="space-y-3">
                            {[
                                "Games are played to 11 points, win by 2",
                                "Points can only be scored by the serving team",
                                "Serves must be made underhand",
                                "The ball must bounce once on each side before volleys are allowed (double-bounce rule)",
                                "Players cannot volley in the non-volley zone (kitchen)"
                            ].map((rule, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-600">
                                    <span className="text-indigo-500 mt-1">•</span>
                                    {rule}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Court Etiquette */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <span className="text-2xl">🤝</span> Court Etiquette
                        </h3>
                        <ul className="space-y-3">
                            {[
                                "Call 'out' balls promptly and loudly",
                                "Respect line calls made by other players",
                                "Wait for play to finish on adjacent courts before retrieving balls",
                                "Be ready to play when it's your turn",
                                "Show good sportsmanship at all times"
                            ].map((rule, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-600">
                                    <span className="text-indigo-500 mt-1">•</span>
                                    {rule}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Safety Guidelines */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm" data-aos="fade-up" data-aos-delay="300">
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <span className="text-2xl">⚡</span> Safety Guidelines
                        </h3>
                        <ul className="space-y-3">
                            {[
                                "Wear appropriate court shoes",
                                "Stay hydrated during play",
                                "Warm up before matches",
                                "Don't chase balls into other courts",
                                "Report any hazardous court conditions"
                            ].map((rule, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-600">
                                    <span className="text-indigo-500 mt-1">•</span>
                                    {rule}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Facility Rules */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm" data-aos="fade-up" data-aos-delay="400">
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <span className="text-2xl">🏢</span> Facility Rules
                        </h3>
                        <ul className="space-y-3">
                            {[
                                "Maximum court time: 1 hour during peak hours",
                                "Proper athletic attire required",
                                "Clean up after your matches",
                                "Register at front desk before play",
                                "Follow court reservation procedures"
                            ].map((rule, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-600">
                                    <span className="text-indigo-500 mt-1">•</span>
                                    {rule}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* 3D Gallery Section */}
            <div className="max-w-7xl mx-auto relative z-20 -top-5 bg-white px-4 sm:px-6 md:px-8 py-12 md:py-20 rounded-2xl">
                <div data-aos="fade-up">
                    <div className="text-gray-500 text-sm md:text-base mb-2 md:mb-4">Gallery</div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-8 md:mb-12">
                        Experience Pickleball in <span className="text-gray-700">3D</span>
                    </h2>
                </div>

                {/* Gallery Section */}
                <div className="relative h-[60vh] bg-gray-100 rounded-2xl overflow-hidden" data-aos="zoom-in">
                    <Gallery3D 
                        activeIndex={activeIndex} 
                        setActiveIndex={setActiveIndex}
                        galleryItems={galleryItems as any}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;