import { useState } from "react";
import Data from ".././Components/Data.json";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState(Data.products);

  return (
    <div className="container mt-5">
      <div className="row row-cols-3 row-cols-md-2 g-4">
        {products.map((p) => (
          <Product product={p} key={p.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
