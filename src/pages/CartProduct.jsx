// import { useContext } from "react";
// // import { CartContext } from "../Components/Features/ContextProvider";

// /* eslint-disable react/prop-types */

// const CartProduct = ({ product }) => {
//   // const { cart, dispatch } = useContext(CartContext);

//   const Increase = (id) => {
//     const Index = cart.findIndex((p) => p.id === id);
//     if (cart[Index].quantity < 10) {
//       // dispatch({ type: "Increase", id });
//     }
//   };

//   const Decrease = (id) => {
//     const Index = cart.findIndex((p) => p.id === id);
//     // if (cart[Index].quantity > 1) {
//       // dispatch({ type: "Decrease", id });
//     }
//   };

//   return (
//     <div className="d-flex border mt-3 mb-3">
//       <img src={product.thumbnail} className="w-25 h-25" />

//       <div className="details ms-4">
//         <p>{product.title}</p>
//         <p>{product.price}</p>

//         <div className="buttons">
//           <button
//             className="rounded-circle px-2"
//             onClick={() => Decrease(product.id)}
//           >
//             <b>-</b>
//           </button>
//           <button className="rounded">{product.quantity}</button>
//           <button
//             className="rounded-circle px-2"
//             onClick={() => Increase(product.id)}
//           >
//             <b>+</b>
//           </button>
//         </div>

//         <button
//           className="btn btn-sm btn-warning mb-2 mt-2"
//           onClick={() => dispatch({ type: "Remove", id: product.id })}
//         >
//           Remove
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartProduct;
