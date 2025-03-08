import React, { useContext, useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContent } from "../content/AppContent";
import axios from "axios";
import { toast } from "react-toastify";
import { FiMenu, FiX, FiUser, FiLogOut, FiCheckCircle } from "react-icons/fi";

export default function Navbar() {
    const { userData, backendUrl, setUserData } = useContext(AppContent);
    const navigate = useNavigate();
    
    const [showDropdown, setShowDropdown] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    
    const dropdownRef = useRef(null);

    const handleLogout = async () => {
        if (isLoggingOut) return;

        setIsLoggingOut(true);
        try {
            await axios.post(`${backendUrl}/api/auth/logout`, {}, { withCredentials: true });
            setUserData(null);
            toast.success("Logged out successfully");
            navigate("/");
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to log out. Try again!");
        } finally {
            setIsLoggingOut(false);
        }
    };

    const sendVerificationOtp = async () => {
        try {
            const { data } = await axios.post(`${backendUrl}/api/auth/send-verify-otp`, {}, { withCredentials: true });
            if (data.success) {
                navigate("/email-verify");
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to send OTP");
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="flex items-center justify-between h-20 w-full px-6 md:px-10 sticky top-0 bg-gradient-to-r from-green-500 to-green-700 shadow-lg z-50">
            {/* Logo */}
            <div
                className="text-white font-extrabold text-3xl cursor-pointer"
                onClick={() => navigate("/")}
            >
                AgriꞰart🌿
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-6">
                {["Home", "About", "Services", "Contact", "Blog"].map((item) => (
                    <NavLink
                        key={item}
                        to={`/${item.toLowerCase()}`}
                        className={({ isActive }) =>
                            `hover:text-yellow-300 transition-all text-lg px-4 py-2 rounded-lg ${
                                isActive ? "text-yellow-400 font-bold" : "text-white"
                            }`
                        }
                    >
                        {item}
                    </NavLink>
                ))}
            </div>

            {/* Auth Section */}
            <div className="relative flex items-center gap-4">
                {userData ? (
                    <div ref={dropdownRef} className="relative">
                        <button
                            className="bg-white text-green-600 text-lg font-semibold h-10 w-10 flex items-center justify-center rounded-full shadow-lg hover:scale-105 transition-transform"
                            onClick={() => setShowDropdown((prev) => !prev)}
                            aria-label="User menu"
                        >
                            {userData.name ? userData.name[0].toUpperCase() : <FiUser />}
                        </button>
                        {showDropdown && (
                            <div className="absolute top-12 right-0 bg-white shadow-xl rounded-lg py-2 w-44 text-black z-10 animate-fade-in">
                                <ul className="text-sm">
                                    {!userData?.isAccountVerified && (
                                        <li
                                            onClick={sendVerificationOtp}
                                            className="px-4 py-2 flex items-center gap-2 text-green-600 font-semibold hover:bg-gray-200 cursor-pointer"
                                        >
                                            <FiCheckCircle /> Verify Account
                                        </li>
                                    )}
                                    <li
                                        onClick={handleLogout}
                                        className="px-4 py-2 flex items-center gap-2 text-red-500 hover:bg-gray-200 cursor-pointer"
                                    >
                                        <FiLogOut /> Logout
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                ) : (
                    <NavLink
                        to="/login"
                        className="bg-yellow-400 text-green-800 px-5 py-2 rounded-full shadow-md hover:bg-yellow-300 transition-all"
                    >
                        Log In
                    </NavLink>
                )}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-white text-3xl"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label="Toggle mobile menu"
            >
                {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Mobile Navigation */}
            <div
                className={`absolute top-20 left-0 w-full bg-green-700 text-white shadow-md flex flex-col items-center py-4 space-y-4 transition-all transform ${
                    mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
                } md:hidden`}
            >
                {["Home", "About", "Services", "Contact", "Blog"].map((item) => (
                    <NavLink
                        key={item}
                        to={`/${item.toLowerCase()}`}
                        className="text-lg hover:text-yellow-300 transition-all"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {item}
                    </NavLink>
                ))}
                {userData ? (
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-red-400 transition-all"
                    >
                        Logout
                    </button>
                ) : (
                    <NavLink
                        to="/login"
                        className="bg-yellow-400 text-green-800 px-6 py-2 rounded-full shadow-md hover:bg-yellow-300 transition-all"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Log In
                    </NavLink>
                )}
            </div>
        </nav>
    );
}
