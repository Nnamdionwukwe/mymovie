/* eslint-disable react/prop-types */

const CartProduct = ({ product }) => {
  return (
    <div className="d-flex">
      <img src={product.thumbnail} />

      <div className="details">
        <p>{product.title}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default CartProduct;
