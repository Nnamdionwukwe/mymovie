import { useContext } from "react";
import { CartContext } from "../Components/Features/ContextProvider";
import CartProduct from "./CartProduct";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          {cart.map((p) => (
            <CartProduct product={p} key={p.id} />
          ))}
        </div>
      </div>

      <div className="col-4 mb-3 text-white">
        <div className="bg-secondary">
          <h5>Total Item:</h5>
          <h5>Total Price:</h5>
          <button className="btn btn-warning">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
