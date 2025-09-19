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
            <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-2xl shadow-lg border border-gray-200 receipt-font">
                <div className="flex flex-col items-center mb-6 text-center">
                    <div className="bg-green-100 rounded-full p-4 mb-2">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-bold text-green-700 mb-1">Thank you for your order!</h2>
                    <div className="text-gray-600 mb-2 text-sm">Your order has been placed successfully.</div>
                </div>
                <div className="flex flex-col items-center mb-6">
                    <span className="text-lg font-semibold tracking-widest text-gray-700">RECEIPT</span>
                    <span className="text-xs text-gray-400">Order ID: <span className="font-mono">{order._id}</span></span>
                    <span className="text-xs text-gray-400">Placed On: {new Date(order.createdAt).toLocaleString()}</span>
                </div>
                <div className="mb-6 border-b pb-4">
                    <div className="flex justify-between mb-1">
                        <span className="font-semibold text-gray-700">Customer</span>
                        <span className="text-gray-700">{order.customer.name}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                        <span className="font-semibold text-gray-700">Mobile</span>
                        <span className="text-gray-700">{order.customer.number}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                        <span className="font-semibold text-gray-700">Email</span>
                        <span className="text-gray-700">{order.customer.email}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold text-gray-700">Address</span>
                        <span className="text-gray-700 text-right">
                            {typeof order.customer.address === "string"
                                ? order.customer.address
                                : `${order.customer.address.line1}, ${order.customer.address.city}, ${order.customer.address.state} - ${order.customer.address.zip}`}
                        </span>
                    </div>
                </div>
                <div className="mb-6">
                    <table className="w-full text-sm border-separate border-spacing-y-1">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 text-left font-semibold text-gray-700">Product</th>
                                <th className="p-2 text-center font-semibold text-gray-700">Qty</th>
                                <th className="p-2 text-right font-semibold text-gray-700">Price</th>
                                <th className="p-2 text-right font-semibold text-gray-700">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.items.map((item: any) => (
                                <tr key={item.productId} className="border-b last:border-b-0">
                                    <td className="p-2">{item.name}</td>
                                    <td className="p-2 text-center">{item.quantity}</td>
                                    <td className="p-2 text-right">₹{item.price}</td>
                                    <td className="p-2 text-right">₹{item.subtotal}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="border-t pt-4">
                    <div className="flex justify-between mb-1">
                        <span className="font-semibold text-gray-700">Subtotal</span>
                        <span className="font-semibold text-gray-700">
                            ₹{order.items.reduce((sum: number, item: any) => sum + item.subtotal, 0)}
                        </span>
                    </div>
                    <div className="flex justify-between mb-1">
                        <span className="font-semibold text-gray-700">Total</span>
                        <span className="font-bold text-green-700 text-lg">₹{order.total}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                        <span className="font-semibold text-gray-700">Payment</span>
                        <span className="text-gray-700">{order.paymentMethod}</span>
                    </div>
                    {order.paymentId && (
                        <div className="flex justify-between mb-1">
                            <span className="font-semibold text-gray-700">Payment ID</span>
                            <span className="text-gray-700">{order.paymentId}</span>
                        </div>
                    )}
                    {order.razorpayOrderId && (
                        <div className="flex justify-between mb-1">
                            <span className="font-semibold text-gray-700">Razorpay Order ID</span>
                            <span className="text-gray-700">{order.razorpayOrderId}</span>
                        </div>
                    )}
                </div>
                <div className="mt-8 text-center text-xs text-gray-400 border-t pt-4">
                    Thank you for shopping with us!
                </div>
            </div>
            <style>
                {`
                .receipt-font {
                    font-family: 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', monospace;
                }
                `}
            </style>
        </Layout>
    );
};

export default OrderDetails;