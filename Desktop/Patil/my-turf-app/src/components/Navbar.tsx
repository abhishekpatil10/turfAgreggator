import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname.startsWith(path);

  const getActiveClass = (path: string) => {
    return isActive(path)
      ? "text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#6366F1] after:to-[#8B5CF6] relative pb-1"
      : "text-black/90 hover:text-black transition-colors";
  };

  return (
    <nav className="fixed w-full top-4 left-0 right-0 z-50 px-4">
      <div className="max-w-7xl mx-auto rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg">
        <div className="py-4 px-6">
          <div className="flex justify-between items-center">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <img src="/vite.svg" className="h-8 w-8" alt="Logo" />
                <span className="ml-2 text-xl font-bold text-black">
                  TurfBook
                </span>
              </Link>
            </div>

            <div className="flex items-center space-x-8">
              <Link to="/explore" className={getActiveClass("/explore")}>
                Browse Turfs
              </Link>
              <Link
                to="/tournaments"
                className={getActiveClass("/tournaments")}
              >
                Tournaments
              </Link>
              <Link to="/membership" className={getActiveClass("/membership")}>
                Membership
              </Link>
              <Link
                to="/my-bookings"
                className={getActiveClass("/my-bookings")}
              >
                My Bookings
              </Link>
              <Link to="/profile" className={getActiveClass("/profile")}>
                Profile
              </Link>
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <button className="bg-white text-black px-6 py-2.5 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
