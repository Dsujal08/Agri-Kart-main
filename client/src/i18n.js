import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                login_to_cart: "Please log in to add items to your cart.",
                no_stock: "No more stock available!",
                low_stock: "Hurry! Only {{count}} left in stock.",
                added_cart: "{{name}} added to cart!",
                off: "OFF",
                stock_available: "Stock Available: {{count}}",
                out_of_stock: "Out of Stock",
                add_to_cart: "Add To Cart",
                adding: "Adding..."
            }
        },
        hi: {
            translation: {
                login_to_cart: "कृपया लॉग इन करें ताकि आप अपनी गाड़ी में सामान जोड़ सकें।",
                no_stock: "कोई और स्टॉक उपलब्ध नहीं!",
                low_stock: "जल्दी करें! केवल {{count}} शेष हैं।",
                added_cart: "{{name}} गाड़ी में जोड़ दिया गया!",
                off: "छूट",
                stock_available: "उपलब्ध स्टॉक: {{count}}",
                out_of_stock: "स्टॉक समाप्त",
                add_to_cart: "गाड़ी में जोड़ें",
                adding: "जोड़ रहा है..."
            }
        },
        ta: {
            translation: {
                login_to_cart: "உங்கள் வண்டியில் பொருட்களைச் சேர்க்க உள்நுழைக.",
                no_stock: "மேலும் பங்கு இல்லை!",
                low_stock: "விரைவாக! {{count}} மட்டும் மீதமுள்ளது.",
                added_cart: "{{name}} வண்டியில் சேர்க்கப்பட்டது!",
                off: "கழிவு",
                stock_available: "கிடைக்கும் பங்கு: {{count}}",
                out_of_stock: "பங்கு இல்லை",
                add_to_cart: "வண்டியில் சேர்",
                adding: "சேர்த்துக்கொண்டு..."
            }
        }
    },
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: { escapeValue: false }
});

export default i18n;
