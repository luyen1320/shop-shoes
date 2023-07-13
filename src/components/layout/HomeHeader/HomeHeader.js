import React, { useState } from "react";
import "./HomeHeader.scss";
import { Link } from "react-router-dom";
import DropDown from "../../dropdown/DropDown";

function HomeHeader(activeHeading) {
  const [dropdown, setDropDown] = useState(false);
  // const [active, setActive] = useState(false);

  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  return (
    <header className="header">
      <div className="logo">
        <h1>
          <Link to="/" style={{ color: "#c72092", textDecoration: "none" }}>
            Shoe<span>s</span>
          </Link>
        </h1>
      </div>

      <ul>
        <li>
          <Link>Giới thiệu</Link>
        </li>
        <li
          onMouseEnter={() => setDropDown(true)}
          onMouseLeave={() => setDropDown(false)}
        >
          <Link to="" style={{ paddingBottom: "22px" }}>
            Brands <i className="fas fa-caret-down"></i>
          </Link>
          {dropdown && <DropDown />}
        </li>
        <li>
          <Link to="/sale">Sale</Link>
        </li>
        <li>
          <Link to="">Phụ kiện</Link>
        </li>
        <li>
          <Link to="">Liên hệ</Link>
        </li>
      </ul>

      <div className="icons">
        <Link>
          <i className="fa-solid fa-heart"></i>
        </Link>

        <Link to="/cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>

        <Link to="/login">
          <i className="fa-solid fa-user"></i>
        </Link>
      </div>
    </header>
  );
}

export default HomeHeader;
