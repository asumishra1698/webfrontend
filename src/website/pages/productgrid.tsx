import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout";
import { getProductsRequest } from "../../redux/actions/productActions";
import { MEDIA_URL } from "../../config/webRoutes";

const ProductGrid: React.FC = () => {
    const dispatch = useDispatch();
    const { products = [], loading = false, error = null } = useSelector(
        (state: any) => state.product || {}
    );

    useEffect(() => {
        dispatch(getProductsRequest());
    }, [dispatch]);

    return (
        <Layout>
            <div className="bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                            Products
                        </h1>
                        <p className="mt-4 text-xl text-gray-600">
                            Browse our latest products and add them to your cart!
                        </p>
                    </div>

                    {loading && <div className="text-center text-lg">Loading...</div>}
                    {error && <div className="text-center text-red-600">{error}</div>}

                    <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                        {products && products.length > 0 ? (
                            products.map((item: any) => (
                                <div
                                    key={item._id || item.id}
                                    className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
                                >
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-56 w-full object-cover bg-gray-100"
                                            src={`${MEDIA_URL}products/${item.thumbnail}`}
                                            alt={item.name}
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                            {item.name}
                                        </h2>
                                        <p className="text-lg font-bold text-green-600 mb-4">
                                            ₹{item.price}
                                        </p>
                                        <button
                                            className="mt-auto bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded transition-all"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            !loading && (
                                <div className="col-span-4 text-center text-gray-500 py-10">
                                    No products found.
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductGrid;