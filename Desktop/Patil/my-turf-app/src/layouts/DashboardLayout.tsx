import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const DashboardLayout = () => {
    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white">
                <div className="p-4">
                    <h2 className="text-xl font-bold">Dashboard</h2>
                </div>
                <nav className="mt-4">
                    {/* Add your sidebar navigation items here */}
                </nav>
            </div>
            
            {/* Main Content */}
            <div className="flex-1">
                <Navbar />
                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}   

export default DashboardLayout;