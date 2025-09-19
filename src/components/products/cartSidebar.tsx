import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartItemsRequest, removeCartItemRequest } from "../../redux/actions/cartActions";

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector((state: any) => state.cart?.cart || []);
    const loading = useSelector((state: any) => state.cart?.loading);
    const userId = useSelector((state: any) => state.auth.user?._id || state.auth.user?.id);

    useEffect(() => {
        if (isOpen && userId) {
            dispatch(getCartItemsRequest(userId));
        }
    }, [isOpen, userId, dispatch]);

    const getTotal = () =>
        cart.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);

    const handleRemove = (userId: string, productId: string) => {
        dispatch(removeCartItemRequest(userId, productId));
    };

    const handleCheckout = () => {
        if (cart.length > 0) {
            onClose();
            navigate("/checkout");
        }
    };

    return (
        <>
            <div
                className={`fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={onClose}
                aria-hidden={!isOpen}
            />
            {/* Sidebar */}
            <aside
                className={`fixed top-0 right-0 h-full max-w-full w-80 sm:w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                role="dialog"
                aria-modal="true"
                aria-label="Shopping cart"
            >
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center p-4 border-b">
                        <h2 className="text-xl font-bold">Your Cart</h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl" aria-label="Close cart">&times;</button>
                    </div>
                    <div className="p-4 flex-1 overflow-y-auto">
                        {loading ? (
                            <div className="text-center text-gray-500 mt-10">Loading cart...</div>
                        ) : cart.length === 0 ? (
                            <div className="text-gray-500 text-center mt-10">Your cart is empty.</div>
                        ) : (
                            cart.map((item: any) => (
                                <div key={item._id || item.id} className="flex items-center mb-4 border-b pb-2">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.name}
                                        className="w-16 h-16 object-cover rounded mr-3"
                                    />
                                    <div className="flex-1">
                                        <div className="font-semibold">{item.name}</div>
                                        <div className="text-sm text-gray-600">Qty: {item.quantity}</div>
                                        <div className="text-sm text-green-700 font-bold">₹{item.price}</div>
                                    </div>
                                    <button
                                        onClick={() => handleRemove(userId, item.productId)}
                                        className="text-red-500 hover:text-red-700 ml-2"
                                        title="Remove"
                                        aria-label={`Remove ${item.name} from cart`}
                                    >
                                        &#10005;
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="p-4 border-t bg-white sticky bottom-0 left-0 right-0">
                        <div className="flex justify-between font-bold text-lg mb-4">
                            <span>Total:</span>
                            <span>₹{getTotal()}</span>
                        </div>
                        <button
                            className="w-full bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-200"
                            disabled={cart.length === 0}
                            onClick={handleCheckout}
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default CartSidebar;