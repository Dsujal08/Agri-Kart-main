import React from "react";
import { useCart } from "./Cart";
import { Trash2 } from "lucide-react"; // Using an icon for better UX

const CartItem = ({ data }) => {
    const { productId, name, price, image, quantity } = data;
    const { changeQuantity, removeFromCart } = useCart();

    if (!productId || !name || !price || !image) return null;

    const handleDecrease = () => {
        if (quantity > 1) {
            changeQuantity(productId, quantity - 1);
        }
    };

    const handleIncrease = () => {
        changeQuantity(productId, quantity + 1);
    };

    return (
        <div className="flex items-center gap-4 bg-gray-900 text-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-200">
            {/* Product Image */}
            <img src={image} alt={name} className="w-16 h-16 rounded-lg object-cover border border-gray-700" />

            {/* Product Details */}
            <div className="flex-1">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-sm text-gray-400">Price: ₹{price.toFixed(2)}</p>
                <p className="text-sm text-green-400 font-medium">Total: ₹{(Number(price) * quantity).toFixed(2)}</p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
                <button
                    className="bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold hover:bg-gray-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleDecrease}
                    disabled={quantity === 1}
                    aria-label={`Decrease quantity of ${name}`}
                >
                    −
                </button>
                <span className="text-lg font-bold">{quantity}</span>
                <button
                    className="bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold hover:bg-gray-600 transition"
                    onClick={handleIncrease}
                    aria-label={`Increase quantity of ${name}`}
                >
                    +
                </button>
            </div>

            {/* Remove Button */}
            <button
                className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition active:scale-95 flex items-center gap-1"
                onClick={() => removeFromCart(productId)}
                aria-label={`Remove ${name} from cart`}
            >
                <Trash2 size={18} />
            </button>
        </div>
    );
};

export default CartItem;
