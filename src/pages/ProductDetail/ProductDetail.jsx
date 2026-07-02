import { useParams, Link } from "react-router-dom"
import products from "../../data/products"
import "./ProductDetail.css"

function ProductDetail() {
  const { id } = useParams()

  const product = products.find((item) => item.id === Number(id))

  if (!product) {
    return <h1>Product not found</h1>
  }

  return (
    <>
        <Link to="/" className="back-link">
            ← Back to Shop
        </Link>

    <section className="product-detail">
      <div className="product-detail-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-detail-info">
        <p className="product-label">GETTING RICH</p>
        <h1>{product.name}</h1>
        <p className="product-price">${product.price}</p>
        <p className="product-description">
          A clean everyday sneaker designed for comfort, confidence, and modern streetwear style.
        </p>

        <button>Add to Cart</button>
      </div>
    </section>
  </>
  )
}

export default ProductDetail