import React from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = (props)=>{
 return <React.Fragment>
   <header className={classes.header}>
       <h1>TShirts</h1>
       <HeaderCartButton />
   </header >
 </React.Fragment>
}
export default Header;