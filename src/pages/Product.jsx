/* eslint-disable react/prop-types */
const Product = ({ product }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={product.thumbnail}
          className="card-img-top h-75"
          alt={product.title}
        />
        <div className="card-body">
          <h4 className="card-title">{product.title}</h4>
          <h5 className="">${product.price}</h5>

          <a href="" className="btn btn-primary">
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
