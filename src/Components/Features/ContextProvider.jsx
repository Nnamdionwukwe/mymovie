// /* eslint-disable react/prop-types */
// import { createContext, useReducer, useEffect, useState } from "react";
// import CartReduser from "./CartReduser";
// import Data from "../Data.json";

// export const CartContext = createContext();

// //const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

// const ContextProvider = ({ children }) => {
//   const [query, setQuery] = useState("");

//   const handleInputhange = (e) => {
//     setQuery(e.target.value);
//   };

//   const filteredItems = Data.filter((product) =>
//     product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
//   );

//   function store() {
//     const storedValue = localStorage.getItem("cart");
//     return JSON.parse(storedValue);
//   }

//   const [cart, dispatch] = useReducer(CartReduser, store() || []);

//   useEffect(
//     function () {
//       localStorage.setItem("cart", JSON.stringify(cart));
//     },
//     [cart]
//   );

//   return (
//     <CartContext.Provider value={{ cart, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default ContextProvider;
