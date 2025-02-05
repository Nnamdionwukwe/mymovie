import { createContext } from "react";

/* eslint-disable react/prop-types */
export const ShopContext = createContext(null);

export default function ShopContextmProvider({ children }) {
  const contextValue = {};

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}
