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

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-sm relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                    aria-label="Close"
                >
                    &times;
                </button>
                <h2 className="text-2xl font-bold mb-6 text-center">Customer Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1">Mobile Number</label>
                        <input
                            type="tel"
                            className="w-full border px-3 py-2 rounded"
                            value={mobile}
                            onChange={e => setMobile(e.target.value)}
                            required
                            autoFocus
                            pattern="[0-9]{10}"
                            placeholder="Enter your mobile number"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full border px-3 py-2 rounded"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CustomerLogin;