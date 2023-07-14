import React from "react";
import "./Delivery.scss";

function Delivery(props) {
  return (
    <div className="ps-delivery">
      <div className="ps">
        <div className="ps1 wid">
          <i class="icons fa-solid fa-wallet"></i>
          <h3 className="title">CAM KẾT CHÍNH HÃNG</h3>
          <p className="content-title">100% Authentic</p>
          <div>
            <p className="content-t">
              Cam kết san phẩm chính hãng từ Châu Âu, Châu Mỹ...
            </p>
          </div>
        </div>
      </div>
      <div className="ps">
        <div className="ps1 wid">
          <i class="icons fa-solid fa-truck"></i>
          <h3 className="title">GIAO HÀNG HỎA TỐC</h3>
          <p className="content-title">Express delivery</p>
          <div>
            <p className="content-t">
              SHIP hỏa tốc 1h nhận hàng trong nội thành Hà Nội
            </p>
          </div>
        </div>
      </div>
      <div className="ps">
        <div className="ps1 wid">
          <i class="icons fa-solid fa-phone"></i>
          <h3 className="title">HỖ TRỢ 24/24</h3>
          <p className="content-title">Supporting 24/24</p>
          <div>
            <p className="content-t">Gọi ngay</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
