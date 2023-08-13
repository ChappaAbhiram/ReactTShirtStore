import React, { useContext } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';
import CartContext from './Store/auth-context';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartCtx.items.length}</span>
    </button>
  );
};

export default HeaderCartButton;

