import React from "react";
import "./Delivery.scss";

function Delivery(props) {
  return (
    <div className="ps-delivery">
      <div className="ps">
        <i className="fa-solid fa-money"></i>
        <h3 style={{ fontSize: "22px" }}>CAM KẾT CHÍNH HÃNG</h3>
        <p style={{ fontSize: "14px" }}>100% Authentic</p>
        <div>
          <p style={{ fontSize: "14px" }}>
            Cam kết san phẩm chính hãng từ Châu Âu, Châu Mỹ...
          </p>
        </div>
      </div>
      <div className="ps">
        <i className="fa-solid fa-money"></i>
        <h3 style={{ fontSize: "22px" }}>GIAO HÀNG HỎA TỐC</h3>
        <p style={{ fontSize: "14px" }}>Express delivery</p>
        <div>
          <p style={{ fontSize: "14px" }}>
            SHIP hỏa tốc 1h nhận hàng trong nội thành Hà Nội
          </p>
        </div>
      </div>
      <div className="ps">
        <i className="fa-solid fa-money"></i>
        <h3 style={{ fontSize: "22px" }}>HỖ TRỢ 24/24</h3>
        <p style={{ fontSize: "14px" }}>Supporting 24/24</p>
        <div>
          <p style={{ fontSize: "14px" }}>Gọi ngay</p>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
