import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";
import StayUpdated from "../components/StayUpdate";
import Footer from "../components/Footer"

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); // Sahifaga o'tkazish uchun

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = (updatedCart[index].quantity || 1) + 1;
    updateCart(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      updatedCart.splice(index, 1);
    }
    updateCart(updatedCart);
  };

  const removeItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    updateCart(updatedCart);
  };

  const handleCheckout = () => {
    navigate("/checkout"); // Checkout sahifasiga o'tish
  };

  return (
    <>
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <p className="empty-cart">Savatchangiz bo‘sh</p>
      ) : (
        <div className="cart">
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.pictures?.[0] || "https://via.placeholder.com/100"} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Size: {item.size || "N/A"}</p>
                  <p>Color: {item.color || "N/A"}</p>
                  <span className="price">${item.price}</span>
                </div>
                <div className="quantity-control">
                  <button onClick={() => decreaseQuantity(index)}>-</button>
                  <span>{item.quantity || 1}</span>
                  <button onClick={() => increaseQuantity(index)}>+</button>
                </div>
                <button className="delete" onClick={() => removeItem(index)}>🗑</button>
              </div>
            ))}
          </div>
          <div className="order-summary">
            <h3>Order Summary</h3>
            <button className="checkout" onClick={handleCheckout}>Go to Checkout →</button>
          </div>
        </div>
      )}
      
      </div>
      <StayUpdated />
      <Footer />
    </>
  );
};

export default CartPage;
