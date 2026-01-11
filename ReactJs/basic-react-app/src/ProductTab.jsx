import Product from "./Product";

function ProductTab() {
  // let options = { a: "fast", b: "secure", c: "sasta" };
  return (
    <>
      <Product title="Laptop" price={30000} features={{ a: "fast" }} />

      {/* <Product title="Phone" price={20000} features={options} />
      <Product title="Pen" price={10} features={options} /> */}
    </>
  );
}
export default ProductTab;
