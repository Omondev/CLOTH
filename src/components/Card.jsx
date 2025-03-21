import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../components/Card.css";
import { FiShoppingCart } from "react-icons/fi";

const Card = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("https://www.e-commerce-api-v2.nt.azimumarov.uz/api/v1/products")
            .then((response) => {
                const fetchedProducts = Array.isArray(response.data)
                    ? response.data
                    : response.data.products || [];
                setProducts(fetchedProducts);
            })
            .catch((error) => console.error("Xatolik:", error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading...</p>;

    const visibleProducts = Array.isArray(products) ? products.slice(0, 8) : [];

    const addToCart = (product) => {
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = [...cartItems, product];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setSelectedProduct(null);
    };

    return (
        <div className="section">
            <div className="product-list">
                {visibleProducts.map((product) => (
                    <div key={product?.id} className="card">
                        <img
                            src={product?.pictures?.[0] || "https://via.placeholder.com/200"}
                            alt={product?.name || "No Image"}
                        />
                        <h3>{product?.name || "Unknown Product"}</h3>
                        <div className="price-section">
                            <span className="current-price">${product?.price || "N/A"}</span>
                            {product?.oldPrice && <span className="old-price">${product?.oldPrice}</span>}
                            {product?.discount && <span className="discount">{product?.discount}%</span>}
                        </div>
                        <div className="rating">
                            {"⭐".repeat(Math.round(product?.rating || 0))}
                            <span className="rating-text">{product?.rating || "0"}/5</span>
                        </div>
                        <FiShoppingCart
                            className="cart-icon"
                            onClick={() => setSelectedProduct(product)}
                            style={{ cursor: "pointer", fontSize: "1.5rem" }}
                        />
                    </div>
                ))}
            </div>

            {products.length > 8 && (
                <button className="view-all" onClick={() => navigate("/category")}>
                    View All
                </button>
            )}

            {selectedProduct && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>{selectedProduct.name}</h2>
                        <p>Siz ushbu mahsulotni savatchaga qo‘shmoqchimisiz?</p>
                        <div className="modal-buttons">
                            <button className="yes-btn" onClick={() => addToCart(selectedProduct)}>Ha</button>
                            <button className="no-btn" onClick={() => setSelectedProduct(null)}>Yo‘q</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;


