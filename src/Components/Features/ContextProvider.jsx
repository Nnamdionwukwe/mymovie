/* eslint-disable react/prop-types */
import { createContext, useReducer, useEffect } from "react";
import CartReduser from "./CartReduser";

export const CartContext = createContext();

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const ContextProvider = ({ children }) => {
  function store() {
    const storedValue = localStorage.getItem("cart");
    return JSON.parse(storedValue);
  }

  const [cart, dispatch] = useReducer(CartReduser, store() || []);

  useEffect(
    function () {
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    [cart]
  );

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
