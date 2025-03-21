import { useState, useEffect } from "react";
import "./CheckoutPage.css";
import { useNavigate } from "react-router-dom";
import StayUpdated from "../components/StayUpdate";
import Footer from "../components/Footer";

const CheckoutPage = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        address: "",
        additionalInfo: "",
    });

    const [cartItems, setCartItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (cartItems.length === 0) {
            alert("Savatchangiz bo‘sh! Mahsulot qo‘shing.");
            return;
        }

        const { fullName, phone, address } = formData;

        const orderData = {
            fullName,
            phone,
            address,
            cartItems,
        };

        console.log("Yuborilayotgan ma'lumotlar:", orderData); // Ma'lumotlarni tekshirish

        try {
            const response = await fetch("http://127.0.0.1:5000/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(orderData),
            });

            if (!response.ok) {
                throw new Error(`Server xatosi: ${response.status}`);
            }

            setShowModal(true);
            localStorage.removeItem("cart"); // Buyurtma berilgandan keyin savatchani tozalash
        } catch (error) {
            console.error("Xatolik:", error);
            alert("Xatolik yuz berdi. Backend serveringizni tekshiring.");
        }
    };

    return (
        <div className="checkout-container">
            <h2>Buyurtma Ma’lumotlari</h2>
            <form onSubmit={handleSubmit} className="checkout-form">
                <label>
                    To‘liq Ism:
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Telefon Raqam:
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Yashash Manzil:
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Qo‘shimcha Ma’lumot (ixtiyoriy):
                    <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                    ></textarea>
                </label>

                <button type="submit" className="order-btn">
                    Zakaz Berish
                </button>
            </form>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Buyurtmangiz qabul qilindi!</h2>
                        <p>Tez orada yetkazib beramiz.</p>
                        <button onClick={() => navigate("/")}>Bosh Sahifaga Qaytish</button>
                    </div>
                </div>
            )}

            <StayUpdated />
            <Footer />
        </div>
    );
};

export default CheckoutPage;
