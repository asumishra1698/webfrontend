import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../redux/actions/authActions";
interface CustomerLoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CustomerLogin: React.FC<CustomerLoginModalProps> = ({ isOpen, onClose }) => {
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { loading } = useSelector((state: any) => state.auth);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(loginRequest({ mobile, password }));
    };

    const handleForgotPassword = () => {
        alert("Forgot password functionality coming soon!");
    };

    const handleRegister = () => {
        alert("Register functionality coming soon!");
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm relative animate-fade-in"
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl transition"
                    aria-label="Close"
                >
                    &times;
                </button>
                <div className="flex flex-col items-center mb-6">
                    <img
                        src="https://gonardweb.com/wp-content/uploads/2025/08/fav.png"
                        alt="Logo"
                        className="h-14 w-14 rounded-full shadow bg-red-50 p-2 mb-2"
                    />
                    <h2 className="text-2xl font-bold text-blue-700">Customer Login</h2>
                    <p className="text-gray-500 text-sm mt-1">Welcome back! Please login to continue.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Mobile Number</label>
                        <input
                            type="tel"
                            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-blue-400 transition"
                            value={mobile}
                            onChange={e => setMobile(e.target.value)}
                            required
                            autoFocus
                            pattern="[0-9]{10}"
                            placeholder="Enter your mobile number"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-blue-400 transition"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-2 rounded-lg font-semibold transition"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
                <div className="flex justify-between mt-5 text-sm">
                    <button
                        type="button"
                        className="text-blue-600 hover:underline transition"
                        onClick={handleForgotPassword}
                    >
                        Forgot password?
                    </button>
                    <button
                        type="button"
                        className="text-blue-600 hover:underline transition"
                        onClick={handleRegister}
                    >
                        Register now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomerLogin;