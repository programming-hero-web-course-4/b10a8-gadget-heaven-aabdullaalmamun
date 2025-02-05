

import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";


const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  
  const addToCart = (product) => {
    setCart((prev) => {
      const alreadyInCart = prev.some((item) => item.product_id === product.product_id);
      if (!alreadyInCart) {
        return [...prev, product];
      }
      return prev;
    });
  };


  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const alreadyInWishlist = prev.some((item) => item.product_id === product.product_id);
      if (!alreadyInWishlist) {
        return [...prev, product];
      }
      return prev;
    });
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.product_id !== productId));
  };

  // Remove from wishlist
  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((item) => item.product_id !== productId));
  };

  return (
    <StateContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishlist,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};


StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook
export const useStateContext = () => useContext(StateContext);
