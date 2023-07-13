import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { productImages } from "../../assets/data/image";
import "./Product.scss";
import HomeHeader from "../layout/HomeHeader/HomeHeader";
import ProductImagesSlider from "./slider/Slider";
import HomeFooter from "../layout/HomeFooter/HomeFooter";

function Product(props) {
  return (
    <>
      <div className="slider-product">
        <div className="product-content">
          <div className="slide-left">
            <div className="product-img">
              <ProductImagesSlider images={productImages} />
            </div>
          </div>
          <div className="slide-right">
            <div className="product-content-right-name">
              <h2>
                Giày Nike Air Jordan 1 Retro High OG GS ‘Chicago Lost & Found’
                FD1437-612
              </h2>
              <p>Mã: FD1437-612</p>
            </div>

            <div className="product-content-right-price">
              <p>
                1.200.000<sup>đ</sup>
              </p>
            </div>

            <div className="product-content-right-size">
              <p style={{ fontWeight: "bold" }}>Size:</p>
              <div className="size">
                <span>36</span>
                <span>37</span>
                <span>38</span>
                <span>39</span>
                <span>40</span>
                <span>41</span>
                <span>42</span>
              </div>
            </div>

            <div className="quantity">
              <p style={{ fontWeight: "bold", marginBottom: "0px" }}>
                Số lượng:
              </p>
              &nbsp;
              <input type="number" min="0" value="1" />
            </div>

            <div className="product-content-right-button">
              <button>Mua Hàng</button>
            </div>
          </div>
        </div>
      </div>
      <HomeFooter />
    </>
  );
}

export default Product;
