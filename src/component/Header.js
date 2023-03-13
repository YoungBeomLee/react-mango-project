import React from "react";
import { Button } from "antd";
import { Link,useNavigate } from "react-router-dom";
import { VerticalAlignTopOutlined } from "@ant-design/icons";


const Header = function () {
  let navigate=useNavigate();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="../images/icons/logo.png" alt="" />
          </Link>
          <Button size="middle" type="primary" onClick={()=>{navigate('/UploadPage')}} icon={<VerticalAlignTopOutlined />}>
            상품업로드
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
