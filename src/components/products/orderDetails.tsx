import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderDetailRequest } from "../../redux/actions/cartActions";
import Layout from "../../reuseable/layout";

const OrderDetails: React.FC = () => {
    const { orderId } = useParams<{ orderId: string }>();
    const dispatch = useDispatch();
    const order = useSelector((state: any) => state.cart.orderDetail);
    const loading = useSelector((state: any) => state.cart.loadingOrderDetail);
    const error = useSelector((state: any) => state.cart.errorOrderDetail);

    useEffect(() => {
        if (orderId) {
            dispatch(getOrderDetailRequest(orderId));
        }
    }, [dispatch, orderId]);

    if (loading) {
        return (
            <Layout>
                <div className="text-center mt-10">Loading...</div>
            </Layout>
        );
    }

    if (error) {
        return (
            <Layout>
                <div className="text-center text-red-500 mt-10">{error}</div>
            </Layout>
        );
    }

    if (!order) {
        return (
            <Layout>
                <div className="text-center mt-10">No Order Found</div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="max-w-3xl mx-auto my-10 bg-white p-8 rounded shadow">
                <div className="flex flex-col items-center mb-6">
                    <div className="bg-green-100 rounded-full p-4 mb-2">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-green-700 mb-1">Thank you for your order!</h2>
                    <div className="text-gray-600 mb-2">Your order has been placed successfully.</div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Order Details</h3>
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
                    <h4 className="font-semibold mb-2">Shipping Information</h4>
                    <div>Name: {order.customer.name}</div>
                    <div>Mobile: {order.customer.number}</div>
                    <div>Email: {order.customer.email}</div>
                    <div>
                        Address: {typeof order.customer.address === "string"
                            ? order.customer.address
                            : `${order.customer.address.line1}, ${order.customer.address.city}, ${order.customer.address.state} - ${order.customer.address.zip}`}
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Products</h4>
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
                            {order.items.map((item: any) => (
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
                        <div>Subtotal: <span className="font-semibold">₹{order.items.reduce((sum: number, item: any) => sum + item.subtotal, 0)}</span></div>
                        <div className="font-bold text-lg">Total: <span>₹{order.total}</span></div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default OrderDetails;