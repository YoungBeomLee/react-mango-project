import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import { API_URL } from "./config/constants.js";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
function MainPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/products`)
      .then(function (result) {
        const products = result.data.product;
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
                    <img className="product-img" src={`${API_URL}/${product.imageUrl}`} alt={product.name} />
                  </div>
                  <div className="product-content">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}</span>
                    <div class="product-footer">
                      <div className="product-seller">
                        <img src="images/icons/avatar.png" className="product-avatar" alt={product.seller} />
                        <span>{product.seller}</span>
                        <span className="product-date">{dayjs(product.createdAt).format("YY년MM월DD일:HH시MM분ss초")}</span>
                      </div>
                    </div>
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
