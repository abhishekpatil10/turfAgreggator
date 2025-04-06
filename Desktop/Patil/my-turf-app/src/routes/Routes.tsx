import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Booking from "../pages/Booking";
import MyBookings from "../pages/MyBookings";
import Profile from "../pages/Profile";
import TurfOwnerDashboard from "../pages/TurfOwnerDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Membership from "../pages/Membership";
import Tournaments from "../pages/tournaments";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Turf Owner Dashboard */}
        <Route element={<DashboardLayout />}>
          <Route path="/turf-owner/dashboard" element={<TurfOwnerDashboard />} />
        </Route>

        {/* Admin Dashboard */}
        <Route element={<DashboardLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
