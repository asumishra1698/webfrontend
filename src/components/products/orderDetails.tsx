import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface OrderItem {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    subtotal: number;
}

interface Order {
    _id: string;
    userId: string;
    customer: {
        name: string;
        number: string;
        email: string;
        address: string;
    };
    items: OrderItem[];
    total: number;
    paymentMethod: string;
    paymentId?: string;
    razorpayOrderId?: string;
    createdAt: string;
    status?: string;
}

const OrderDetails: React.FC = () => {
    const { orderId } = useParams<{ orderId: string }>();
    const [order, setOrder] = useState<Order | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchOrder = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch(`http://localhost:5000/api/orders/${orderId}`);
                const data = await res.json();
                if (data.success && data.order) {
                    setOrder(data.order);
                } else {
                    setError(data.message || "Order not found");
                }
            } catch (err) {
                setError("Failed to fetch order details");
            }
            setLoading(false);
        };
        if (orderId) fetchOrder();
    }, [orderId]);

    if (loading) return <div className="text-center mt-10">Loading...</div>;
    if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;
    if (!order) return null;

    return (
        <div className="max-w-3xl mx-auto my-10 bg-white p-8 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Order Details</h2>
            <div className="mb-6">
                <div><span className="font-semibold">Order ID:</span> {order._id}</div>
                <div><span className="font-semibold">Placed On:</span> {new Date(order.createdAt).toLocaleString()}</div>
                <div><span className="font-semibold">Status:</span> {order.status || "Processing"}</div>
                <div><span className="font-semibold">Payment Method:</span> {order.paymentMethod}</div>
                {order.paymentId && (
                    <div><span className="font-semibold">Payment ID:</span> {order.paymentId}</div>
                )}
                {order.razorpayOrderId && (
                    <div><span className="font-semibold">Razorpay Order ID:</span> {order.razorpayOrderId}</div>
                )}
            </div>
            <div className="mb-6">
                <h3 className="font-semibold mb-2">Shipping Information</h3>
                <div>Name: {order.customer.name}</div>
                <div>Mobile: {order.customer.number}</div>
                <div>Email: {order.customer.email}</div>
                <div>Address: {order.customer.address}</div>
            </div>
            <div>
                <h3 className="font-semibold mb-2">Products</h3>
                <table className="w-full border">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2 border">Product</th>
                            <th className="p-2 border">Price</th>
                            <th className="p-2 border">Qty</th>
                            <th className="p-2 border">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.items.map((item) => (
                            <tr key={item.productId}>
                                <td className="p-2 border">{item.name}</td>
                                <td className="p-2 border">₹{item.price}</td>
                                <td className="p-2 border">{item.quantity}</td>
                                <td className="p-2 border">₹{item.subtotal}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-4 flex flex-col items-end space-y-1">
                    <div>Subtotal: <span className="font-semibold">₹{order.items.reduce((sum, item) => sum + item.subtotal, 0)}</span></div>
                    <div className="font-bold text-lg">Total: <span>₹{order.total}</span></div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;