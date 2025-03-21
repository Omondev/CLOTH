import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../pages/Catigories.css";
import { FiShoppingCart } from "react-icons/fi";
import StayUpdated from "../components/StayUpdate";
import Footer from "../components/Footer";

const Categories = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({ price: [10, 200], color: "", size: "" });
    const [currentPage, setCurrentPage] = useState(1);
    const [cart, setCart] = useState([]);
    const itemsPerPage = 8;
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("https://www.e-commerce-api-v2.nt.azimumarov.uz/api/v1/products")
            .then((response) => {
                setProducts(response.data.products);
            })
            .catch((error) => console.error("Error fetching products:", error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading...</p>;

    const filteredProducts = products.filter((product) =>
        product.price >= filters.price[0] && product.price <= filters.price[1] &&
        (filters.color ? product.color === filters.color : true) &&
        (filters.size ? product.size === filters.size : true)
    );

    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

 const addToCart = (product) => {
    if (cart.some(item => item.id === product.id)) {
        alert(`${product.name} allaqachon savatchaga qo‘shilgan!`);
    } else {
        setCart([...cart, product]);
        alert(`${product.name} savatchaga qo‘shildi!`);
    }
};


    return (
        <>
        <div className="cotenr">
            <div className="filters">
                <h3>Filters</h3>
                <label>Price: ${filters.price[0]} - ${filters.price[1]}</label>
                <input
                    type="range"
                    min="10"
                    max="200"
                    value={filters.price[0]}
                    onChange={(e) => setFilters({ ...filters, price: [e.target.value, filters.price[1]] })}
                />
                <input
                    type="range"
                    min="10"
                    max="200"
                    value={filters.price[1]}
                    onChange={(e) => setFilters({ ...filters, price: [filters.price[0], e.target.value] })}
                />
                <select onChange={(e) => setFilters({ ...filters, color: e.target.value })}>
                    <option value="">All Colors</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
                <select onChange={(e) => setFilters({ ...filters, size: e.target.value })}>
                    <option value="">All Sizes</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                </select>
                <button onClick={() => setFilters({ price: [10, 200], size: "", color: "" })}>Apply Filter</button>
            </div>
            <div className="products-section">
                <h2>Casual</h2>
                <div className="product-list">
                    {currentProducts.map((product) => (
                        <div key={product.id} className="car">
                            <img src={product.pictures[0]} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>${product.price}</p>
                            <FiShoppingCart
                                className="cart-icon"
                                onClick={() => addToCart(product)}
                                style={{ cursor: "pointer", fontSize: "1.5rem" }}
                            />
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    {[...Array(Math.ceil(filteredProducts.length / itemsPerPage)).keys()].map((number) => (
                        <button key={number} onClick={() => paginate(number + 1)}>
                            {number + 1}
                        </button>
                    ))}
                </div>
              
            </div>
            
            </div>
            
            <StayUpdated />
            <Footer />

        </>

    );
};
            

export default Categories;
