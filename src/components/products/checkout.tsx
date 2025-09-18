import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkoutRequest } from "../../redux/actions/cartActions";

const Checkout: React.FC = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cart?.cart || []);
    const user = useSelector((state: any) => state.auth.user);
    console.log("User in Checkout:", user);


    const [form, setForm] = useState({
        name: user?.name || "",
        number: user?.mobile || "",
        email: user?.email || "",
        address: "",
        paymentMethod: "",
    });

    const subtotal = cart.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);
    const tax = Math.round(subtotal * 0.05);
    const total = subtotal + tax;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRazorpayPayment = () => {
        const options = {
            key: "rzp_test_RIcIcCI1mh5XBa",
            amount: total * 100,
            currency: "INR",
            name: form.name,
            description: "Order Payment",
            handler: function (response: any) {
                alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
            },
            prefill: {
                name: form.name,
                email: form.email,
                contact: form.number,
            },
            theme: {
                color: "#3399cc",
            },
        };
        const rzp = new (window as any).Razorpay(options);
        rzp.open();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const payload = {
            userId: user?._id || user?.id,
            name: form.name,
            number: form.number,
            email: form.email,
            address: form.address,
            paymentMethod: form.paymentMethod,
        };
        if (form.paymentMethod === "Online") {
            handleRazorpayPayment();
        } else {
            dispatch(checkoutRequest(payload));
        }
    };

    return (
        <div className="max-w-5xl mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-8">           
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