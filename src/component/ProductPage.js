import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductPage.css";
import dayjs from "dayjs";
import {Button,message} from 'antd';
import {API_URL} from "./config/constants.js";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ProductPage = function () {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const getProduct=function(){
    let url=`${API_URL}/products/${id}`
    axios
    .get(url)
      .then(function (result) {
        setProduct(result.data.product);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
   getProduct();
  }, []);

  if (product == null) {
    return <h1>상품정보를 받고 있습니다..</h1>;
  }
  const onClickPurchase = () => {
		axios
			.post(`${API_URL}/purchase/${id}`) //post로 서버에 결제상품정보전달
			.then((result) => {  //성공시 응답
				message.info('결제가 완료 되었습니다.')
        getProduct(); // 상품정보 갱신 함수실행
			})
			.catch((error) => { //에러시
				message.error(`에러가 발생했습니다. ${error.message}`); //메시지출력
			});
	};
  
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
        <img src={`${API_URL}/${product.imageUrl}`} alt={product.name} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" alt={product.seller} />
        <span className="product-seller">{product.seller}</span>
      </div>

      <div class="product-footer">
        <div className="content-box">
          <div id="name">{product.name}</div>
          <div id="price">{product.price}</div>
          <div id="createAt">2023.03.10</div>
          <pre id="description">{product.description}</pre>
          <span className="product-date">상품등록일:{dayjs(product.createdAt).format("YY년MM월DD일:HH시MM분ss초")}</span>
      </div>
      </div>
      <Button size="large" type="primary" danger={true} className="payment" onClick={onClickPurchase} disabled={product.soldout ===1}>즉시결제하기</Button>
    </div>
  );
};

export default ProductPage;
