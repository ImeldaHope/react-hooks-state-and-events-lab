import React, {useState} from "react";

function Item({ name, category }) {
  const [addCart, setAddCart] = useState(false);

  const addToCart = addCart ? "in-cart" : "";

  function addingToCart(){
    setAddCart((adds) => !adds)

  }

  return (
    <li className={addToCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addingToCart}>{addCart? " Remove From Cart": "Add to Cart"}</button>
    </li>
  );
}

export default Item;
