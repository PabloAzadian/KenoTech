import React, { createContext, useContext, useEffect, useState } from 'react';

const ShoppingCartContext = createContext();

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);

  // Load shopping cart data from localStorage when the component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
      setShoppingCart(JSON.parse(savedCart));
    }
  }, []);

  // Save shopping cart data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    console.log('Cart data in localStorage:', localStorage.getItem('shoppingCart'));
  }, [shoppingCart]);

  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
