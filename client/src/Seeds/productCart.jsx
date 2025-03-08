import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import iconCart from "../images/iconCart.png";
import { useCart } from "./Cart";
import { AppContent } from "../content/AppContent";
import { toast } from "react-toastify";

const ProductCart = ({ data }) => {
    const { addToCart, cart = [] } = useCart(); // Ensure cart is always an array
    const { userData } = useContext(AppContent);
    const navigate = useNavigate();
    const timeoutRef = useRef(null);

    const { id, name, price, image, slug, description, category, discount, stock } = data;
    const [added, setAdded] = useState(false);
    const [isAdding, setIsAdding] = useState(false);

    const discountedPrice = discount ? Math.round(price - (price * discount) / 100) : price;
    const formattedPrice = (amount) => new Intl.NumberFormat("en-IN").format(amount);
    
    const cartItem = cart.find((item) => item.productId === id) || null;
    const totalQuantity = cartItem ? cartItem.quantity : 0;
    const isOutOfStock = totalQuantity >= stock;

    const handleAddToCart = () => {
        if (isAdding || isOutOfStock) return;

        if (!userData) {
            toast.error("Please log in to add items to your cart.");
            navigate("/login");
            return;
        }

        if (stock - totalQuantity <= 0) {
            toast.error("No more stock available!");
            return;
        }

        if (stock < 3) {
            toast.warn(`Hurry! Only ${stock} left in stock.`);
        }

        setIsAdding(true);
        addToCart({ productId: id, name, price: discountedPrice, image, quantity: 1 });
        toast.success(`${name} added to cart!`);
        setAdded(true);

        timeoutRef.current = setTimeout(() => {
            setAdded(false);
            setIsAdding(false);
        }, 2000);
    };

    useEffect(() => {
        return () => clearTimeout(timeoutRef.current);
    }, []);

    return (
        <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1 duration-300 relative flex flex-col">
            {category && (
                <span className="absolute top-3 left-3 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {category}
                </span>
            )}

            {discount > 0 && (
                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse">
                    {discount}% OFF
                </span>
            )}

            <Link to={`/product/${slug}`} className="block">
                <div className="relative">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-56 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                    />
                    {added && <div className="absolute inset-0 bg-green-200 opacity-30 rounded-lg animate-ping"></div>}
                </div>
            </Link>

            <div className="flex flex-col items-center text-center mt-4">
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                <p className="text-sm text-gray-600 mt-1">{description.slice(0, 50)}...</p>
                <p className="text-lg font-bold text-green-600 mt-2">
                    {discount ? (
                        <>
                            <span className="text-red-500 line-through text-sm mr-2">₹{formattedPrice(price)}</span>
                            ₹{formattedPrice(discountedPrice)}
                        </>
                    ) : (
                        `₹${formattedPrice(price)}`
                    )}
                </p>
            </div>

            <div className="mt-4 relative">
                <button
                    className={`w-full px-4 py-2 rounded-lg shadow-md flex items-center justify-center gap-2 
                                transition active:scale-95 focus:ring-2 focus:ring-green-400
                                ${isOutOfStock ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 text-white"} 
                                ${isAdding ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={handleAddToCart}
                    disabled={isAdding || isOutOfStock}
                    aria-label={`Add ${name} to Cart`}
                >
                    <img src={iconCart} alt="Cart Icon" className="w-5" />
                    {isOutOfStock ? "Out of Stock" : isAdding ? "Adding..." : "Add To Cart"}
                </button>
                {added && (
                    <span
                        className="absolute left-1/2 transform -translate-x-1/2 -top-8 bg-green-500 text-white text-xs px-3 py-1 rounded-md shadow-md 
                                opacity-100 transition-opacity duration-500 animate-fadeInOut whitespace-nowrap"
                        aria-live="polite"
                    >
                        Added to Cart!
                    </span>
                )}
            </div>
        </div>
    );
};

export default ProductCart;
