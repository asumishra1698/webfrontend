import React, { useEffect, useRef, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../reuseable/layout";
import { getProductsRequest } from "../../redux/actions/productActions";
import { MEDIA_URL } from "../../config/webRoutes";
import { Link } from "react-router-dom";

const ProductGrid: React.FC = () => {
    const dispatch = useDispatch();
    const { products = [], loading = false, error = null, pagination } = useSelector(
        (state: any) => state.product || {}
    );
    const [page, setPage] = useState(1);
    const [allProducts, setAllProducts] = useState<any[]>([]);
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        dispatch(getProductsRequest(page));
    }, [dispatch, page]);

    useEffect(() => {
        if (page === 1) {
            setAllProducts(products);
        } else if (products && products.length > 0) {
            setAllProducts(prev => [...prev, ...products]);
        }
    }, [products, page]);

    const hasMore = pagination ? page < pagination.pages : false;

    const lastProductRef = useCallback(
        (node: any) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new window.IntersectionObserver(entries => {
                if (entries[0].isIntersecting && hasMore) {
                    setPage(prevPage => prevPage + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading, hasMore]
    );

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

                    {error && <div className="text-center text-red-600">{error}</div>}

                    <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2">
                        {allProducts && allProducts.length > 0 ? (
                            allProducts.map((item: any, idx: number) => {
                                const card = (
                                    <div
                                        className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col cursor-pointer"
                                    >
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-auto w-full object-cover bg-gray-100"
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
                                                onClick={e => {
                                                    e.stopPropagation();
                                                    alert(`Added ${item.name} to cart!`);
                                                }}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                );

                                if (idx === allProducts.length - 1) {
                                    return (
                                        <Link
                                            ref={lastProductRef}
                                            key={item._id || item.id}
                                            to={`/products/${item._id || item.id}`}
                                            style={{ textDecoration: "none" }}
                                        >
                                            {card}
                                        </Link>
                                    );
                                } else {
                                    return (
                                        <Link
                                            key={item._id || item.id}
                                            to={`/products/${item._id || item.id}`}
                                            style={{ textDecoration: "none" }}
                                        >
                                            {card}
                                        </Link>
                                    );
                                }
                            })
                        ) : (
                            !loading && (
                                <div className="col-span-4 text-center text-gray-500 py-10">
                                    No products found.
                                </div>
                            )
                        )}
                    </div>
                    {loading && <div className="text-center text-lg mt-8">Loading...</div>}
                </div>
            </div>
        </Layout>
    );
};

export default ProductGrid;