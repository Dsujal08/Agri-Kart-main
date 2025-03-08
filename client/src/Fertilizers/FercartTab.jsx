import React from "react";
import { useCart } from "./FerCart";
import { useNavigate } from "react-router-dom"; 
import CartItem from "./FercartItem"; 
import { products } from "./Ferproducts"; 

const CartTab = () => {
    const { items, statusTab, toggleStatusTab } = useCart();
    const navigate = useNavigate(); // ✅ Initialize navigate function

    // Calculate total price including discounts
    const cartWithPrices = items.map((item) => {
        const product = products.find((p) => p.id === item.productId);

        if (!product) return { ...item, price: 0 }; // Prevent errors if product is missing

        const discountedPrice = product.discount
            ? (product.price - (product.price * product.discount) / 100)
            : product.price;

        return { ...item, price: discountedPrice }; // ✅ Attach updated price with discount
    });

    const totalPrice = cartWithPrices.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div
            className={`fixed top-0 right-0 bg-gray-900 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_100px] 
            transform transition-transform duration-500 
            ${statusTab ? "" : "translate-x-full"}`}
        >
            {/* Header */}
            <div className="p-5 border-b border-gray-700 flex justify-between items-center">
                <h2 className="text-white text-xl font-semibold">Shopping Cart</h2>
                <button 
                    className="text-gray-400 hover:text-white transition text-2xl px-3 py-1 rounded-md"
                    onClick={toggleStatusTab}
                >
                    ✕
                </button>
            </div>

            {/* Cart Items - Scrollable */}
            <div className="p-5 space-y-4 overflow-y-auto max-h-[70vh]">
                {cartWithPrices.length > 0 ? (
                    cartWithPrices.map((item) => <CartItem key={item.productId} data={item} />)
                ) : (
                    <p className="text-gray-400 text-center">Your cart is empty.</p>
                )}
            </div>

            {/* Footer - Total & Buttons */}
            <div className="p-5 border-t border-gray-700">
                <div className="flex justify-between text-white text-lg font-semibold">
                    <span>Total:</span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-4">
                    <button
                        className="bg-gray-700 text-white py-2 rounded-md hover:bg-gray-600 transition"
                        onClick={toggleStatusTab}
                    >
                        Close
                    </button>
                    <button
                        className="bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition"
                        onClick={() => navigate("/checkout")} // ✅ Correctly navigate
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartTab;
