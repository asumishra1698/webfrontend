import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../reuseable/layout";
import { getUserProfileRequest } from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const MEDIA_URL = "http://localhost:5000/uploads/profile/";

const CustomerDashboard: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state: any) => state.auth.user);

    useEffect(() => {
        dispatch(getUserProfileRequest());
    }, [dispatch]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        navigate("/");
    };
    interface Address {
        _id?: string;
        id?: string;
        line1: string;
        city: string;
        state: string;
        zip: string;
        country?: string;
        label?: string;
        isDefault?: boolean;
    }

    const addresses = user?.addresses || [];

    const orders = [
        {
            id: "ORD123",
            date: "2024-06-01",
            status: "Delivered",
            total: 1200,
        },
        {
            id: "ORD124",
            date: "2024-06-10",
            status: "Processing",
            total: 800,
        },
    ];

    return (
        <Layout>
            <div className="max-w-5xl mx-auto py-10 px-2 sm:px-4">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                    <h1 className="text-3xl font-extrabold text-gray-800">Customer Dashboard</h1>
                    <button
                        onClick={handleLogout}
                        className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-6 py-2 rounded-lg shadow transition-all"
                    >
                        Logout
                    </button>
                </div>

                {/* Profile Card */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-10 flex flex-col sm:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                        {user?.profilePic ? (
                            <img
                                src={`${MEDIA_URL}/${user.profilePic}`}
                                alt={user.name}
                                className="w-28 h-28 rounded-full object-cover border-4 border-blue-200 shadow"
                            />
                        ) : (
                            <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center text-4xl text-gray-400">
                                <span>{user?.name?.[0] || "U"}</span>
                            </div>
                        )}
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-700 mb-2">{user?.name || "N/A"}</h2>
                        <div className="flex flex-wrap gap-4 mb-2">
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                                {user?.role?.name || "Customer"}
                            </span>
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                                {user?.username || "N/A"}
                            </span>
                        </div>
                        <div className="text-gray-600 mb-1">
                            <strong>Email:</strong> {user?.email || "N/A"}
                        </div>
                        <div className="text-gray-600 mb-1">
                            <strong>Phone:</strong> {user?.mobile || "N/A"}
                        </div>
                    </div>
                </div>

                {/* Address & Order History */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Address History */}
                    <div className="bg-white rounded-xl shadow p-6">
                        <h2 className="text-xl font-semibold mb-4 text-blue-700 flex items-center gap-2">
                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            Address History
                        </h2>
                        {addresses.length === 0 ? (
                            <div className="text-gray-500">No addresses found.</div>
                        ) : (
                            <ul className="space-y-3">
                                {addresses.map((addr: Address) => (
                                    <li key={addr.id} className="bg-blue-50 rounded p-3 shadow-sm">
                                        <div className="font-medium">{addr.line1}</div>
                                        <div className="text-sm text-gray-600">
                                            {addr.city}, {addr.state} - {addr.zip}, {addr.country}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Order History */}
                    <div className="bg-white rounded-xl shadow p-6">
                        <h2 className="text-xl font-semibold mb-4 text-green-700 flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 8l-4 4-4-4" /></svg>
                            Order History
                        </h2>
                        {orders.length === 0 ? (
                            <div className="text-gray-500">No orders found.</div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-separate border-spacing-y-2">
                                    <thead>
                                        <tr>
                                            <th className="py-2 px-3 bg-gray-100 rounded-l">Order ID</th>
                                            <th className="py-2 px-3 bg-gray-100">Date</th>
                                            <th className="py-2 px-3 bg-gray-100">Status</th>
                                            <th className="py-2 px-3 bg-gray-100 rounded-r">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map(order => (
                                            <tr key={order.id} className="bg-green-50 rounded">
                                                <td className="py-2 px-3 font-semibold">{order.id}</td>
                                                <td className="py-2 px-3">{order.date}</td>
                                                <td className="py-2 px-3">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-bold
                                                        ${order.status === "Delivered"
                                                            ? "bg-green-200 text-green-800"
                                                            : "bg-yellow-200 text-yellow-800"
                                                        }`}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td className="py-2 px-3 font-semibold">₹{order.total}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CustomerDashboard;