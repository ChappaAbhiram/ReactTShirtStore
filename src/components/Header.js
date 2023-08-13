import React, { useState } from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import Cart from './Cart'; // Import the Cart component

const Header = (props) => {
  const [isCartVisible, setIsCartVisible] = useState(false); // State for cart visibility

  const toggleCartVisibility = () => {
    setIsCartVisible((prevState) => !prevState); // Toggle the visibility
  };

  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>TShirts</h1>
        <HeaderCartButton onClick={toggleCartVisibility} />
      </header>
      {isCartVisible && <Cart />} {/* Show the cart if isCartVisible is true */}
    </React.Fragment>
  );
};

export default Header;

