import React, { useState, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import axios from "axios";
import FilterSidebar from "./FilterSidebar";
import "./styles.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ price: 200, color: "", size: "" });

  useEffect(() => {
    axios
      .get("https://www.e-commerce-api-v2.nt.azimumarov.uz/api/v1/products")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          setProducts([]);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.price <= filters.price
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container">
      <FilterSidebar filters={filters} setFilters={setFilters} />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card">
            <img src={product.pictures?.[0]} alt={product.name} />
            <h3>{product.name}</h3>
            <span className="price">${product.price}</span>
            <FiShoppingCart className="cart-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

