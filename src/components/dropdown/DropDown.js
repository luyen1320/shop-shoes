import React, { useState } from "react";
import { links } from "../../assets/data/data";
import { Link } from "react-router-dom";
import "./DropDown.scss";

const DropDown = () => {
  const [dropdown, setDropDown] = useState(false);

  return (
    <ul
      className={dropdown ? "brands clicked" : "brands"}
      onClick={() => setDropDown(!dropdown)}
    >
      {links.map((item) => (
        <li key={item.id}>
          <Link
            to={item.path}
            className={item.cName}
            onClick={() => setDropDown(false)}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DropDown;
