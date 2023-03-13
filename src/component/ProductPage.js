import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductPage.css";

const ProductPage = function () {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    let url = `https://3bc46ad5-572a-4035-8a91-1e328895a799.mock.pstmn.io/products/${id}`;
    axios
      .get(url)
      .then(function (result) {
        setProduct(result.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (product == null) {
    return <h1>상품정보를 받고 있습니다..</h1>;
  }
  return (
    <div>
      <button
        onClick={function () {
          navigate(-1);
        }}
        id="back-btn"
      >
        뒤로가기
      </button>
      <button
        onClick={function () {
          navigate("/");
        }}
      >
        메인페이지로 가기
      </button>
      <div id="image-box">
        <img src={`/${product.imageUrl}`} alt={product.name} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" alt={product.seller} />
        <span className="product-seller">{product.seller}</span>
      </div>

      <div className="content-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}</div>
        <div id="createAt">2023.03.10</div>
        <div id="description">{product.desc}</div>
      </div>
    </div>
  );
};

export default ProductPage;
