import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import "../pages/ProductDetail.css";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedSize, setSelectedSize] = useState("Large");
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Failed to fetch product data");
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!product) return <p>Product not found</p>;

    const addToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = [...cartItems, { ...product, selectedSize, quantity }];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <div className="product-detail">
            <div className="product-images">
                <img src={product.image} alt={product.title} className="thumbnail" />
            </div>
            <div className="product-info">
                <h1>{product.title}</h1>
                <div className="rating">{"⭐".repeat(Math.round(product.rating?.rate || 0))} {product.rating?.rate}/5</div>
                <div className="price">
                    <span className="current-price">${product.price}</span>
                </div>
                <p>{product.description}</p>

                <div className="sizes">
                    <p>Choose Size:</p>
                    <div className="size-options">
                        {["Small", "Medium", "Large", "X-Large"].map((size) => (
                            <button key={size} onClick={() => setSelectedSize(size)} className={selectedSize === size ? "selected" : ""}>{size}</button>
                        ))}
                    </div>
                </div>

                <div className="quantity-control">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>

                <button className="add-to-cart" onClick={addToCart}>
                    <FiShoppingCart /> Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;
