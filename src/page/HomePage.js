import React from "react";
// import HomeHeader from "../components/layout/HomeHeader/HomeHeader";
import Banner from "../components/layout/Banner/Banner";
import HomeProduct from "../components/layout/HomeProduct/HomeProduct";
import NewProduct from "../components/layout/NewProduct/NewProduct";
import HomeFooter from "../components/layout/HomeFooter/HomeFooter";
import Delivery from "../components/layout/Delivery/Delivery";

function HomePage(props) {
  return (
    <div>
      <Banner />
      <Delivery />
      <NewProduct />
      <HomeProduct />
      <HomeFooter />
    </div>
  );
}

export default HomePage;
