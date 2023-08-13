import React, { useState, useEffect } from 'react';
import './App.css';
import InputForm from './TShirtsList/InputForm';
import Header from './components/Header';
import ShowForm from './TShirtsList/ShowForm';
import { CartContextProvider } from './components/Store/auth-context';
import Cart from './components/Cart';

function App() {
  const [allItems, setAllItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const itemsArray = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key));
      const item = { id: key, ...value };
      itemsArray.push(item);
    }
    setAllItems(itemsArray);
  }, []);

  const updateItemsHandler = (updatedItem) => {
    setAllItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.id === updatedItem.id) {
          return {
            ...item,
            largeQuantity: updatedItem.largeQuantity,
            mediumQuantity: updatedItem.mediumQuantity,
            smallQuantity: updatedItem.smallQuantity,
          };
        }
        return item;
      });
      localStorage.setItem(updatedItem.id, JSON.stringify(updatedItem));
      return updatedItems;
    });
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  const handleCartButtonClick = () => {
    setIsCartOpen(true);
  };
  
  return (
    <CartContextProvider>
      <div className="App">
        <Header onCartButtonClick={handleCartButtonClick} />
        <InputForm onUpdateItems={updateItemsHandler} />
        <ShowForm allItems={allItems} onUpdateItems={updateItemsHandler} />
        {isCartOpen && <Cart onClose={handleCartClose} />}
      </div>
    </CartContextProvider>
  );
}

export default App;









