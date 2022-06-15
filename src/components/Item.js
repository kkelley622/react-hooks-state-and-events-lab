import React, { useState } from "react";

function Item({ name, category }) {
  const [ cart, setCart] = useState(false)
  const appClass = !cart ? "Add to Cart" : "Remove from Cart"
  const handleClick = () => {
    setCart(!cart)
  }
  return (
    <li className={cart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{appClass}</button>
    </li>
  );
}

export default Item;
