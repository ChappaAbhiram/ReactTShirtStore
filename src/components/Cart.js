import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "./Store/auth-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.items.reduce(
    (amount, item) =>
      amount +
      item.price * (item.largeQuantity + item.mediumQuantity + item.smallQuantity),
    0
  );

  const cartItems = {}; // Create an object to store unique cart items

  // Populate the cartItems object with unique items
  cartCtx.items.forEach((item) => {
    const itemKey = `${item.id}-${item.largeNo}-${item.mediumNo}-${item.smallNo}`;
    if (!cartItems[itemKey]) {
      cartItems[itemKey] = {
        id: item.id,
        name: item.name,
        price: item.price,
        largeQuantity: item.largeQuantity,
        mediumQuantity: item.mediumQuantity,
        smallQuantity: item.smallQuantity,
      };
    } else {
      // If item already exists, update the quantities
      cartItems[itemKey].largeQuantity += item.largeQuantity;
      cartItems[itemKey].mediumQuantity += item.mediumQuantity;
      cartItems[itemKey].smallQuantity += item.smallQuantity;
    }
  });

  const uniqueCartItems = Object.values(cartItems); // Convert object back to an array

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}>
        {uniqueCartItems.map((item) => (
          <li key={item.id}>
            <div>
              <span className={classes.name}>Name: {item.name}</span>
              <span className={classes.price}>Price: {item.price}</span>
              <span className={classes.largeQuantity}>
                Large: {item.largeQuantity}
              </span>
              <span className={classes.mediumQuantity}>
                Medium: {item.mediumQuantity}
              </span>
              <span className={classes.smallQuantity}>
                Small: {item.smallQuantity}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;






