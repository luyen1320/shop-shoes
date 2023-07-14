import React from "react";
import "./Banner.scss";
import banner1 from "./../../../assets/image/banner01.jpg";
import banner2 from "./../../../assets/image/banner02.jpg";
import banner3 from "./../../../assets/image/banner03.jpg";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

function Banner(props) {
  return (
    // <div className="banner">
    //   <div className="banner-content">
    //     <div className="banner-text">
    //       <h1>
    //         NIKE<br></br>
    //         <span>Collection</span>
    //       </h1>
    //       <p>
    //         Lorem Ipsum is simply dummy text of the printing and typesetting
    //         industry. Lorem Ipsum has been the industry's standard dummy text
    //         ever since the 1500s, when an unknown printer took a galley of type
    //         and scrambled it to make a type specimen book. It has survived not
    //         only five centuries, but also the leap into electronic typesetting,
    //         remaining essentially unchanged.
    //       </p>
    //     </div>

    //     <div className="banner-image">
    //       <img src={Shoe} alt="nike" />
    //     </div>
    //   </div>

    //   <div className="social-icon">
    //     <i className="fa-brands fa-facebook-f"></i>
    //     <i className="fa-brands fa-twitter"></i>
    //     <i className="fa-brands fa-instagram"></i>
    //     <i className="fa-brands fa-linkedin-in"></i>
    //   </div>
    // </div>
    <>
      <MDBCarousel showControls showIndicators style={{ top: "68px" }}>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src={banner1}
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src={banner2}
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src={banner3}
          alt="..."
        />
      </MDBCarousel>
    </>
  );
}

export default Banner;
