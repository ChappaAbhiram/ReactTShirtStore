import React, { Fragment, useContext } from 'react';
import CartContext from '../components/Store/auth-context';

const ShowForm = (props) => {
  const cartCtx = useContext(CartContext);

  const handleAddToCart = (item, size) => {
    let updatedItem = { ...item };
    const sizeQuantityProperty = `${size.toLowerCase()}Quantity`; // Adjust size property to lowercase
  
    if (updatedItem[sizeQuantityProperty] > 0) {
      updatedItem = {
        ...updatedItem,
        size: size.charAt(0).toUpperCase() + size.slice(1),
        quantity: 1,
      };
  
      cartCtx.addItem(updatedItem);
  
      updatedItem[sizeQuantityProperty]--; // Reduce the corresponding size quantity
      props.onUpdateItems(updatedItem); // Update the local state of items
  
      // Update the local storage with the new quantity
      localStorage.setItem(updatedItem.id, JSON.stringify(updatedItem));
    }
  };
  
  
  

  return (
    <Fragment>
      <h1>List of TShirts</h1>
      <ul>
        {props.allItems.map((item) => (
          <li key={item.id}>
            {item.id} - {item.desc} - ${item.price} -
            <button onClick={() => handleAddToCart(item, 'large')} disabled={item.largeQuantity === 0}>
              Buy Large - {item.largeQuantity} Available
            </button>
            <button onClick={() => handleAddToCart(item, 'medium')} disabled={item.mediumQuantity === 0}>
              Buy Medium - {item.mediumQuantity} Available
            </button>
            <button onClick={() => handleAddToCart(item, 'small')} disabled={item.smallQuantity === 0}>
              Buy Small - {item.smallQuantity} Available
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ShowForm;







