import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import axios from "axios";
function MainPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://3bc46ad5-572a-4035-8a91-1e328895a799.mock.pstmn.io/products/")
      .then(function (result) {
        const products = result.data.products1;
        setProducts(products);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" alt="" />
        </div>
        <h1>Products</h1>
        <div id="product-list">
          {products.map((product, idx) => {
           console.log(product);
           return (
              <div className="product-card" key={idx}>
                <Link className="product-link" to={`/ProductPage/${product.id}`}>
                  <div>
                    <img className="product-img" src={product.imageUrl} alt={product.name} />
                  </div>
                  <div className="product-content">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}</span>
                    <span className="product-seller">
                      <img src="images/icons/avatar.png" className="product-avatar" alt={product.seller} />
                      <span>{product.seller}</span>
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      
    </div>
  );
}
export default MainPage;
