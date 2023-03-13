import React from "react";
import { Button, Checkbox, ConfigProvider, Form, Input, Upload, Divider, InputNumber, Textarea } from "antd";
import "./UploadPage.css";

const { TextArea } = Input;

const UploadPage = function () {
  const onFinish = function (val) {
    console.log(val);
  };
  return (
    <div id="upload-container">
      <ConfigProvider theme={{ token: { colorPrimary: "#ff0000" } }}>
        <Form name="upload" style={{ maxWidth: 600 }} onFinish={onFinish}>
          <Form.Item name="upload">
            <div id="upload-img">
              <img src="/images/icons/camera.png" alt="" />
              <span>이미지를 업로드 해주세요.</span>
            </div>
          </Form.Item>
          <Divider></Divider>
          <Form.Item label={<span className="upload-label">상품명</span>} name="product-name" rules={[{ required: true, message: "상품명 입력은 필수사항입니다." }]}>
            <Input className="upload-name" placeholder="상품명을 입력해주세요" size="large" />
          </Form.Item>
          <Divider></Divider>

          <Form.Item label={<span className="upload-price">판매가</span>} name="product-price" rules={[{ required: true, message: "판매가 입력은 필수사항입니다." }]}></Form.Item>
          <Divider></Divider>
          <Form.Item>
            <InputNumber className="upload-price" min={0} defaultValue={0} size="large" />
          </Form.Item>
          <Divider></Divider>

          <Form.Item label={<div className="upload-label">상품설명</div>} name="product-description" rules={[{ required: true, message: "상품설명은 필수입력사항입니다." }]}>
            <TextArea
              size="large" id="product-description" showCount maxLength={300} placeholder="상품명을 작성해주세요"
            ></TextArea>
          </Form.Item>
          <Form.Item><Button id="submit-button" htmlType="submit">상품등록하기</Button></Form.Item>
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
