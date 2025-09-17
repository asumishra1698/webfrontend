import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import Layout from "../../reuseable/layout";
import {  } from "../../redux/actions/authActions";
const CustomerLogin: React.FC = () => {
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error, token } = useSelector((state: any) => state.auth);

    useEffect(() => {
        if (token) {
            navigate("/customer/dashboard");
        }
    }, [token, navigate]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(loginRequest({ mobile, password }));
    };

    return (
        <Layout>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded shadow-md w-full max-w-sm"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center">Customer Login</h2>
                    {error && <div className="text-red-500 mb-4">{error}</div>}
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
        </Layout>
    );
};

export default CustomerLogin;