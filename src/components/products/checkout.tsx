import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkoutRequest } from "../../redux/actions/cartActions";
import { API_URL } from "../../config/webRoutes";

const Checkout: React.FC = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cart?.cart || []);
    const user = useSelector((state: any) => state.auth.user);
    console.log("user", user);
    const defaultAddress = user?.addresses?.find((a: any) => a.isDefault) || user?.addresses?.[0] || {
        line1: "",
        city: "",
        state: "",
        zip: "",
    };
    const orderSuccess = useSelector((state: any) => state.cart?.orderSuccess);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: user?.name || "",
        number: user?.mobile || "",
        email: user?.email || "",
        address: {
            line1: defaultAddress?.line1 || "",
            city: defaultAddress?.city || "",
            state: defaultAddress?.state || "",
            zip: defaultAddress?.zip || "",
        },
        paymentMethod: "COD",
    });

    const subtotal = cart.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);
    const tax = Math.round(subtotal * 0.05);
    const total = subtotal + tax;

    useEffect(() => {
        if (orderSuccess) {
            navigate("/order-details");
        }
    }, [orderSuccess, navigate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, paymentMethod: e.target.value });
    };

    const handleRazorpayPayment = async () => {
        const token = localStorage.getItem("token");
        const checkoutRes = await fetch(`${API_URL}orders/checkout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...(token && { Authorization: `Bearer ${token}` }),
            },
            body: JSON.stringify({
                userId: user?._id || user?.id,
                name: form.name,
                number: form.number,
                email: form.email,
                address: form.address,
                paymentMethod: "Online",
            }),
        });
        const checkoutData = await checkoutRes.json();
        if (!checkoutData.success) {
            alert(checkoutData.message || "Failed to create Razorpay order");
            return;
        }
        const options = {
            key: checkoutData.key,
            amount: checkoutData.amount,
            currency: checkoutData.currency,
            name: form.name,
            description: "Order Payment",
            order_id: checkoutData.razorpayOrderId,
            handler: async function (response: any) {
                const token = localStorage.getItem("token");
                const verifyRes = await fetch(`${API_URL}orders/verify-payment`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        ...(token && { Authorization: `Bearer ${token}` }),
                    },
                    body: JSON.stringify({
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_signature: response.razorpay_signature,
                        userId: user?._id || user?.id,
                        name: form.name,
                        number: form.number,
                        email: form.email,
                        address: form.address,
                        items: cart.map((item: any) => ({
                            productId: item.productId || item._id,
                            name: item.name,
                            price: item.price,
                            quantity: item.quantity,
                            subtotal: item.price * item.quantity,
                        })),
                        total,
                    }),
                });
                const verifyData = await verifyRes.json();
                if (verifyData.success) {
                    navigate("/order-details");
                } else {
                    alert("Payment verification failed!");
                }
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
            items: cart.map((item: any) => ({
                productId: item.productId || item._id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                subtotal: item.price * item.quantity,
            })),
            total,
        };
        if (form.paymentMethod === "Online") {
            handleRazorpayPayment();
        } else {
            dispatch(checkoutRequest(payload));
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-4">
            {/* Logo */}
            <div className="flex justify-center mb-4">
                <img
                    src="/logo192.png"
                    alt="Logo"
                    className="h-14 w-14 rounded-full shadow-lg"
                />
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Checkout Form */}
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow space-y-6">
                    <h2 className="text-2xl font-bold mb-4 text-blue-700">Shipping Information</h2>
                    <div>
                        <label className="block mb-1 font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded focus:outline-blue-400"
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
                            className="w-full border px-3 py-2 rounded focus:outline-blue-400"
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
                            className="w-full border px-3 py-2 rounded focus:outline-blue-400"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Address Line</label>
                        <input
                            type="text"
                            name="line1"
                            value={form.address.line1}
                            onChange={e => setForm({ ...form, address: { ...form.address, line1: e.target.value } })}
                            className="w-full border px-3 py-2 rounded focus:outline-blue-400"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <div>
                            <label className="block mb-1 font-medium">City</label>
                            <input
                                type="text"
                                name="city"
                                value={form.address.city}
                                onChange={e => setForm({ ...form, address: { ...form.address, city: e.target.value } })}
                                className="w-full border px-3 py-2 rounded focus:outline-blue-400"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">State</label>
                            <input
                                type="text"
                                name="state"
                                value={form.address.state}
                                onChange={e => setForm({ ...form, address: { ...form.address, state: e.target.value } })}
                                className="w-full border px-3 py-2 rounded focus:outline-blue-400"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">ZIP</label>
                            <input
                                type="text"
                                name="zip"
                                value={form.address.zip}
                                onChange={e => setForm({ ...form, address: { ...form.address, zip: e.target.value } })}
                                className="w-full border px-3 py-2 rounded focus:outline-blue-400"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Payment Method</label>
                        <div className="flex items-center gap-6 mt-2">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="COD"
                                    checked={form.paymentMethod === "COD"}
                                    onChange={handlePaymentMethodChange}
                                    className="accent-blue-600"
                                />
                                <span className="ml-2">Cash on Delivery</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="Online"
                                    checked={form.paymentMethod === "Online"}
                                    onChange={handlePaymentMethodChange}
                                    className="accent-blue-600"
                                />
                                <span className="ml-2">Online Payment</span>
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
                    >
                        Place Order
                    </button>
                </form>

                {/* Order Summary */}
                <div className="bg-white p-8 rounded-xl shadow">
                    <h2 className="text-2xl font-bold mb-4 text-blue-700">Order Summary</h2>
                    <div className="space-y-4">
                        {cart.map((item: any) => (
                            <div
                                key={item._id || item.id}
                                className="flex items-center justify-between border-b pb-3"
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={item.image || "/placeholder.png"}
                                        alt={item.name}
                                        className="w-14 h-14 object-cover rounded border"
                                    />
                                    <div>
                                        <div className="font-semibold">{item.name}</div>
                                        <div className="text-sm text-gray-600">Qty: {item.quantity}</div>
                                    </div>
                                </div>
                                <div className="font-bold text-green-700">
                                    ₹{item.price * item.quantity}
                                </div>
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
        </div>
    );
};

export default Checkout;