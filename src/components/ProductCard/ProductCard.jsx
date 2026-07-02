import "./ProductCard.css"
import { Link } from "react-router-dom"

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </Link>
  )
}

export default ProductCard