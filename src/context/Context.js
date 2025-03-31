// src/context/Context.js
import { createContext, useContext, useReducer, useState } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
  // Generate 50 random products
  const products = [...Array(50)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),  // Updated method
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  // Cart State
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  // Product Filters State
  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  const [wishlist, setWishlist] = useState([]);

const addToWishlist = (product) => {
  setWishlist([...wishlist, product]);
};

const removeFromWishlist = (id) => {
  setWishlist(wishlist.filter((product) => product.id !== id));
};


  // Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Cart.Provider
      value={{
        state,
        dispatch,
        productState,
        productDispatch,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

// Custom Hook for Context
export const CartState = () => {
  return useContext(Cart);
};

export default Context;
