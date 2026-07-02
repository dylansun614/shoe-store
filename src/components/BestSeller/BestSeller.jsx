import "./BestSeller.css";
import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";

function BestSeller() {
  return (
    <section className="best-seller">
      <div className="best-seller-header">
        <p>Our Favorites</p>
        <h2>Best Seller</h2>
      </div>

      <div className="best-seller-grid">
        {products
          .filter((product) => product.isBestSeller)
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
      </div>
    </section>
  );
}

export default BestSeller;