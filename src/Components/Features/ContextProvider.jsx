/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import CartReduser from "./CartReduser";

export const CartContext = createContext();

const ContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReduser, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
