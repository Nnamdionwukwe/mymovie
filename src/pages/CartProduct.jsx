/* eslint-disable react/prop-types */

const CartProduct = ({ product }) => {
  return (
    <div className="d-flex">
      <img src={product.thumbnail} />

      <div className="details">
        <p>{product.title}</p>
        <p>{product.price}</p>

        <div className="buttons">
          <button className="rounded-circle px-2">
            <b>-</b>
          </button>
          <button className="rounded">{product.quantity}</button>
          <button className="rounded-circle px-2">
            <b>+</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
