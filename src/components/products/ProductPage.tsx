import React, { useState } from "react";
import ProductDetails from "../products/productDetails";
import CartSidebar from "../products/cartSidebar";

const ProductPage: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <ProductDetails onAddToCart={() => setCartOpen(true)} />
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default ProductPage;