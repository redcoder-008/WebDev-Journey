import "./product.css";
function Product({ title, price, features }) {
  return (
    <div className="Product">
      <h2>{title}</h2>
      <h4>Price: {price}</h4>
      <p>{features.a}</p>
    </div>
  );
}
export default Product;
