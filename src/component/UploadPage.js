import React, { useState, useEffect } from "react";
import { API_URL } from "./config/constants.js";
import axios from "axios";
import { Button, Checkbox, ConfigProvider, Form, Input, Upload, Divider, InputNumber, Textarea } from "antd";
import { useNavigate } from "react-router-dom";
import "./UploadPage.css";

const { TextArea } = Input;

const UploadPage = function () {
  const [imageUrl, setImageUrl] = React.useState(null);
  const onFinish = function (val) {
    console.log(val);
    axios
      .post(`${API_URL}/products`, {
        name: val.name,
        description: val.description,
        seller: val.seller,
        price: parseInt(val.price),
        imageUrl: imageUrl,
      })
      .then((result) => {
        console.log(result);
      })
     
  };
  const onChangeImage = function (info) {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      const response = info.file.response;
      const imageUrl = response.imageUrl;
      //파일 업로드가 완료 되면 setImageUrl 속성에 imageUrl 을 할당
      setImageUrl(imageUrl);
    }
  };
  return (
    <div id="upload-container">
      <ConfigProvider theme={{ token: { colorPrimary: "#ff0000" } }}>
        <Form name="upload" style={{ maxWidth: 600 }} onFinish={onFinish}>
          <Form.Item name="upload">
            <Upload name="image" action={`${API_URL}/image`} listType="picture" showUploadList={false} onChange={onChangeImage}>
              {imageUrl ? (
                <img id="upload-img" src={`${API_URL}/${imageUrl}`} alt="" />
              ) : (
                <div id="upload-img-placeholder">
                  <img src="/images/icons/camera.png" alt="" />
                  <span>이미지를 업로드 해주세요.</span>
                </div>
              )}
            </Upload>
          </Form.Item>
          <Divider></Divider>
          <Form.Item label={<span className="upload-label">판매자명</span>} name="seller" rules={[{ required: true, message: "판매자명 입력은 필수사항입니다." }]}>
            <Input className="upload-name" placeholder="판매자명을 입력해주세요" size="large" />
          </Form.Item>

          <Form.Item label={<span className="upload-label">상품명</span>} name="name" rules={[{ required: true, message: "상품명 입력은 필수사항입니다." }]}>
            <Input className="upload-name" placeholder="상품명을 입력해주세요" size="large" />
          </Form.Item>
          <Divider></Divider>

          <Form.Item label={<span className="upload-price">판매가</span>} name="price" rules={[{ required: true, message: "판매가 입력은 필수사항입니다." }]}>
            <InputNumber className="upload-price" size="large" min={0} defaultValue={0} />
          </Form.Item>
          <Divider></Divider>
          <Form.Item>
            <InputNumber className="upload-price" min={0} defaultValue={0} size="large" />
          </Form.Item>
          <Divider></Divider>

          <Form.Item label={<div className="upload-label">상품설명</div>} name="description" rules={[{ required: true, message: "상품설명은 필수입력사항입니다." }]}>
            <TextArea size="large" id="product-description" showCount maxLength={300} placeholder="상품명을 작성해주세요"></TextArea>
          </Form.Item>
          <Form.Item>
            <Button id="submit-button" htmlType="submit">
              상품등록하기
            </Button>
          </Form.Item>
          <Divider></Divider>

          {/* <Form.Item label="Username" name="userName" rules={[{ required: true, message: "필수입력속성입니다" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="Password" rules={[{ required: true, message: "필수입력속성입니다" }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 0,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            전송하기
          </Button>
        </Form.Item> */}
        </Form>
      </ConfigProvider>
    </div>
  );
};

export default UploadPage;
