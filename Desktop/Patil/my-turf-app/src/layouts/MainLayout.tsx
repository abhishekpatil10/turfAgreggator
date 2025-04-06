import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    const location = useLocation();
    const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

    return (
        <div className="min-h-screen flex flex-col">
            {!isAuthPage && <Navbar />}
            <main className="flex-grow">
                <Outlet />
            </main>
            {!isAuthPage && <Footer />}
        </div>
    )
}   

export default MainLayout;