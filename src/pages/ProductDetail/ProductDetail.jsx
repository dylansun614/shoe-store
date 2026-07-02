import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import products from "../../data/products"
import "./ProductDetail.css"

function ProductDetail() {
  const { id } = useParams()

  const product = products.find((item) => item.id === Number(id))

  const [selectedSize, setSelectedSize] = useState(null)

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
          <p className="product-label">{product.brand}</p>
          <h1>{product.name}</h1>
          <p className="product-category">{product.category}</p>
          <p className="product-price">${product.price}</p>

          <p className="product-rating">
            ⭐ {product.rating} ({product.reviews} reviews)
          </p>

          <p className="product-description">{product.description}</p>

          <p className="product-stock">Stock: {product.stock}</p>

          <div className="product-colors">
            <p>Colors:</p>

            <div className="color-list">
              {product.colors.map((color) => (
                <span key={color}>{color}</span>
              ))}
            </div>
          </div>

          <div className="product-sizes">
            <p>Sizes:</p>

            <div className="size-list">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className={selectedSize === size ? "selected" : ""}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          <button>Add to Cart</button>
        </div>
      </section>
    </>
  )
}

export default ProductDetail