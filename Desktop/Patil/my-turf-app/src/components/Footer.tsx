import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full z-40">
            <div className="max-w-7xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg">
                <div className="py-4 px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-center md:text-left">
                            <Link to="/" className="flex items-center justify-center md:justify-start">
                                <img src="/vite.svg" className="h-8 w-8" alt="Logo" />
                                <span className="ml-2 text-xl font-bold text-black">
                                    TurfBook
                                </span>
                            </Link>
                            <p className="mt-2 text-black/70 text-sm">
                                &copy; 2024 Turf Booking. All rights reserved.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                            <div className="flex items-center gap-4 sm:gap-8">
                                <Link to="/terms" className="text-black/90 hover:text-black transition-colors">
                                    Terms
                                </Link>
                                <Link to="/privacy" className="text-black/90 hover:text-black transition-colors">
                                    Privacy
                                </Link>
                                <Link to="/contact" className="text-black/90 hover:text-black transition-colors">
                                    Contact
                                </Link>
                            </div>
                            <Link to="/help">
                                <button className="bg-white text-black px-6 py-2.5 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium">
                                    Help Center
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
