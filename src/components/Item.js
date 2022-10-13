import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false)

  const divClass = cart ? "in-cart" : ""

  const buttonText = cart ? "Remove From Cart" : "Add to Cart"

  function handleClick() {
    setCart(!cart)
  }

  return (
    <li className={divClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
