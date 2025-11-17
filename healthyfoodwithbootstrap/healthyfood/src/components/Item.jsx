import React from "react";
import css from "./Item.module.css";
function Item({ foodItem }) {
  return (
    <li
      className={`list-group-item bg-success text-light border border-dark p-3 ${css["sk-item"]}`}
    >
      {foodItem}
    </li>
  );
}

export default Item;
