// import React, { createContext, useState } from 'react';

// const CartContext = createContext({
//   items: [],
//   totalAmount: 0,
//   addItem: (item) => {},
//   removeItem: (id) => {},
//   updateItemQuantity: (id) => {},
//   increaseItemQuantity: (id) => {},
// });

// export const CartContextProvider = (props) => {
//   const [items, setItems] = useState([]);

//   const addItemHandler = (item) => {
//     const existingItemIndex = items.findIndex(
//       (existingItem) => existingItem.id === item.id
//     );

//     if (existingItemIndex !== -1) {
//       const updatedItems = [...items];
//       updatedItems[existingItemIndex].largequantity += item.largequantity;
//       updatedItems[existingItemIndex].mediumquantity += item.mediumquantity;
//       updatedItems[existingItemIndex].smallquantity += item.smallquantity;
//       setItems(updatedItems);
//     } else {
//       setItems((prevItems) => [...prevItems, item]);
//     }
//   };

//   const removeItemHandler = (itemId) => {
//     setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
//   };

//   const updateItemQuantity = (itemId) => {
//     setItems((prevItems) => {
//       return prevItems.map((item) => {
//         if (item.id === itemId) {
//           return { ...item, quantity: item.quantity - 1 };
//         }
//         return item;
//       });
//     });
//   };

//   const increaseItemQuantity = (itemId) => {
//     setItems((prevItems) => {
//       return prevItems.map((item) => {
//         if (item.id === itemId) {
//           return { ...item, quantity: item.quantity + 1 };
//         }
//         return item;
//       });
//     });
//   };

//   const contextValue = {
//     items: items,
//     totalAmount: 0,
//     addItem: addItemHandler,
//     removeItem: removeItemHandler,
//     updateItemQuantity: updateItemQuantity,
//     increaseItemQuantity: increaseItemQuantity,
//   };

//   return (
//     <CartContext.Provider value={contextValue}>
//       {props.children}
//     </CartContext.Provider>
//   );
// };

// export default CartContext;
import React, { createContext, useState } from 'react';

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  updateItemQuantity: (itemId, size) => {},
});

export const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemHandler = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const updateItemQuantity = (itemId, size) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === itemId) {
          const sizeQuantityProperty = `${size}Quantity`;
          return {
            ...item,
            [sizeQuantityProperty]: item[sizeQuantityProperty] - 1,
          };
        }
        return item;
      });
    });
  };

  const contextValue = {
    items: items,
    addItem: addItemHandler,
    updateItemQuantity: updateItemQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;







