import React, { useState } from "react";
import { useSelector } from "react-redux";

const Checkout: React.FC = () => {
    const cart = useSelector((state: any) => state.cart?.cart || []);
    const user = useSelector((state: any) => state.auth.user);

    const [form, setForm] = useState({
        name: user?.name || "",
        email: user?.email || "",
        number: user?.number || "",
        address: "",
        paymentMethod: "COD",
    });

    const subtotal = cart.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);
    const tax = Math.round(subtotal * 0.05);
    const total = subtotal + tax;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // API call here
        const payload = {
            userId: user?._id || user?.id,
            ...form,
        };
        const res = await fetch("http://localhost:5000/api/orders/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (data.success) {
            alert("Order placed successfully!");
            // Optionally redirect or clear cart
        } else {
            alert("Order failed!");
        }
    };

    return (
        <div className="max-w-5xl mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Shipping Info */}
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow space-y-6">
                <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
                <div>
                    <label className="block mb-1 font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Mobile Number</label>
                    <input
                        type="tel"
                        name="number"
                        value={form.number}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        required
                        pattern="[0-9]{10}"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Address</label>
                    <textarea
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Payment Method</label>
                    <select
                        name="paymentMethod"
                        value={form.paymentMethod}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                    >
                        <option value="COD">Cash on Delivery</option>
                        <option value="Online">Online</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700"
                >
                    Place Order
                </button>
            </form>

            {/* Right: Order Summary */}
            <div className="bg-white p-8 rounded shadow">
                <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                <div className="space-y-4">
                    {cart.map((item: any) => (
                        <div key={item._id || item.id} className="flex justify-between items-center border-b pb-2">
                            <div>
                                <div className="font-semibold">{item.name}</div>
                                <div className="text-sm text-gray-600">Qty: {item.quantity}</div>
                            </div>
                            <div className="font-bold text-green-700">₹{item.price * item.quantity}</div>
                        </div>
                    ))}
                </div>
                <div className="mt-6 border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Tax (5%)</span>
                        <span>₹{tax}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>₹{total}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;