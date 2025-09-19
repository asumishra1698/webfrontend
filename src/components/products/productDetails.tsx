import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../../reuseable/layout";
import { getProductByIdRequest } from "../../redux/actions/productActions";
import { addToCartRequest } from "../../redux/actions/cartActions";
import { getUserProfileRequest } from "../../redux/actions/authActions";
import { MEDIA_URL } from "../../config/webRoutes";

const ProductDetails: React.FC<{ onAddToCart?: () => void }> = ({ onAddToCart }) => {
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();
    const { product, loading, error } = useSelector((state: any) => state.product);
    const userId = useSelector((state: any) => state.auth.user?.id);


    useEffect(() => {
        if (id) {
            dispatch(getProductByIdRequest(id));
            dispatch(getUserProfileRequest());
        }
    }, [dispatch, id]);

    const handleAddToCart = () => {
        if (!product || !userId) return;
        dispatch(addToCartRequest(userId, product._id || product.id, 1));
        if (onAddToCart) onAddToCart();
    };

    if (loading || error || !product) {
        return (
            <Layout>
                <div className="max-w-4xl mx-auto p-8 mt-8 text-center text-lg">
                    {loading && "Loading..."}
                    {error && <span className="text-red-600">{error}</span>}
                    {!loading && !error && !product && (
                        <span className="text-gray-500">Product not found.</span>
                    )}
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Product Images */}
                    <div className="md:w-1/2 flex flex-col items-center">
                        <img
                            src={`${MEDIA_URL}products/${product.thumbnail}`}
                            alt={product.name}
                            className="w-full h-auto object-contain mb-4"
                        />
                        <div className="flex gap-2">
                            {product.images?.map((img: string, idx: number) => (
                                <img
                                    key={idx}
                                    src={`${MEDIA_URL}products/${img}`}
                                    alt={`Product ${idx + 1}`}
                                    className="w-16 h-16 object-cover rounded border"
                                />
                            ))}
                        </div>
                    </div>
                    {/* Product Details */}
                    <div className="md:w-1/2">
                        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                        <div className="flex items-center gap-4 mb-2">
                            <span className="text-xl font-semibold text-green-600">
                                ₹{product.salePrice}
                            </span>
                            {product.salePrice !== product.price && (
                                <span className="text-gray-500 line-through">₹{product.price}</span>
                            )}
                            {product.discount > 0 && (
                                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-bold">
                                    {product.discount}% OFF
                                </span>
                            )}
                        </div>
                        <div className="mb-2">
                            <strong>SKU:</strong> {product.sku} &nbsp;|&nbsp;
                            <strong>Barcode:</strong> {product.barcode}
                        </div>
                        <div className="mb-2">
                            <strong>Stock:</strong>{" "}
                            <span className={product.stock > 0 ? "text-green-600" : "text-red-600"}>
                                {product.stock > 0 ? "In Stock" : "Out of Stock"}
                            </span>
                        </div>
                        <div className="mb-2">
                            <strong>Rating:</strong> {product.rating} / 5
                        </div>
                        <div className="mb-2">
                            <strong>Warranty:</strong> {product.warranty}
                        </div>
                        <div className="mb-2">
                            <strong>Return Policy:</strong> {product.returnPolicy}
                        </div>
                        <div className="mb-2">
                            <strong>Dimensions:</strong>{" "}
                            {product.dimensions && product.dimensions.length && product.dimensions.width && product.dimensions.height
                                ? `${product.dimensions.length} x ${product.dimensions.width} x ${product.dimensions.height} cm`
                                : "N/A"}
                        </div>
                        <div className="mb-2">
                            <strong>Weight:</strong> {product.weight}g
                        </div>
                        <div className="mb-4">
                            <strong>Variants:</strong>
                            <ul className="list-disc ml-6">
                                {product.variants?.map((v: any) => (
                                    <li key={v._id}>
                                        Color: {v.color}, Size: {v.size}, Material: {v.material}, Style: {v.style}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button
                            className={`flex items-center justify-center gap-2 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-200
                                    ${product.stock === 0 ? "opacity-60 cursor-not-allowed" : "hover:scale-105"}
                                `}
                            disabled={product.stock === 0}
                            onClick={handleAddToCart}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.85-1.53L17 13M7 13V6a1 1 0 011-1h3m4 0h2a1 1 0 011 1v7" />
                            </svg>
                            {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                        </button>
                    </div>
                </div>
                <div className="md:w-full mt-6">
                    <div
                        className="mb-2 text-gray-700"
                        dangerouslySetInnerHTML={{ __html: product.description }}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default ProductDetails;